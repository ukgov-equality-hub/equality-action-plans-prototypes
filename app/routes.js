//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/choosing-actions/simple-pick-list/answer-action-plan-external', function(request, response){
    var actionPlanIsExternal = request.session.data["choosingActions.alreadyHaveActionPlan"]

    if (actionPlanIsExternal == "Yes") {
        response.redirect("external-action-plan")
    } else {
        response.redirect("choose-actions")
    }
})

router.post('/choosing-actions/suggested-actions/answer-help-requested', function(request, response){
    var helpRequested = request.session.data['suggestedActions']['help-requested']

    if (helpRequested == "Yes") {
        response.redirect("do-you-want-to-answer-additional-questions")
    } else {
        response.redirect("choose-actions-summary")
    }
})

router.post('/choosing-actions/suggested-actions/answer-additional-questions', function(request, response){
    var answerAdditionalQuestions = request.session.data['suggestedActions']['additional-questions']

    if (answerAdditionalQuestions == "Yes") {
        response.redirect("questionnaire")
    } else {
        request.session.data['suggestedActions']['answered-questionnaire'] = "false";
        response.redirect("suggested-actions")
    }
})

router.post('/tailored-action-plans/tiered-categorised-checklist/answer-action-details', function(request, response){
    var submittedAction;
    var nextAction;

    request.session.data.db.actions.forEach(function (action) {
        if (submittedAction && !nextAction) {
            nextAction = action;
        }

        if (action.shortCode == request.session.data.tieredCategorisedChecklist.submittedActionShortCode) {
            submittedAction = action;
        }
    })

    var actionsOutstandingAtThisLevel = false;

    request.session.data.db.actions.forEach(function (action) {
        var submittedDataForThisAction = request.session.data.tieredCategorisedChecklist[action.shortCode];
        var submittedStatus = submittedDataForThisAction ? submittedDataForThisAction.status : null;

        if (action.category == submittedAction.category
            && action.level <= submittedAction.level
            && (!submittedStatus
                || submittedStatus != "embedded"))
        {
            actionsOutstandingAtThisLevel = true;
        }
    })

    if (request.session.data.assessingFullCategory
        && nextAction.category == submittedAction.category
        && (nextAction.level == submittedAction.level || !actionsOutstandingAtThisLevel))
    {
        response.redirect("action-details?actionShortCode=" + nextAction.shortCode);
    } else {
        response.redirect("overview?assessingFullCategory");
    }
})

router.post('/journey-mvp/publish-provisional-plan', function(request, response){
  var atLeastOneGPGAction = false;
  var atLeastOneMenopauseAction = false;
  var journeyData = request.session.data.endToEndMVP;

  if (journeyData) {
    request.session.data.db.actions.forEach((action) => {
      var submittedData = journeyData[action.shortCode]

      if (action.category == "menopause") {
        if (submittedData && submittedData.status && submittedData.status != "ignore" && submittedData.status != "embedded") {
          atLeastOneMenopauseAction = true;
        }
      } else {
        if (submittedData && submittedData.status && submittedData.status != "ignore" && submittedData.status != "embedded") {
          atLeastOneGPGAction = true;
        }
      }
    })
  }

  if (atLeastOneGPGAction && atLeastOneMenopauseAction) {
    // Plan is successfully published.
    // "Add to plan" actions become "In progress", since "Add to plan" doesn't
    // make sense after plan creation.
    request.session.data.db.actions.forEach((action) => {
      var submittedData = journeyData[action.shortCode];

      if (submittedData && submittedData.status && submittedData.status == "adopt") {
        request.session.data.endToEndMVP[action.shortCode].status = "in-progress";
      }
    })

    response.redirect("submitted?planValidationFailure=false");
  } else {
    // Plan fails validation
    response.redirect("provisional-plan?planValidationFailure=true")
  }
})
