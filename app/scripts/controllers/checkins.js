'use strict';

/**
 * @ngdoc function
 * @name angularDataApp.controller:CheckinsCtrl
 * @description
 * # CheckinsCtrl
 * Controller of the angularDataApp
 */
angular.module('angularDataApp').controller('CheckinsCtrl',
  function ($scope, $routeParams, $location, $firebaseArray, FIREBASE_URL) {

    $scope.whichMeeting = $routeParams.meetingId;
    $scope.whichUser = $routeParams.userId;
    $scope.order = "firstName";
    $scope.direction = "";

    var meetingsRef = new Firebase(FIREBASE_URL + '/users/' + $scope.whichUser +
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

    $scope.addCheckin = function () {

      $scope.checkins.$add({
        firstName: $scope.user.firstName,
        lastName: $scope.user.lastName,
        email: $scope.user.email,
        date: Firebase.ServerValue.TIMESTAMP
      })

        .then(function () {
          $location.path('/checkins/' + $scope.whichUser + '/' +
            $scope.whichMeeting + '/checkinslist');

        });
    };
    $scope.deleteCheckin = function (id) {
      var record = meetingsList.$getRecord(id);
      meetingsList.$remove(record);
    };
  });
