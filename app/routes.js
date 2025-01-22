//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/choosing-actions-visualisations/simple-pick-list/answer-action-plan-external', function(request, response){
    var actionPlanIsExternal = request.session.data["alreadyHaveActionPlan"]

    if (actionPlanIsExternal == "Yes") {
        response.redirect("external-action-plan")
    } else {
        response.redirect("choose-actions")
    }
})
