'use strict';

/**
 * @ngdoc service
 * @name angularDataApp.authentication
 * @description
 * # authentication
 * Factory in the angularDataApp.
 */
angular.module('angularDataApp')
  .factory('authentication', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
