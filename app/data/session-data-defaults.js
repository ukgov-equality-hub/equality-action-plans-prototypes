module.exports = {

  db: {
    company: {
      name: "Dunder Mifflin Paper Company, Inc",

      report: {
        metrics: [
          { 'median-hourly-pay-gap-percent': '50' },
          { 'mean-hourly-pay-gap-percent': '60' },
          { 'upper-quartile-percent-women': '50' },
          { 'upper-middle-quartile-percent-women': '50' },
          { 'lower-middle-quartile-percent-women': '50' },
          { 'lower-quartile-percent-women': '50' },
          { 'median-bonus-pay-gap-percent': '50' },
          { 'mean-bonus-pay-gap-percent': '50' },
          { 'percent-women-vs-men-receiving-bonus': '50 vs 55' }
        ]
      },

      actionsInProgress: {
        'targets': {
          status: 'embedded'
        },
        'equity-leads': {
          status: 'embedded'
        },
        'measure-remuneration-gap': {
          status: 'embedded'
        },
        'measure-workforce-composition': {
          status: 'embedded'
        },
        'measure-flexible-working-uptake': {
          status: 'in-progress'
        },
        'flexible-working-in-job-adverts': {
          status: 'embedded'
        },
        'structured-interviews': {
          status: 'in-progress'
        },
        'remuneration-transparency': {
          status: 'in-progress'
        },
        'promotion-application-by-default': {
          status: 'ignore'
        },
        'share-local-support-for-flexible-working': {
          status: 'ignore'
        },
        'flexible-working-available-to-all': {
          status: 'ignore'
        },
        'rest-areas': {
          status: 'in-progress'
        },
        'relax-uniform-policies': {
          status: 'ignore'
        }
      },

      suggestedActions: [
        'targets',
        'equity-leads',
        'flexible-working-in-job-adverts',
        'remuneration-transparency',
        'promotion-application-by-default',
        'flexible-working-available-to-all',
        'rest-areas'
      ]
    },

    actionCategories: [
      {
        shortCode: 'leadership-and-accountability',
        title: 'Leadership and accountability',
        description: 'Action plans will not be effective unless there are individuals with authority'
          + ' who are accountable for the outcome. These actions lay a foundation of accountability in'
          + ' the organisation, which supports all other actions to have more impact.'
      },
      {
        shortCode: 'data',
        title: 'Data collection',
        description: 'Collecting appropriate data and information from and about your employees'
          + ' gives you the picture you need in order to decide which changes to make, and how.'
          + ' The more data you have, the more nuanced your picture will be and the better your'
          + ' changes can be targeted.'
      },
      {
        shortCode: 'recruitment',
        title: 'Hiring and selection'
      },
      {
        shortCode: 'promotion-and-retention',
        title: 'Promotion and retention'
      },
      {
        shortCode: 'flexibility',
        title: 'Workplace flexibility'
      },
      {
        shortCode: 'menopause',
        title: 'Support during menopause'
      }
    ],

    //  NOTE: Actions in this array MUST be ordered by category (any order) and then by level (ascending)
    //        for various prototype features to work correctly.
    actions: [
      {
        shortCode: 'targets',
        category: 'leadership-and-accountability',
        level: 1,
        targets: [],
        title: 'Set internal targets for gender representation and equality'
      },
      {
        shortCode: 'equity-leads',
        category: 'leadership-and-accountability',
        level: 1,
        targets: [],
        title: 'Appoint employment equity leads and/or task forces'
      },
      {
        shortCode: 'measure-remuneration-gap',
        category: 'data',
        level: 1,
        targets: [],
        title: 'Measure average remuneration gap women and men'
      },
      {
        shortCode: 'measure-workforce-composition',
        category: 'data',
        level: 1,
        targets: [],
        title: 'Measure the gender composition of the workforce'
      },
      {
        shortCode: 'measure-flexible-working-uptake',
        category: 'data',
        level: 2,
        targets: [],
        title: 'Measure the availability and uptake of flexible working'
      },
      {
        shortCode: 'measure-promotions-by-gender',
        category: 'data',
        level: 2,
        targets: [],
        title: 'Measure the differences in promotion between women and men'
      },
      {
        shortCode: 'flexible-working-in-job-adverts',
        category: 'recruitment',
        level: 1,
        targets: [
          'lower-middle-quartile-percent-women',
          'upper-middle-quartile-percent-women'
        ],
        title: 'Offer flexible working by default in job adverts'
      },
      {
        shortCode: 'structured-interviews',
        category: 'recruitment',
        level: 1,
        targets: [
          'lower-middle-quartile-percent-women',
          'upper-middle-quartile-percent-women'
        ],
        title: 'Use structured interviews for recruitment and promotions'
      },
      {
        shortCode: 'remuneration-transparency',
        category: 'promotion-and-retention',
        level: 1,
        targets: [
          'median-hourly-pay-gap-percent',
          'mean-hourly-pay-gap-percent',
          'upper-quartile-percent-women',
          'upper-middle-quartile-percent-women'
        ],
        title: 'Increase transparency to promotion, pay and reward processes'
      },
      {
        shortCode: 'promotion-application-by-default',
        category: 'promotion-and-retention',
        level: 1,
        targets: [
          'median-hourly-pay-gap-percent',
          'mean-hourly-pay-gap-percent',
          'upper-quartile-percent-women',
          'upper-middle-quartile-percent-women'
        ],
        title: 'Default employees into applying for promotion or other competitive opportunities'
      },
      {
        shortCode: 'share-local-support-for-flexible-working',
        category: 'flexibility',
        level: 1,
        targets: [
          'median-hourly-pay-gap-percent',
          'mean-hourly-pay-gap-percent'
        ],
        title: 'Share local support for parental leave and flexible working'
      },
      {
        shortCode: 'flexible-working-available-to-all',
        category: 'flexibility',
        level: 1,
        targets: [
          'upper-quartile-percent-women',
          'upper-middle-quartile-percent-women',
          'lower-middle-quartile-percent-women'
        ],
        title: 'Make workplace or role adjustments available to everyone'
      },
      {
        shortCode: 'rest-areas',
        category: 'menopause',
        level: 1,
        targets: [
          'menopause'
        ],
        title: 'Provide rest areas or quiet rooms and fans/cooling systems'
      },
      {
        shortCode: 'relax-uniform-policies',
        category: 'menopause',
        level: 1,
        targets: [
          'menopause'
        ],
        title: 'Evaluate and relax uniform policies'
      }
    ],

    metrics: [
      {
        shortCode: 'median-hourly-pay-gap-percent',
        title: 'Median hourly pay gap'
      },
      {
        shortCode: 'mean-hourly-pay-gap-percent',
        title: 'Mean hourly pay gap'
      },
      {
        shortCode: 'upper-quartile-percent-women',
        title: 'Percentage of women in the upper hourly pay quartile'
      },
      {
        shortCode: 'upper-middle-quartile-percent-women',
        title: 'Percentage of women in the upper middle hourly pay quartile'
      },
      {
        shortCode: 'lower-middle-quartile-percent-women',
        title: 'Percentage of women in the lower middle hourly pay quartile'
      },
      {
        shortCode: 'lower-quartile-percent-women',
        title: 'Percentage of women in the lower hourly pay quartile'
      },
      {
        shortCode: 'median-bonus-pay-gap-percent',
        title: 'Median bonus pay gap'
      },
      {
        shortCode: 'mean-bonus-pay-gap-percent',
        title: 'Mean bonus pay gap'
      },
      {
        shortCode: 'percent-women-vs-men-receiving-bonus',
        title: 'Percentage of women vs men receiving a bonus'
      },
      {
        shortCode: 'menopause',
        title: 'Experience of work for those going through menopause'
      }
    ]
  }
}
