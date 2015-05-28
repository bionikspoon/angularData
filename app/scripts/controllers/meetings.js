'use strict';

/**
 * @ngdoc function
 * @name angularDataApp.controller:MeetingsCtrl
 * @description
 * # MeetingsCtrl
 * Controller of the angularDataApp
 */
angular.module('angularDataApp').controller('MeetingsCtrl',
  function ($scope, $rootScope, $firebaseArray, $firebaseObject, FIREBASE_URL) {

    var ref = new Firebase(FIREBASE_URL + '/meetings');
    $scope.meetings = $firebaseArray(ref);
    //$scope.meetingsObj = $firebaseObject(ref);

    $scope.meetings.$watch(function (event) {
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
