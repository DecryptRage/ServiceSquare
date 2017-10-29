/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('blur.pages.dashboard')
      .controller('blurFeedCtrl', blurFeedCtrl);

  /** @ngInject */
  function blurFeedCtrl($scope) {
    $scope.feed = [
      {
        type: 'text-message',
        author: 'Aarya',
        surname: 'Kapani',
        header: 'Posted new message',
        text: 'Hey guys, Walton Launch Club will be hosting a MIT kickoff Event. We need 5 volunteers to help set up on Saturday (11/3/17) at room 220 Walton High School. Will recieve about 2 hours',
        time: 'Today 11:55 pm',
        ago: '25 minutes ago',
        expanded: true,
      },  {
        type: 'text-message',
        author: 'Lokranjan',
        surname: 'Lakshmikanthan',
        header: 'Posted new message',
        text: 'Dear ServiceSquare, I am organizing a massive Chatahooche River Cleanup as part of my boyscouts eagle project. I have space for 30 more volunteers. It will be an all day event this sunday. Meet up at the East Cobb Library at 9 AM',
        time: '15.11.2015',
        ago: '6 days ago',
        expanded: true,
      }, {
        type: 'image-message',
        author: 'Jefferey',
        surname: 'Key',
        header: '',
        text: 'Blue Cube will be hosting a cubing competition at Marrietta Park on 12/4/2017. We need 2 more volunteers at 12 PM. You will recieve 2-3 hours for volunteering. Layout of Park is attached. Meet up at the front entrance. Please be on time!',
        preview: 'app/feed/genom.png',//change to picture of park map//
        link: 'https://dribbble.com/shots/2504810-Protein-Heroes',
        time: '16.11.2015',
        ago: '7 days ago',
        expanded: false,
      },
      {
        type: 'text-message',
        author: 'Mauna',
        surname: 'Kareti',
        header: 'Posted new message',
        text: 'Dear ServiceSquare, Walton Robotics is cleaning up the Old Mountain View School on 10/20/2017. We would love to have about 10 more volunteers to speed up the process. You will recieve 6 hours for volunteering. Meet up at the front entrance of the school at 2 PM',
        time: '18.11.2015',
        ago: '12 days ago',
        expanded: true,
      }
    ];

    $scope.expandMessage = function(message){
      message.expanded = !message.expanded;
    }
  }
})();
