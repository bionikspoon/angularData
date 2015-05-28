'use strict';

/**
 * @ngdoc function
 * @name angularDataApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angularDataApp
 */
angular.module('angularDataApp')

  .controller('LoginCtrl', function ($scope, $location, Authentication) {

    $scope.login = function () {

      Authentication.login($scope.user)

        .then(function (user) {
          console.log(user);

          $location.path('/meetings');
        })

        .catch(function (error) {
          $scope.message = error.toString();
          console.error('Authentication failed:', error);
        });
    };
  });
