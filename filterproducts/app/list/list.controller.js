(function () {
    'use strict';
    angular.module('shoppinglist.list')
        .controller('ListController', ListController);
    function ListController($scope, $modal) {
        var obj = new ListControllerC($scope, $modal);
        var vm = this;
        vm.obj = obj;
    }
    var ListControllerC = (function () {
        function ListControllerC($scope, $modal) {
            var _this = this;
            this.products = [];
            this.$modal = $modal;
            $scope.$watch(function () {
                return _this.products;
            }, function (newProducts) {
                _this.remainingCount = _.filter(newProducts, function (product) {
                    return product.bought != true;
                }).length;
            }, true);
        }
        ListControllerC.prototype.addToProducts = function (products) {
            if (!_.isArray(products)) {
                products = [products];
            }
            this.productName = '';
            this.products = _.uniq(_.union(this.products, products), 'name');
        };
        ListControllerC.prototype.removeProduct = function (product) {
            _.remove(this.products, { name: product.name });
        };
        ListControllerC.prototype.findProduct = function () {
            this.$modal.open({
                animation: true,
                templateUrl: 'list/html/products.html',
                controller: 'ProductsController as vm',
                size: 'lg'
            }).result.then(this.addToProducts);
        };
        return ListControllerC;
    }());
})();
//# sourceMappingURL=list.controller.js.map