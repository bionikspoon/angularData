'use strict';

/**
 * @ngdoc function
 * @name angularDataApp.controller:StatusCtrl
 * @description
 * # StatusCtrl
 * Controller of the angularDataApp
 */
angular.module('angularDataApp').controller('StatusCtrl',
  function ($scope, $rootScope, Authentication, $location, FIREBASE_URL,
    $firebaseObject) {

    $scope.logout = function () {
      Authentication.logout();
      $location.path('/login');

    };

    Authentication.authObj.$onAuth(function (authUser) {
      if (authUser) {
        var ref = new Firebase(FIREBASE_URL + '/users/' + authUser.uid);
        var user = $firebaseObject(ref);

        user.$loaded()

          .then(function () {
            $rootScope.currentUser = user;
          });
      } else {
        $rootScope.currentUser = null;
      }
    });
  });
