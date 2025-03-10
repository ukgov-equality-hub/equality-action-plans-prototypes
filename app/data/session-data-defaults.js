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
          status: 'adopt'
        },
        'measure-workforce-composition': {
          status: 'adopt'
        },
        'measure-flexible-working-utilisation': {
          status: 'adopt'
        },
        'flexible-working': {
          status: 'embedded'
        },
        'structured-interviews': {
          status: 'in-progress'
        },
        'remuneration-transparency': {
          status: 'adopt'
        },
        'promotion-application-by-default': {
          status: 'ignore'
        },
        'share-local-support-for-flexible-working': {
          status: 'ignore'
        },
        'flexible-working-available-to-all': {
          status: 'in-progress'
        },
        'rest-areas': {
          status: 'adopt'
        },
        'relax-uniform-policies': {
          status: 'ignore'
        }
      },
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
        title: 'Set internal targets for gender representation and equality',
        description: 'Targets provide motivation and accountability, meaning that change is more likely to happen.'
          + ' General goals such as “we will change our culture to be more inclusive” are not effective unless'
          + ' they are accompanied by specific targets.'
      },
      {
        shortCode: 'equity-leads',
        category: 'leadership-and-accountability',
        level: 1,
        targets: [],
        title: 'Appoint employment equity leads and/or task forces',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
          + ' et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'
          + ' aliquip ex ea commodo consequat.'
      },
      {
        shortCode: 'measure-remuneration-gap',
        category: 'data',
        level: 1,
        targets: [],
        title: 'Measure average remuneration gap women and men',
        description: 'You already collect this information as part of your legal responsibilities.'
          + ' This measures the difference between the average and median remuneration of women and men.'
          + ' The gender pay gap is the difference in average earnings between women and men in the workforce.'
          + ' The gender pay gap is not to be confused with women and men being paid the same for the same,'
          + ' or comparable, job - this is equal pay.'
      },
      {
        shortCode: 'measure-workforce-composition',
        category: 'data',
        level: 1,
        targets: [],
        title: 'Measure the gender composition of the workforce',
        description: 'You already collect a basic breakdown of your workforce as part of your legal responsibilities.'
          + ' However, you can enhance this information by adding rates of full-time, part-time and casual work,'
          + ' gender split by industry and the proportion of each gender in leadership as well as the rates of resignations,'
          + ' promotions and appointments by gender.'
      },
      {
        shortCode: 'measure-flexible-working-utilisation',
        category: 'data',
        level: 2,
        targets: [],
        title: 'Measure the availability and utilisation of flexible working',
        description: 'By understanding how many employees have access to flexible working, as well as how many of those'
          + ' actually use it, you can understand the impact those policies are having and identify any problems that are'
          + ' preventing people from using them.'
      },
      {
        shortCode: 'flexible-working',
        category: 'recruitment',
        level: 1,
        targets: [
          'lower-middle-quartile-percent-women',
          'upper-middle-quartile-percent-women'
        ],
        title: 'Offer flexible working by default in job adverts',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
          + ' et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'
          + ' aliquip ex ea commodo consequat.'
      },
      {
        shortCode: 'structured-interviews',
        category: 'recruitment',
        level: 1,
        targets: [
          'lower-middle-quartile-percent-women',
          'upper-middle-quartile-percent-women'
        ],
        title: 'Use structured interviews for recruitment and promotions',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
          + ' et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'
          + ' aliquip ex ea commodo consequat.'
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
        title: 'Increase transparency to promotion, pay and reward processes',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
          + ' et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'
          + ' aliquip ex ea commodo consequat.'
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
        title: 'Default employees into applying for promotion or other competitive opportunities',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
          + ' et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'
          + ' aliquip ex ea commodo consequat.'
      },
      {
        shortCode: 'share-local-support-for-flexible-working',
        category: 'flexibility',
        level: 1,
        targets: [
          'median-hourly-pay-gap-percent',
          'mean-hourly-pay-gap-percent'
        ],
        title: 'Share local support for parental leave and flexible working',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
          + ' et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'
          + ' aliquip ex ea commodo consequat.'
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
        title: 'Make workplace or role adjustments available to everyone',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
          + ' et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'
          + ' aliquip ex ea commodo consequat.'
      },
      {
        shortCode: 'rest-areas',
        category: 'menopause',
        level: 1,
        targets: [
          'menopause'
        ],
        title: 'Provide rest areas or quiet rooms and fans/cooling systems',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
          + ' et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'
          + ' aliquip ex ea commodo consequat.'
      },
      {
        shortCode: 'relax-uniform-policies',
        category: 'menopause',
        level: 1,
        targets: [
          'menopause'
        ],
        title: 'Evaluate and relax uniform policies',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
          + ' et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'
          + ' aliquip ex ea commodo consequat.'
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
