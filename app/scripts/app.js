'use strict';

/**
 * @ngdoc overview
 * @name angularDataApp
 * @description
 * # angularDataApp
 *
 * Main module of the application.
 */
angular.module('angularDataApp', [
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'firebase'
])

  .config(function ($routeProvider) {
    $routeProvider

      .when('/login', {
        templateUrl: 'views/login.html', controller: 'LoginCtrl'
      })

      .when('/register', {
        templateUrl: 'views/register.html', controller: 'RegisterCtrl'
      })

      .when('/meetings', {
        templateUrl: 'views/meetings.html', controller: 'MeetingsCtrl'
      })

      .otherwise({
        redirectTo: '/meetings'
      });
  });
