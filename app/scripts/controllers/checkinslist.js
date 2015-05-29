'use strict';

/**
 * @ngdoc function
 * @name angularDataApp.controller:CheckinsListCtrl
 * @description
 * # CheckinsListCtrl
 * Controller of the angularDataApp
 */
angular.module('angularDataApp').controller('CheckinsListCtrl',
  function ($scope, $routeParams, $location, $firebaseArray, $firebaseObject,
    FIREBASE) {
    $scope.whichMeeting = $routeParams.meetingId;
    $scope.whichUser = $routeParams.userId;
    $scope.order = 'firstName';
    $scope.direction = '';

    var meetingsRef = FIREBASE.child('/users/' + $scope.whichUser +
      '/meetings');
    var meetingsList = $firebaseArray(meetingsRef);

    meetingsList.$loaded().then(function (meetingsList) {
      var meeting = meetingsList[$scope.whichMeeting];
      var checkinsRef = meetingsRef.child(meeting.$id + '/checkins');
      var checkins = $firebaseArray(checkinsRef);

      checkins.$loaded().then(function (checkins) {
        $scope.checkins = checkins;
      });
    });

    $scope.deleteCheckin = function (id) {
      var meeting = meetingsList[$scope.whichMeeting];
      var checkinRef = meetingsRef.child(meeting.$id + '/checkins/' + id);

      var checkinObj = $firebaseObject(checkinRef);
      checkinObj.$remove();

    };

    $scope.pickRandom = function () {
      var whichCheckin = Math.floor(Math.random() * $scope.checkins.length);
      $scope.recordId = $scope.checkins.$keyAt(whichCheckin);
    };

    $scope.showLove = function (myItem) {
      myItem.show = !myItem.show;

      if (myItem.userState === 'expanded') {
        myItem.userState = '';
      } else {
        myItem.userState = 'expanded';
      }
    };

    $scope.giveLove = function (myItem, myGift) {
      var meeting = meetingsList[$scope.whichMeeting];
      var loveRef = meetingsRef.child(meeting.$id + '/checkins/' + myItem.$id +
        '/awards');
      var awardsList = $firebaseArray(loveRef);

      var myData = {
        name: myGift, date: Firebase.ServerValue.TIMESTAMP
      };

      awardsList.$add(myData);
    };

    $scope.deleteLove = function (checkinId, award) {

      var meeting = meetingsList[$scope.whichMeeting];
      var awardRef = meetingsRef.child(meeting.$id + '/checkins/' + checkinId +
        '/awards/' + award);

      var awardObj = $firebaseObject(awardRef);
      awardObj.$remove();
    };

  });
