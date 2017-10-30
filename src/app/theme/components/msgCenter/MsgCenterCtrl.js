
(function () {
  'use strict';

  angular.module('blur.theme.components')
      .controller('MsgCenterCtrl', MsgCenterCtrl);

  /** @ngInject */
  function MsgCenterCtrl($scope, $sce) {
    $scope.users = {
      0: {
        name: 'Lokranjan',
      },
      1: {
        name: 'Aarya',
      },
      2: {
        name: 'Mauna',
      },
      3: {
        name: 'Marius',
      }
    };

    $scope.notifications = [
      {
        userId: 0,
        template: '&name added a new member',
        time: '1 min ago'
      },
      {
        userId: 1,
        template: '&name changed his opportunity description.',
        time: '2 hrs ago'
      },
      {
        userId: 2,
        template: '&name replied to your email.',
        time: '1 day ago'
      },
    ];

    $scope.messages = [
      {
        userId: 1,
        text: 'The meeting will be cancelled today due to poor weather. We are planning on rescheduling the event to November 21rst at 4:00 PM.',
        time: '1 min ago'
      },
      {
        userId: 0,
        text: 'Can you fill in for Jacob for cleanup duty today? He has something come up and as a result, cannot make it. Thanks.',
        time: '2 hrs ago'
      },
      {
        userId: 2,
        text: 'This is verification that you have just signed up for Blue Cube. Our first meeting will be on November 21rst at 3:30 PM',
        time: '10 hrs ago'
      },

    ];

    $scope.getMessage = function(msg) {
      var text = msg.template;
      if (msg.userId || msg.userId === 0) {
        text = text.replace('&name', '<strong>' + $scope.users[msg.userId].name + '</strong>');
      }
      return $sce.trustAsHtml(text);
    };
  }
})();
