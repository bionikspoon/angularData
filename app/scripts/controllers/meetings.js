'use strict';

/**
 * @ngdoc function
 * @name angularDataApp.controller:MeetingsCtrl
 * @description
 * # MeetingsCtrl
 * Controller of the angularDataApp
 */
angular.module('angularDataApp').controller('MeetingsCtrl',
  function ($scope, $rootScope, $firebaseArray, FIREBASE, currentAuth) {

    var ref = FIREBASE.child('/users/' + currentAuth.uid + '/meetings');
    $scope.meetings = $firebaseArray(ref);

    $scope.meetings.$watch(function () {
      $rootScope.howManyMeetings = $scope.meetings.length;
    });

    $scope.addMeeting = function () {
      $scope.meetings.$add({
        name: $scope.meetingName, date: Firebase.ServerValue.TIMESTAMP
      })

        .then(function () {
          $scope.meetingName = '';
        });
    };

    $scope.deleteMeeting = function (key) {
      $scope.meetings.$remove(key);
    };

  });
