"use strict";
var module = (function () {
    function ListController($scope, $modal) {
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
    ListController.prototype.addToProducts = function (products) {
        if (!_.isArray(products)) {
            products = [products];
        }
        this.productName = '';
        this.products = _.uniq(_.union(this.products, products), 'name');
    };
    ListController.prototype.removeProduct = function (product) {
        _.remove(this.products, { name: product.name });
    };
    ListController.prototype.findProduct = function () {
        this.$modal.open({
            animation: true,
            templateUrl: 'list/html/products.html',
            controller: 'ProductsController as vm',
            size: 'lg'
        }).result.then(this.addToProducts);
    };
    return ListController;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = module;
//# sourceMappingURL=list.controller.js.map