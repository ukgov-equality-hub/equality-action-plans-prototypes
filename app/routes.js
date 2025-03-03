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
