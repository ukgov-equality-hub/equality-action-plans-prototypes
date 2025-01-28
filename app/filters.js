//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

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
