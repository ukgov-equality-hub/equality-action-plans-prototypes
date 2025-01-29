//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/choosing-actions-visualisations/simple-pick-list/answer-action-plan-external', function(request, response){
    var actionPlanIsExternal = request.session.data["choosingActions.alreadyHaveActionPlan"]

    if (actionPlanIsExternal == "Yes") {
        response.redirect("external-action-plan")
    } else {
        response.redirect("choose-actions")
    }
})

router.post('/choosing-actions-visualisations/suggested-actions/answer-help-requested', function(request, response){
    var helpRequested = request.session.data['suggestedActions']['help-requested']

    if (helpRequested == "Yes") {
        response.redirect("do-you-want-to-answer-additional-questions")
    } else {
        response.redirect("choose-actions-summary")
    }
})
