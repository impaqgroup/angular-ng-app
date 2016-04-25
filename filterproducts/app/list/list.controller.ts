( {
    'use strict';

    angular.module('shoppinglist.list')
      .controller('ListController', ListController);

    function ListController($scope, $modal) {
      var vm = this;

      vm.addToProducts = function(products) {
        if(!_.isArray(products)) {
          products = [products];
        }
        let union: any = _.union(vm.products, products);
        vm.products = _.uniq(union, 'name');
        vm.productName = '';
      }

      vm.removeProduct = function(product) {
        _.remove(vm.products, {name: product.name});
      }

      vm.findProduct = function() {
        $modal.open({
          animation: true,
          templateUrl: 'list/html/products.html',
          controller: 'ProductsController as vm',
          size: 'lg'
        }).result.then(vm.addToProducts)
      }

      $scope.$watch(function() {
        return vm.products
      }, function (newProducts) {
        vm.remainingCount = _.filter(newProducts, function(product){
          return product.bought != true;
        }).length;
		  }, true);

    }
  });
