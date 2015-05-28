'use strict';

/**
 * @ngdoc function
 * @name angularDataApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the angularDataApp
 */
angular

  .module('angularDataApp')

  .controller('RegisterCtrl', function ($scope, $firebaseAuth, $location) {
    var ref = new Firebase('https://bionikspoon-attendance.firebaseio.com');

    $scope.authObj = $firebaseAuth(ref);

    $scope.register = function () {
      console.log($scope.user.email);
      $location.path('/meetings');
    };
  });
