'use strict';

/**
 * @ngdoc directive
 * @name angularDataApp.directive:confirmationNeeded
 * @description
 * # confirmationNeeded
 */
angular

  .module('angularDataApp')

  .directive('confirmationNeeded', function () {
    return {
      priority: 1,
      terminal: true,
      link: function postLink(scope, element, attrs) {
        var message = attrs.confirmationNeeded ||
          'Are you sure you want to delete?';
        var clickAction = attrs.ngClick;
        element.bind('click', function () {
          if (window.confirm(message)) {
            scope.$eval(clickAction);
          }
        });
      }
    };
  });
