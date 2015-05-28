'use strict';

/**
 * @ngdoc function
 * @name angularDataApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angularDataApp
 */
angular.module('angularDataApp')

  .controller('LoginCtrl', function ($scope, $firebaseAuth, $location) {
    var ref = new Firebase('https://bionikspoon-attendance.firebaseio.com');

    $scope.authObj = $firebaseAuth(ref);

    $scope.login = function () {
      console.log($scope.user.email);
      $scope.authObj.$authWithPassword({
        email: $scope.user.email, password: $scope.user.password
      })

        .then(function (user) {
          $location.path('/meetings');
        })

        .catch(function (error) {
          $scope.message = error.toString();
          console.error("Authentication failed:", error);
        });
    };

  });
