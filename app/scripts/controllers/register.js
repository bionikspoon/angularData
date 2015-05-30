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

  .controller('RegisterCtrl',
  function ($scope, $location, Authentication, currentAuth) {

    if (currentAuth) {
      $location.path('/meetings');
    } else {
      $scope.register = function () {
        Authentication.register($scope.user)

          .then(function () {
            Authentication.login($scope.user);
            $location.path('/meetings');
          })

          .catch(function (error) {
            $scope.message = error.toString();
            console.error('Registration failed:', error);
          });

      };
    }

  });
