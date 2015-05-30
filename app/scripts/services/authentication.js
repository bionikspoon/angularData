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
  function ($rootScope, $firebaseAuth, $firebaseObject, FIREBASE) {

    var authObj = $firebaseAuth(FIREBASE);

    var userObj = function (userId) {
      var userRef = FIREBASE.child('/users/' + userId);
      return $firebaseObject(userRef);
    };


    var factoryObject = {

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
            var firebaseUser = userObj(registeredUser.uid);

            firebaseUser.date = Firebase.ServerValue.TIMESTAMP;
            firebaseUser.registeredUser = registeredUser.uid;
            firebaseUser.firstName = user.firstName;
            firebaseUser.lastName = user.lastName;
            firebaseUser.email = user.email;

            firebaseUser.$save(registeredUser.uid);
          });
      },

      authObj: authObj,

      userObj: userObj,

      signedIn: function () {
        return authObj.$getAuth() !== null;
      }
    };

    $rootScope.signedIn = function () {
      return factoryObject.signedIn();
    };
    return factoryObject;
  });

