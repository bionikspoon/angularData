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
  function ($firebase, $firebaseAuth, $firebaseObject, $location,
    FIREBASE_URL) {
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
      },

      register: function (user) {
        return authObj.$createUser({
          email: user.email, password: user.password
        })

          .then(function (registeredUser) {
            var ref = new Firebase(FIREBASE_URL + '/users');
            var firebaseUsers = $firebaseObject(ref);
            var userInfo = {
              date: Firebase.ServerValue.TIMESTAMP,
              registeredUser: registeredUser.uid,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email
            };
            firebaseUsers[registeredUser.uid] = userInfo;
            firebaseUsers.$save(registeredUser.uid)

              .then(function (ref) {
                console.log(ref);

              });

          });
      }

    };
  });
