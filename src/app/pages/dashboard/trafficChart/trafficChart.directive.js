<<<<<<< HEAD
=======
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('blur.pages.dashboard')
      .directive('trafficChart', trafficChart);

  /** @ngInject */
  function trafficChart() {
    return {
      restrict: 'E',
      controller: 'TrafficChartCtrl',
      templateUrl: 'app/pages/dashboard/trafficChart/trafficChart.html'
    };
  }
})();
>>>>>>> 05b2fdfa64f77e66435a8d9dd362fa853c2d1d6f
