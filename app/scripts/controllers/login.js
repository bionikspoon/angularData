'use strict';

/**
 * @ngdoc function
 * @name angularDataApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angularDataApp
 */
angular.module('angularDataApp')

  .controller('LoginCtrl',
  function ($scope, $location, Authentication, currentAuth) {

    if (currentAuth) {
      $location.path('/meetings');
    } else {
      $scope.login = function () {

        Authentication.login($scope.user)

          .then(function () {
            $location.path('/meetings');
          }, function (error) {
            $scope.message = error.toString();
          });

      };
    }
  });
