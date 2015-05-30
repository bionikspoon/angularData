'use strict';

/**
 * @ngdoc overview
 * @name angularDataApp
 * @description
 * # angularDataApp
 *
 * Main module of the application.
 */
angular

  .module('angularDataApp', [
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

  .run(function ($rootScope, $location) {
    $rootScope.$on('$routeChangeError',
      function (event, next, previous, error) {

        if (error === 'AUTH_REQUIRED') {
          $location.path('/login');
        }
      });
  })

  .config(function ($routeProvider) {
    $routeProvider

      .when('/login', {
        templateUrl: 'views/login.html', controller: 'LoginCtrl', resolve: {
          'currentAuth': [
            'Authentication', function (Authentication) {
              return Authentication.authObj.$waitForAuth();
            }
          ]
        }
      })

      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        resolve: {
          'currentAuth': [
            'Authentication', function (Authentication) {
              return Authentication.authObj.$waitForAuth();
            }
          ]
        }
      })

      .when('/meetings', {
        templateUrl: 'views/meetings.html',
        controller: 'MeetingsCtrl',
        resolve: {
          'currentAuth': [
            'Authentication', function (Authentication) {
              return Authentication.authObj.$requireAuth();
            }
          ]
        }
      })

      .when('/checkins/:userId/:meetingId', {
        templateUrl: 'views/checkins.html',
        controller: 'CheckinsCtrl',
        resolve: {
          'currentAuth': [
            'Authentication', function (Authentication) {
              return Authentication.authObj.$requireAuth();
            }
          ]
        }
      })

      .when('/checkins/:userId/:meetingId/checkinslist', {
        templateUrl: 'views/checkinslist.html',
        controller: 'CheckinsListCtrl',
        resolve: {
          'currentAuth': [
            'Authentication', function (Authentication) {
              return Authentication.authObj.$requireAuth();
            }
          ]
        }
      })

      .otherwise({
        redirectTo: '/meetings'
      });
  });
