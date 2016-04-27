"use strict";
var list_controller_1 = require('./list.controller');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = angular.module('shoppinglist.list', [])
    .config(function ($routeProvider) {
    $routeProvider
        .when('/list', {
        templateUrl: 'list/html/list.html',
        controller: 'ListController',
        controllerAs: 'vm'
    });
}).
    controller('ListController', list_controller_1.default);
//# sourceMappingURL=list.js.map