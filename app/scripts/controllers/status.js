'use strict';

/**
 * @ngdoc function
 * @name angularDataApp.controller:StatusCtrl
 * @description
 * # StatusCtrl
 * Controller of the angularDataApp
 */
angular.module('angularDataApp').controller('StatusCtrl',
  function ($scope, $rootScope, Authentication, $location) {

    $scope.logout = function () {
      Authentication.logout();
      $location.path('/login');

    };

    Authentication.authObj.$onAuth(function (authUser) {
      if (authUser) {
        Authentication.authUserObj(authUser.uid).$loaded()

          .then(function () {
            $rootScope.currentUser = Authentication.authUserObj;
          });

      } else {
        $rootScope.currentUser = null;
      }
    });
  });
