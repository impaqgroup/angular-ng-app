(function() {
    'use strict';

    angular.module('shoppinglist.list')
      .controller('ProductsController', ProductsController);

    function ProductsController($modalInstance) {
      var vm = this;

      vm.chooseProducts = function() {
        //close modal and return all products where 'selected' === true
      }

      vm.cancel = $modalInstance.dismiss;
      //use productsService and get all products, response assign into vm.products
    }
  }());
