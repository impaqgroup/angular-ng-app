"use strict";
var TobayItem_1 = require('../models/TobayItem');
var ListController = (function () {
    function ListController($scope) {
        var _this = this;
        this.$scope = $scope;
        this.tobays = [];
        this.$scope.$watch(function () {
            return _this.tobays;
        }, function (newProducts) {
            _this.remainingCount = _.filter(newProducts, function (product) {
                return product.bought != true;
            }).length;
        }, true);
    }
    ListController.prototype.addToProducts = function () {
        var newTodo = this.productName.trim();
        if (!newTodo.length) {
            return;
        }
        this.tobays.push(new TobayItem_1.default(newTodo, false));
        this.productName = '';
    };
    ListController.prototype.removeProduct = function (tobayItem) {
        _.remove(this.tobays, tobayItem);
    };
    return ListController;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ListController;
