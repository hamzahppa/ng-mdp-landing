'use strict';

angular.module('mdp-web.404', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/404', {
    templateUrl: 'product/404.html',
    controller: '404Ctrl'
  });
}])

.controller('404Ctrl', [function() {

}]);