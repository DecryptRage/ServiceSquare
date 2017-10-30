/**
 * @author a.demeshko
 * created on 12/29/15
 */
(function () {
  'use strict';

  angular.module('blur.pages.components.mail')
    .service('mailMessages', mailMessages);

  /** @ngInject */
  function mailMessages($sce) {
    var messages = [
      {
        "id": "4563faass",
        "name": "Aarya Kapani",
        "subject": "Meeting Change",
        "date": "2015-08-28T07:57:09",
        "body": $sce.trustAsHtml("<p>Hey Jeffrey, </p><p>The meeting will be cancelled today due to poor weather. We are planning on rescheduling the event to November 21rst at 4:00 PM.</p>"),
        "pic": "img/Aarya.png",
        "email": "aaryakapani@mail.com",
        "position": "Club President",
        "tag": "club",
        "labels": ['inbox']
      },
      {
        "id": "4563fdfvd",
        "name": "Lokranjan Lakshmikanthan",
        "subject": "Duty Change",
        "date": "2015-11-19T03:30:45",
        "important": false,
        "body": $sce.trustAsHtml("<p>Hey Jeffrey, </p><br><p>Can you fill in for Jacob for cleanup duty today? He has something come up and as a result, cannot make it. Thanks.</p>"),
        "pic": "img/Lokranjan.png",
        "email": "lokranjan2014@mail.com",
        "position": "Service Lead",
        "tag": "organization",
        "labels": ['inbox']
      },
      {
        "id": "4563zxcss",
        "name": "Jeffrey Key",
        "subject": "Lores ipsum",
        "date": "2015-10-19T03:30:45",
        "important": false,
        "body": $sce.trustAsHtml("<p>Hey Nasta, </p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>"),
        "pic": "img/Jeffrey.png",
        "email": "jifeiqi11@mail.com",
        "position": "User",
        "tag": "club",
        "labels": ['sent', 'important']
      },
      {
        "id": "8955sddf",
        "name": "Mauna Kareti",
        "subject": "BlueCube Club",
        "date": "2015-05-05T12:59:45",
        "body": $sce.trustAsHtml("<p>Hey Jeffery, </p><br>" +
          "<p>This is verification that you have just signed up for Blue Cube. Our first meeting will be on November 21rst at 3:30 PM</p>"),
        "pic": "img/Mauna.png",
        "email": "maunakareti@mail.com",
        "position": "Club President",
        "tag": "club",
        "labels": ['inbox']
      }
    ].sort(function (a, b) {
        if (a.date > b.date) return 1;
        if (a.date < b.date) return -1;
      }).reverse();
    var tabs = [{
      label: 'inbox',
      name: 'Inbox',
      newMails: 7
    }, {
      label: 'sent',
      name: 'Sent Mail'
    }, {
      label: 'important',
      name: 'Important'
    }, {
      label: 'draft',
      name: 'Draft',
      newMails: 2
    }, {
      label: 'spam',
      name: 'Spam'
    }, {
      label: 'trash',
      name: 'Trash'
    }];

    return{
      getTabs : function(){
        return tabs
      },
      getMessagesByLabel : function(label){
        return messages.filter(function(m){
          return m.labels.indexOf(label) != -1;
        });
      },
      getMessageById : function(id){
        return messages.filter(function(m){
          return m.id == id;
        })[0];
      }
    }

  }

})();
