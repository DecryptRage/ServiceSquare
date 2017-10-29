/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('blur.pages.dashboard')
      .controller('DashboardTodoCtrl', DashboardTodoCtrl);

  /** @ngInject */
  function DashboardTodoCtrl($scope, baConfig) {

    $scope.transparent = baConfig.theme.blur;
    var dashboardColors = baConfig.colors.dashboard;
    var colors = [];
    for (var key in dashboardColors) {
      colors.push(dashboardColors[key]);
    }

    function getRandomColor() {
      var i = Math.floor(Math.random() * (colors.length - 1));
      return colors[i];
    }

    $scope.todoList = [
      { text: 'Create an event for Thanksgiving food drive collection' },
      { text: 'Contact past volunteers for feedback' },
      { text: 'Sign up for a BlueCube Event' },
      { text: 'Ask Mrs.Speer about using ServiceSquare for finding more volunteers' },
      { text: 'Request STEM Professionals for the Girls FIRST event to inspire younger girls to join STEM' },
      { text: 'Create a google calendar for football team' },
      { text: 'Coordinate the orchestra fundraiser' },
      { text: 'Email ServiceSquare with suggestions for improvement' },
      { text: '' },
      { text: '' },
    ];

    $scope.todoList.forEach(function(item) {
      item.color = getRandomColor();
    });

    $scope.newTodoText = '';

    $scope.addToDoItem = function (event, clickPlus) {
      if (clickPlus || event.which === 13) {
        $scope.todoList.unshift({
          text: $scope.newTodoText,
          color: getRandomColor(),
        });
        $scope.newTodoText = '';
      }
    };
  }
})();
