'use strict';

// Declare app level module which depends on views, and components
angular.module('mdp-web', [
  'ngRoute',
  'mdp-web.home',
  'mdp-web.product',
  'mdp-web.404',
  'mdp-web.version',
  'duScroll'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
