
(function () {
  'use strict';

  angular.module('blur.pages.components.mail', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('components.mail', {
          url: '/mail',
          abstract: true,
          templateUrl: 'app/pages/components/mail/mail.html',
          controller: "MailTabCtrl",
          controllerAs: "tabCtrl",
          title: ' Event Planner Mail',
          sidebarMeta: {
            order: 0,
          },
        }).state('components.mail.label', {
          url: '/:label',
          templateUrl: 'app/pages/components/mail/list/mailList.html',
          title: 'Mail',
          controller: "MailListCtrl",
          controllerAs: "listCtrl"
        }).state('components.mail.detail', {
          url: '/:label/:id',
          templateUrl: 'app/pages/components/mail/detail/mailDetail.html',
          title: 'Mail',
          controller: "MailDetailCtrl",
          controllerAs: "detailCtrl"
        });
    $urlRouterProvider.when('/components/mail','/components/mail/inbox');
  }

})();
