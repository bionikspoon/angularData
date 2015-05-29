'use strict';

/**
 * @ngdoc service
 * @name angularDataApp.FIREBASE
 * @description
 * # FIREBASE
 * Constant in the angularDataApp.
 */
angular.module('angularDataApp')
  .constant('FIREBASE', new Firebase('https://bionikspoon-attendance.firebaseio.com'));
