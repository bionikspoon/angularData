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
  function ($rootScope, $firebase, $firebaseAuth, $firebaseObject,
    $firebaseArray, $location, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL);
    var authObj = $firebaseAuth(ref);

    var factoryObject = {

      login: function (user) {
        return authObj.$authWithPassword({
          email: user.email, password: user.password
        })

          .then(function (authData) {
            var userRef = new Firebase(FIREBASE_URL + '/users/' + authData.uid);
            var userObj = $firebaseObject(userRef);

            userObj.$loaded()

              .then(function () {
                $rootScope.currentUser = userObj;
              })

              .catch(function (error) {

                console.error('User Object not found:', error);

              });

          })

          .catch(function (error) {
            console.error('Authentication failed:', error);
          });
        /*        var userRef = new Firebase(FIREBASE_URL + '/users/' + user.uid);
         var userObj = $firebaseObject(userRef);

         userObj.$loaded()

         .then(function () {
         $rootScope.currentUser = userObj;
         console.log('$rootScope.currentUser', $rootScope.currentUser);
         console.log('user.uid', user.uid);
         });

         return authObj.$authWithPassword({
         email: user.email, password: user.password
         });*/
      },

      logout: function () {
        return authObj.$unauth();
      },

      register: function (user) {
        return authObj.$createUser({
          email: user.email, password: user.password
        })

          .then(function (registeredUser) {
            var userRef = new Firebase(FIREBASE_URL + '/users/' +
              registeredUser.uid);
            var firebaseUser = $firebaseObject(userRef);

            firebaseUser.date = Firebase.ServerValue.TIMESTAMP;
            firebaseUser.registeredUser = registeredUser.uid;
            firebaseUser.firstName = user.firstName;
            firebaseUser.lastName = user.lastName;
            firebaseUser.email = user.email;

            firebaseUser.$save(registeredUser.uid);

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

