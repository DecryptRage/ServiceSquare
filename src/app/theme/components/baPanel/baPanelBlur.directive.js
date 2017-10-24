/**
 * @author v.lugovsky
 * created on 15.01.2016
 */
(function () {
  'use strict';

  angular.module('blur.theme')
      .directive('baPanelblur', baPanelblur);

  /** @ngInject */
  function baPanelblur(baPanelblurHelper, $window, $rootScope) {
    var bodyBgSize;

    baPanelblurHelper.bodyBgLoad().then(function() {
      bodyBgSize = baPanelblurHelper.getBodyBgImageSizes();
    });

    $window.addEventListener('resize', function() {
      bodyBgSize = baPanelblurHelper.getBodyBgImageSizes();
    });

    return {
      restrict: 'A',
      link: function($scope, elem) {
        if(!$rootScope.$isMobile) {
          baPanelblurHelper.bodyBgLoad().then(function () {
            setTimeout(recalculatePanelStyle);
          });
          $window.addEventListener('resize', recalculatePanelStyle);

          $scope.$on('$destroy', function () {
            $window.removeEventListener('resize', recalculatePanelStyle);
          });
        }

        function recalculatePanelStyle() {
          if (!bodyBgSize) {
            return;
          }
          elem.css({
            backgroundSize: Math.round(bodyBgSize.width) + 'px ' + Math.round(bodyBgSize.height) + 'px',
            backgroundPosition: Math.floor(bodyBgSize.positionX) + 'px ' + Math.floor(bodyBgSize.positionY) + 'px'
          });
        }

      }
    };
  }

})();
