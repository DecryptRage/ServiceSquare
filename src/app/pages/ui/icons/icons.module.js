/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('blur.pages.ui.icons', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui.icons', {
          url: '/icons',
          templateUrl: 'app/pages/ui/icons/icons.html',
          controller: 'IconsPageCtrl',
          title: 'Icons',
          sidebarMeta: {
            order: 200,
          },
        });
  }

})();
