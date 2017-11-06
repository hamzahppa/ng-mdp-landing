'use strict';

angular.module('mdp-web.home', ['ngRoute', 'duScroll'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', [function() {

}]).value('duScrollOffset', 30);