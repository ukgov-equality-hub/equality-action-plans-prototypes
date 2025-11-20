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
  if (status == "adopt")
  {
    status = "adopt";
  }

  switch (status) {
    case "embedded":
      title = "Not added - no plan to improve";
      colour = "govuk-tag--green";
      break;

    case "done":
      title = "Done";
      colour = "govuk-tag--green";
      break;

    case "in-progress":
      title = "Added - in progress";
      colour = "govuk-tag--yellow";
      break;

    case "adopt":
      title = "Added - new action";
      colour = "govuk-tag--orange";
      break;

    case "considering":
      title = "Considering";
      colour = "govuk-tag--grey";
      break;

    case "ignore":
      title = "Not added - no plan to include";
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

addFilter('reportTypeToUrl', function(reportType) {
  var reportLinkUrl;

  switch (reportType) {
    case "Action plan":
      reportLinkUrl = "action-plan-intro";
      break;
    case "Action plan annual review":
      reportLinkUrl = "annual-review-intro";
      break;
    case "Action plan three-year review":
      reportLinkUrl = "three-year-review-intro";
      break;
    case "Additional data collection":
      reportLinkUrl = "data-collection";
      break;
    case "GPG report":
      reportLinkUrl = "pay-gaps-report";
      break;
    default:
      reportLinkUrl = "#";
  }

  return reportLinkUrl;
})

addFilter('reportTypeToCreateLinkText', function(reportType) {
  var reportLinkText;

  switch (reportType) {
    case "Action plan":
      reportLinkText = "Create plan";
      break;
    case "Action plan annual review":
    case "Action plan three-year review":
      reportLinkText = "Review action plan";
      break;
    case "Additional data collection":
      reportLinkText = "Collect data";
      break;
    default:
      reportLinkText = "Draft report";
  }

  return reportLinkText;
})

addFilter('reportTypeToEditLinkText', function(reportType) {
  var reportLinkText;

  switch (reportType) {
    case "Action plan":
      reportLinkText = "Edit plan";
      break;
    case "Action plan annual review":
    case "Action plan three-year review":
      reportLinkText = "Edit review";
      break;
    case "Additional data collection":
      reportLinkText = "Edit data";
      break;
    default:
      reportLinkText = "Edit report";
  }

  return reportLinkText;
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
                metrics: metricSummaries
            });
        }
    });

    return actionSummaries;
})
