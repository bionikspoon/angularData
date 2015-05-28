'use strict';

/**
 * @ngdoc function
 * @name angularDataApp.controller:StatusCtrl
 * @description
 * # StatusCtrl
 * Controller of the angularDataApp
 */
angular.module('angularDataApp').controller('StatusCtrl',
  function ($scope, $rootScope, $firebaseAuth, Authentication, FIREBASE_URL,
    $location) {

    $scope.logout = function () {
      Authentication.logout();
      $location.path('/login');
      $scope.userEmail = null;
    };

    var ref = new Firebase(FIREBASE_URL);
    $rootScope.authObj = $firebaseAuth(ref);

    $rootScope.authObj.$onAuth(function (authData) {
      if (authData) {
        $scope.userEmail = authData.password.email;
      }
    });
  });
