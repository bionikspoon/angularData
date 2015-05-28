'use strict';

/**
 * @ngdoc function
 * @name angularDataApp.controller:MeetingsCtrl
 * @description
 * # MeetingsCtrl
 * Controller of the angularDataApp
 */
angular.module('angularDataApp').controller('MeetingsCtrl',
  function ($scope, $firebaseArray) {

    var ref = new Firebase('https://bionikspoon-attendance.firebaseio.com/meetings');

    $scope.meetings = $firebaseArray(ref);

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
