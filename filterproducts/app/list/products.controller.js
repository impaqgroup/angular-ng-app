(function () {
    'use strict';
    angular.module('shoppinglist.list')
        .controller('ProductsController', ProductsController);
    function ProductsController(productsService, $modalInstance) {
        var vm = this;
        vm.chooseProducts = function () {
            $modalInstance.close(_.filter(vm.products, { 'selected': true }));
        };
        vm.cancel = $modalInstance.dismiss;
        productsService.findAll()
            .then(function (response) {
            vm.products = response.data.products;
        });
    }
}());
//# sourceMappingURL=products.controller.js.map