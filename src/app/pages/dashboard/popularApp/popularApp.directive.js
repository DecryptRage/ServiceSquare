<<<<<<< HEAD
=======
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('blur.pages.dashboard')
      .directive('popularApp', popularApp);

  /** @ngInject */
  function popularApp() {
    return {
      restrict: 'E',
      templateUrl: 'app/pages/dashboard/popularApp/popularApp.html'
    };
  }
})();
>>>>>>> 05b2fdfa64f77e66435a8d9dd362fa853c2d1d6f
