/// <reference path="../typings/angularjs/angular.d.ts"/>
/// <reference path="../typings/lodash/lodash.d.ts"/>

import Product from './Product';

(function() {
    angular.module('shoppinglist.list')
      .controller('ListController', ListController);

    function ListController($scope) {
      let vm = this;

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
        vm.remainingCount = _.filter(newProducts, function(product:Product){
          return product.bought != true;
        }).length;
		  }, true);
    }
  }());
