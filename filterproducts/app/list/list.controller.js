"use strict";
var module = (function () {
    function ListCtrl($scope, $modal) {
        var _this = this;
        this.$modal = $modal;
        $scope.$watch(function () {
            return _this.products;
        }, function (newProducts) {
            _this.remainingCount = _.filter(newProducts, function (product) {
                return product.bought != true;
            }).length;
        }, true);
    }
    ListCtrl.prototype.addToProducts = function (products) {
        if (!_.isArray(products)) {
            products = [products];
        }
        this.productName = '';
        return this.products = _.uniq(_.union(this.products, products), 'name');
    };
    ListCtrl.prototype.removeProduct = function (product) {
        _.remove(this.products, product);
    };
    ListCtrl.prototype.findProduct = function () {
        this.$modal.open({
            animation: true,
            templateUrl: 'list/html/products.html',
            controller: 'ProductsController as vm',
            size: 'lg'
        }).result.then(this.addToProducts);
    };
    return ListCtrl;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = module;
//# sourceMappingURL=list.controller.js.map