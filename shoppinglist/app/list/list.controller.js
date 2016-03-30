(function() {
    'use strict';

    angular.module('shoppinglist.list')
      .controller('ListController', ListController);

    function ListController() {
      var vm = this;

      vm.products = [];

      vm.addToProducts = function() {
        //add typed product into vm.products
      }

      vm.removeProduct = function(product) {
        //remove product from vm.products
      }

      $scope.$watch(function() {
        return vm.products
      }, function (newProducts) {
        //count products where 'bought' != true and assign into vm.remainingCount
		  }, true);
    }
  }());
