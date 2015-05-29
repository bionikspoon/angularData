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

    var ref = new Firebase(FIREBASE_URL + '/users/' + $scope.whichUser +
      '/meetings/' + $scope.whichMeeting + '/checkins');

    var checkinsList = $firebaseArray(ref);
    $scope.checkins = checkinsList;

    $scope.addCheckin = function () {
      var checkinsObj = $firebaseArray(ref);
      checkinsObj.$add({
        firstName: $scope.user.firstName,
        lastName: $scope.user.lastName,
        email: $scope.user.email,
        date: Firebase.ServerValue.TIMESTAMP
      })

        .then(function () {
          $location.path('/checkins/' + $scope.whichUser + '/' +
            $scope.whichMeeting + '/checkinslist')

        });
    };

  });
