'use strict';

/**
 * @ngdoc function
 * @name angularDataApp.controller:StatusCtrl
 * @description
 * # StatusCtrl
 * Controller of the angularDataApp
 */
angular.module('angularDataApp').controller('StatusCtrl',
  function ($scope, $rootScope, $firebaseAuth, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL);
    $rootScope.authObj = $firebaseAuth(ref);

    $rootScope.authObj.$onAuth(function (authData) {
      console.log(authData);
      $scope.userEmail = authData.password.email;
    });
  });
