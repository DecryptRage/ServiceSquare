/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
  'use strict';

  angular.module('blur.pages.ui', [
    'blur.pages.ui.typography',
    'blur.pages.ui.buttons',
    'blur.pages.ui.icons',
    'blur.pages.ui.modals',
    'blur.pages.ui.grid',
    'blur.pages.ui.alerts',
    'blur.pages.ui.progressBars',
    'blur.pages.ui.notifications',
    'blur.pages.ui.tabs',
    'blur.pages.ui.slider',
    'blur.pages.ui.panels',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui', {
          url: '/ui',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'UI Features',
          sidebarMeta: {
            icon: 'ion-android-laptop',
            order: 200,
          },
        });
  }

})();
