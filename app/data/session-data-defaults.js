module.exports = {

  annualReview: {
    'targets': {
      status: 'embedded',
      narrative: ''
    },
    'equity-leads': {
      status: 'embedded',
      narrative: ''
    },
    'flexible-working': {
      status: 'embedded',
      narrative: ''
    },
    'structured-interviews': {
      status: 'in-progress',
      narrative: ''
    },
    'remuneration-transparency': {
      status: 'add-to-plan',
      narrative: ''
    },
    'promotion-application-by-default': {
      status: 'ignore',
      narrative: 'We don\'t believe this is helpful for our employees who may not want to change role'
    },
    'share-local-support-for-flexible-working': {
      status: 'embedded',
      narrative: ''
    },
    'flexible-working-available-to-all': {
      status: 'in-progress',
      narrative: ''
    },
    'rest-areas': {
      status: 'add-to-plan',
      narrative: ''
    },
    'relax-uniform-policies': {
      status: 'add-to-plan',
      narrative: ''
    }
  },

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
      }
    },

    actionCategories: [
      {
        shortCode: 'leadership-and-accountability',
        title: 'Leadership and accountability'
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
    
    actions: [
      {
        shortCode: 'targets',
        category: 'leadership-and-accountability',
        targets: [],
        title: 'Set internal targets for gender representation and equality',
        description: 'Targets provide motivation and accountability, meaning that change is more likely to happen.'
          + ' General goals such as “we will change our culture to be more inclusive” are not effective unless'
          + ' they are accompanied by specific targets.'
      },
      {
        shortCode: 'equity-leads',
        category: 'leadership-and-accountability',
        targets: [],
        title: 'Appoint employment equity leads and/or task forces',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
          + ' et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'
          + ' aliquip ex ea commodo consequat.'
      },
      {
        shortCode: 'flexible-working',
        category: 'recruitment',
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
