'use strict';

/**
 * @ngdoc function
 * @name angularDataApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularDataApp
 */
angular.module('angularDataApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
