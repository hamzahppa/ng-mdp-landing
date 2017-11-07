'use strict';

angular.module('mdp-web.home', ['ngRoute', 'duScroll'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', function($scope, $uibModal, $document, Service) {
  $scope.animationsEnabled = true;
  
  Service.getProducts().then(function(products){
    $scope.products = [];
    for(var p in products){
      $scope.products.push(products[p]);
    }
    console.log($scope.products);
  })

  $scope.openModal = function (size) {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'productModal.html',
      // controller: 'ModalInstanceCtrl',
      // controllerAs: '$ctrl',
      // size: 'lg',
      resolve: {
        items: function () {
          return $scope.products;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  // $scope.openModal = function(){
  //   alert('modal');
  // }
});