module.exports = {

  db: {
    company: {
      name: "Dunder Mifflin Paper Company, Inc"
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
        title: 'Set internal targets for gender representation and equality',
        description: 'Targets provide motivation and accountability, meaning that change is more likely to happen.'
          + ' General goals such as “we will change our culture to be more inclusive” are not effective unless'
          + ' they are accompanied by specific targets.'
      },
      {
        shortCode: 'equity-leads',
        category: 'leadership-and-accountability',
        title: 'Appoint employment equity leads and/or task forces',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
          + ' et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'
          + ' aliquip ex ea commodo consequat.'
      },
      {
        shortCode: 'flexible-working',
        category: 'recruitment',
        title: 'Offer flexible working by default in job adverts',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
          + ' et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'
          + ' aliquip ex ea commodo consequat.'
      },
      {
        shortCode: 'structured-interviews',
        category: 'recruitment',
        title: 'Use structured interviews for recruitment and promotions',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
          + ' et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'
          + ' aliquip ex ea commodo consequat.'
      }
    ]
  }

}
