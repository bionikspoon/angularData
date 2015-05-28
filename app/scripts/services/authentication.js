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
  function ($rootScope, $firebase, $firebaseAuth, $firebaseObject, $location,
    FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL);
    var authObj = $firebaseAuth(ref);

    var factoryObject = {
      login: function (user) {
        var userRef = new Firebase(FIREBASE_URL + '/users/' + user.uid);
        var userObj = $firebaseObject(userRef);

        userObj.$loaded()

          .then(function () {
            $rootScope.currentUser = userObj;
          });

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
            firebaseUsers[registeredUser.uid] = {
              date: Firebase.ServerValue.TIMESTAMP,
              registeredUser: registeredUser.uid,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email
            };
            firebaseUsers.$save(registeredUser.uid);

          });
      },

      authObj: authObj,

      signedIn: function () {
        return $rootScope.currentUser != null;
      },

      authUserObj: function (uid) { // TODO remove this
        var userRef = new Firebase(FIREBASE_URL + '/users/' + uid);
        return $firebaseObject(userRef);
      }
    };

    $rootScope.signedIn = function () {
      return factoryObject.signedIn();
    };
    return factoryObject;
  });

