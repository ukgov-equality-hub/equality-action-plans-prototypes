//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

addFilter('parseInt', function(number) {
    return parseInt(number);
})

addFilter('statusToTag', function(status) {
  var title, colour;

  // BUG: Without the following apparently ludicrous block, the case statement below does
  //      not recognise the supplied status code in certain contexts (but is fine in others).
  //      This does happen for other status codes too, but only this one is used in the
  //      failing contexts.
  if (status == "add-to-plan")
  {
    status = "add-to-plan";
  }

  switch (status) {
    case "embedded":
      title = "Embedded";
      colour = "govuk-tag--turquoise";
      break;
  
    case "in-progress":
      title = "In progress";
      colour = "govuk-tag--blue";
      break;
  
    case "add-to-plan":
      title = "Add to plan";
      colour = "govuk-tag--orange";
      break;

    case "ignore":
      title = "Not pursuing currently";
      break;
  
    default:
      title = "Not pursuing currently";
      break;
  }

  if (colour) {
    return '<strong class="govuk-tag ' + colour + '">' + title + '</strong>';
  } else {
    return title;
  }
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
