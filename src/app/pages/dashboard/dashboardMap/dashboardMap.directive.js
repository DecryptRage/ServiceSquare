<<<<<<< HEAD
=======
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('blur.pages.dashboard')
      .directive('dashboardMap', dashboardMap);

  /** @ngInject */
  function dashboardMap() {
    return {
      restrict: 'E',
      controller: 'DashboardMapCtrl',
      templateUrl: 'app/pages/dashboard/dashboardMap/dashboardMap.html'
    };
  }
})();
>>>>>>> 05b2fdfa64f77e66435a8d9dd362fa853c2d1d6f
