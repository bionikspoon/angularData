'use strict';

/**
 * @ngdoc function
 * @name angularDataApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angularDataApp
 */
angular.module('angularDataApp')

  .controller('LoginCtrl', function ($scope, $location) {

    $scope.login = function () {
      console.log($scope.user.email);
      $location.path('/meetings');
    };

  });
