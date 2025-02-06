//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

addFilter('parseInt', function(number) {
    return parseInt(number);
})

addFilter('search', function (data) {
    var matches = [];

    data.db.actions.forEach(action => {
        if ((!data.choosingActions || !data.choosingActions.searchText || data.choosingActions.searchText == "")
            || action.title.toLowerCase().includes(data.choosingActions.searchText.toLowerCase())) {
                matches.push(action);
        }
    });

    return matches;
})

addFilter('actionSummariesFilteredByMetrics', function(data) {
    var actionSummaries = [];

    data.db.actions.forEach(action => {
        var metricSummaries = [];

        action.targets.forEach(metricShortCode => {
            if (data.targetMetrics[metricShortCode] == "Yes") {

                data.db.metrics.forEach(metric => {
                    if (metric.shortCode == metricShortCode) {
                        metricSummaries.push({
                            shortCode: metric.shortCode,
                            title: metric.title
                        })
                    }
                })

            }
        });

        if (action.targets.length == 0 || metricSummaries.length > 0) {
            actionSummaries.push({
                shortCode: action.shortCode,
                title: action.title,
                description: action.description,
                metrics: metricSummaries
            });
        }
    });

    return actionSummaries;
})
