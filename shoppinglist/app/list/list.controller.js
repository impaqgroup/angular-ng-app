(function() {
    'use strict';

    angular.module('shoppinglist.list')
      .controller('ListController', ListController);

    function ListController($scope) {
      var vm = this;

      vm.products = [];

      vm.addToProducts = function() {
        vm.products.push({name: vm.productName});
        vm.productName = '';
      }

      vm.removeProduct = function(product) {
        _.remove(vm.products, {name: product.name});
      }

      $scope.$watch(function() {
        return vm.products
      }, function (newProducts) {
        vm.remainingCount = _.filter(newProducts, function(product){
          return product.bought != true;
        }).length;
		  }, true);
    }
  }());
