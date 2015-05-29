'use strict';

/**
 * @ngdoc directive
 * @name angularDataApp.directive:confirmationNeeded
 * @description
 * # confirmationNeeded
 */
angular.module('angularDataApp')
  .directive('confirmationNeeded', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the confirmationNeeded directive');
      }
    };
  });
