'use strict';

/**
 * @ngdoc overview
 * @name project1App
 * @description
 * # project1App
 *
 * Main module of the application.
 */
angular
  .module('project1App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngAria',
    'LocalStorageModule'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/options.html',
        controller: 'OptionsCtrl',
        controllerAs: 'options'
      })
      .when('/account', {
        templateUrl: 'views/account.html',
        controller: 'AccountCtrl',
        controllerAs: 'account'
      })
      .when('/event', {
        templateUrl: 'views/event.html',
        controller: 'EventsCtrl',
        controllerAs: 'event'
      })
      .when('/manage', {
        templateUrl: 'views/manage.html',
        controller: 'ManageCtrl',
        controllerAs: 'manage'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
