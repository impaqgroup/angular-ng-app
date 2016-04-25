"use strict";
var _ = require('lodash');
var ListController = (function () {
    function ListController($scope) {
        this.$scope = $scope;
        $scope.$watch(function () {
            return this.products;
        }, function (newProducts) {
            this.remainingCount = _.filter(newProducts, function (product) {
                return product.bought != true;
            }).length;
        }, true);
    }
    ListController.prototype.addToProducts = function () {
        this.products.push({ name: this.productName });
        this.productName = '';
    };
    ListController.prototype.removeProduct = function () {
        _.remove(this.products, { name: this.product.name });
    };
    return ListController;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ListController;
