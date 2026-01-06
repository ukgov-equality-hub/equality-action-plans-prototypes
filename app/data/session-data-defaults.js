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
        shortCode: 'recruitment',
        title: 'Recruiting staff'
      },
      {
        shortCode: 'promotion-and-retention',
        title: 'Developing and promoting staff'
      },
      {
        shortCode: 'leadership-and-accountability',
        title: 'Building diversity into your organisation'
      },
      {
        shortCode: 'data',
        title: 'Increasing transparency'
      },
      {
        shortCode: 'menopause',
        title: 'Supporting women with health conditions and menopause'
      }
    ],

    //  NOTE: Actions in this array MUST be ordered by category (any order) and then by level (ascending)
    //        for various prototype features to work correctly.
    actions: [
      {
        shortCode: 'inclusive-job-adverts',
        category: 'recruitment',
        level: 1,
        targets: [],
        title: 'Make job descriptions inclusive',
        summary: 'Inclusive job descriptions attract diverse talent by using neutral language, listing only essential requirements, and highlighting equal opportunities.'
      },
      {
        shortCode: 'encourage-diverse-applications',
        category: 'recruitment',
        level: 1,
        targets: [],
        title: 'Encourage applications from diverse candidates',
        summary: 'Actively seeking applications from underrepresented groups ensures a broader candidate pool for all roles.'
      },
      {
        shortCode: 'reduce-unconscious-bias-in-cv-screening',
        category: 'recruitment',
        level: 1,
        targets: [],
        title: 'Reduce unconscious bias in CV screening',
        summary: 'Using structured, skill-based screening minimises bias and boosts diversity in hiring.'
      },
      {
        shortCode: 'structured-interviews',
        category: 'recruitment',
        level: 1,
        targets: [],
        title: 'Use fair and structured interview techniques',
        summary: 'Running structured interviews ensures fair, objective hiring. Standardised questions and scoring helps reduce bias and promotes equal opportunity.'
      },
      {
        shortCode: 'fair-interview-outcomes',
        category: 'recruitment',
        level: 1,
        targets: [],
        title: 'Advertise parental, carer and compassionate leave policies',
        summary: 'Advertising parental, carer, and compassionate leave policies widely helps to ensure all employees know their entitlements and how to access them.'
      },
      {
        shortCode: 'flexible-working-in-job-adverts',
        category: 'recruitment',
        level: 1,
        targets: [],
        title: 'Advertise flexible working arrangements in job adverts',
        summary: 'Flexible work policies aid work-life balance, especially for those with caring roles. Advertising flexibility attracts a wider, more diverse talent pool.'
      },

      {
        shortCode: 'promotion-application-by-default',
        category: 'promotion-and-retention',
        level: 1,
        targets: [],
        title: 'Automatically consider eligible employees for promotion',
        summary: 'Automatically considering all eligible employees for promotion gives them the choice to opt-out rather than opt-in.'
      },
      {
        shortCode: 'employee-development-actionable-steps',
        category: 'promotion-and-retention',
        level: 1,
        targets: [],
        title: 'Encourage employee development through actionable steps',
        summary: 'Asking employees for advice instead of feedback can aid skill development, and benefit organisations with low female progression and retention.'
      },
      {
        shortCode: 'internships-mentoring-development-programmes',
        category: 'promotion-and-retention',
        level: 1,
        targets: [],
        title: 'Offer internships, mentoring and other development programmes',
        summary: 'Providing development programmes, such as internships, gives employees a formal channel for advice, support, and advocacy.'
      },

      {
        shortCode: 'targets',
        category: 'leadership-and-accountability',
        level: 1,
        targets: [],
        title: 'Set targets to improve gender representation',
        summary: 'Setting specific, monitorable internal targets gives your organisation clear steps to boost gender representation and equality.'
      },
      {
        shortCode: 'diversity-leads-taskforces',
        category: 'leadership-and-accountability',
        level: 1,
        targets: [],
        title: 'Appoint diversity leads or taskforces',
        summary: 'Appointing equality leads or committees to scrutinise hiring and progression policies ensures organisational accountability.'
      },

      {
        shortCode: 'remuneration-transparency',
        category: 'data',
        level: 1,
        targets: [],
        title: 'Increase transparency for pay, promotion and rewards',
        summary: 'Transparency in pay, promotion, and bonus policies ensures everyone understands how decisions are made.'
      },
      {
        shortCode: 'data-analysis',
        category: 'data',
        level: 1,
        targets: [],
        title: 'Publish and promote flexible working and leave policies',
        summary: 'Publish and promote parental, carer, and compassionate leave policies so staff know their entitlements and how to use them easily.'
      },

      {
        shortCode: 'menopause-training',
        category: 'menopause',
        level: 1,
        targets: [
          'menopause'
        ],
        title: 'Train your managers to support female employees with health conditions',
        summary: 'Line manager training on women’s health conditions and their effects can help organisations to better support female employees.'
      },
      {
        shortCode: 'menopause-occupational-health-advice',
        category: 'menopause',
        level: 1,
        targets: [
          'menopause'
        ],
        title: 'Offer female employees occupational health advice for health conditions',
        summary: 'Supporting employees with specialised occupational health advice can help them manage symptoms, access support, and work more comfortably.'
      },
      {
        shortCode: 'menopause-networks-support-groups',
        category: 'menopause',
        level: 1,
        targets: [
          'menopause'
        ],
        title: 'Set up women’s health support groups and networks',
        summary: 'Accessible menopause support groups within your organisation can help provide peer support, information, and guidance.'
      },
      {
        shortCode: 'menopause-workplace-adjustments',
        category: 'menopause',
        level: 1,
        targets: [
          'menopause'
        ],
        title: 'Offer workplace adjustments for female employees with health conditions',
        summary: 'Personalised workplace adjustments help support employees experiencing menopause and wider women’s health conditions.'
      },
      {
        shortCode: 'review-policies-procedures',
        category: 'menopause',
        level: 1,
        targets: [
          'menopause'
        ],
        title: 'Review policies and procedures to meet the needs of female employees with health conditions',
        summary: 'Ensure policies align with the needs of female employees with health conditions by reviewing flexible working and leave provisions.'
      },
      {
        shortCode: 'menopause-risk-assessment',
        category: 'menopause',
        level: 1,
        targets: [
          'menopause'
        ],
        title: 'Conduct a menopause risk assessment for your workplace',
        summary: 'Workplace risk assessments on menopause and women’s health can identify necessary adaptations to support employee wellbeing.'
      },
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
