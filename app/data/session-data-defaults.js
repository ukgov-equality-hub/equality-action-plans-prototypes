module.exports = {

  db: {
    company: {
      name: "Dunder Mifflin Paper Company, Inc.",

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
        'diversity-leads-and-task-forces': {
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
        'diversity-leads-and-task-forces',
        'conduct-gender-pay-gap-analysis',
        'flexible-working-in-job-adverts',
        'remuneration-transparency',
        'promotion-application-by-default',
        'flexible-working-available-to-all',
        'rest-areas'
      ]
    },

    dashboardEmployers: [
      {
        shortCode: 'rentaswag',
        name: 'Rent-A-Swag Ltd.',
        approved: false,
        reports: []
      },
      {
        shortCode: 'lospolloshermanos',
        name: 'Los Pollos Hermanos, Inc.',
        approved: true,
        reports: [
          {
            year: "2023/24",
            type: "GPG report",
            status: "complete",
            deadline: "4 April 2024"
          },
          {
            year: "2024/25",
            type: "GPG report",
            status: "complete",
            deadline: "4 April 2025"
          },
          {
            year: "2024/25",
            type: "Action plan",
            status: "complete",
            deadline: "4 April 2025"
          }
        ]
      },
      {
        shortCode: 'dundermifflin',
        name: 'Dunder Mifflin Paper Company, Inc.',
        approved: true,
        reports: [
          {
            year: "2023/24",
            type: "GPG report",
            status: "complete",
            deadline: "4 April 2024"
          },
          {
            year: "2024/25",
            type: "GPG report",
            status: "required",
            deadline: "4 April 2025"
          },
          {
            year: "2024/25",
            type: "Action plan",
            status: "required",
            deadline: "4 April 2025"
          },
          {
            year: "2024/25",
            type: "Additional data collection",
            status: "optional",
            deadline: "4 April 2025"
          },
          {
            year: "2025/26",
            type: "GPG report",
            status: "complete",
            deadline: "4 April 2026"
          },
          {
            year: "2025/26",
            type: "Action plan annual review",
            status: "required",
            deadline: "4 April 2026"
          },
          {
            year: "2027/28",
            type: "GPG report",
            status: "complete",
            deadline: "4 April 2028"
          },
          {
            year: "2027/28",
            type: "Action plan three-year review",
            status: "required",
            deadline: "4 April 2028"
          }
        ]
      },
      {
        shortCode: 'lumon',
        name: 'Lumon Industries, PLC.',
        approved: true,
        reports: [
          {
            year: "2023/24",
            type: "GPG report",
            status: "complete",
            deadline: "4 April 2024"
          },
          {
            year: "2024/25",
            type: "GPG report",
            status: "complete",
            deadline: "4 April 2025"
          },
          {
            year: "2024/25",
            type: "Action plan",
            status: "optional",
            deadline: "4 April 2025"
          },
          {
            year: "2024/25",
            type: "Additional data collection",
            status: "optional",
            deadline: "4 April 2025"
          }
        ]
      },
      {
        shortCode: 'weylandyutani',
        name: 'Weyland-Yutani Corporation',
        approved: true,
        reports: [
          {
            year: "2023/24",
            type: "GPG report",
            status: "complete",
            deadline: "4 April 2024"
          },
          {
            year: "2023/24",
            type: "Action plan",
            status: "overdue",
            deadline: "4 April 2024"
          },
          {
            year: "2023/24",
            type: "Additional data collection",
            status: "optional",
            deadline: "4 April 2024"
          },
          {
            year: "2024/25",
            type: "GPG report",
            status: "required",
            deadline: "4 April 2025"
          },
          {
            year: "2024/25",
            type: "Action plan",
            status: "required",
            deadline: "4 April 2025"
          },
          {
            year: "2024/25",
            type: "Additional data collection",
            status: "optional",
            deadline: "4 April 2025"
          }
        ]
      }
    ],

    actionCategories: [
      {
        shortCode: 'leadership-and-accountability',
        title: 'Building diversity into your organisation',
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
        shortCode: 'analysis',
        title: 'Analysing your data',
      },
      {
        shortCode: 'recruitment',
        title: 'Recruiting staff'
      },
      {
        shortCode: 'promotion-and-retention',
        title: 'Promoting and retaining staff'
      },
      {
        shortCode: 'flexibility',
        title: 'Creating a more flexible workplace'
      },
      {
        shortCode: 'menopause',
        title: 'Supporting staff during menopause'
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
        shortCode: 'diversity-leads-and-task-forces',
        category: 'leadership-and-accountability',
        level: 1,
        targets: [],
        title: 'Appoint diversity leads and/or task forces'
      },
      {
        shortCode: 'conduct-gender-pay-gap-analysis',
        category: 'analysis',
        title: 'Conduct a gender pay gap analysis'
      },
      {
        shortCode: 'measure-remuneration-gap',
        category: 'data',
        level: 1,
        targets: [],
        title: 'Measure the average remuneration gap between women and men'
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
