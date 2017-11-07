// Initialize Firebase
var config = {
  apiKey: "AIzaSyBsRVFcTeQ2w8LUk0NdOfDkz2fgDF_J4Ew",
  authDomain: "mobilan-sanbox.firebaseapp.com",
  databaseURL: "https://mobilan-sanbox.firebaseio.com",
  projectId: "mobilan-sanbox",
  storageBucket: "mobilan-sanbox.appspot.com",
  messagingSenderId: "404824814242"
};
firebase.initializeApp(config);

'use strict';

// Declare app level module which depends on views, and components
angular.module('mdp-web', [
  'ngRoute',
  'mdp-web.home',
  'mdp-web.product',
  'mdp-web.404',
  'mdp-web.version',
  'mdp-web.service',
  'duScroll',
  'ui.bootstrap'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
