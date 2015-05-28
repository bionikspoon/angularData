'use strict';

/**
 * @ngdoc service
 * @name angularDataApp.Authentication
 * @description
 * # Authentication
 * Factory in the angularDataApp.
 */
angular.module('angularDataApp')

  .factory('Authentication',
  function ($firebase, $firebaseAuth, $location, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL);
    var authObj = $firebaseAuth(ref);

    return {
      login: function (user) {
        return authObj.$authWithPassword({
          email: user.email, password: user.password
        });
      },

      logout: function () {
        return authObj.$unauth();
      }


    };
  });
