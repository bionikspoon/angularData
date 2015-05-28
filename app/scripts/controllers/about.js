'use strict';

/**
 * @ngdoc function
 * @name angularDataApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularDataApp
 */
angular.module('angularDataApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
