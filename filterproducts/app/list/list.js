"use strict";
var list_controller_1 = require('./list.controller');
var module = angular.
    module('shoppinglist.list', [])
    .config(function ($routeProvider) {
    $routeProvider
        .when('/list', {
        templateUrl: 'list/html/list.html',
        controller: 'ListController',
        controllerAs: 'vm'
    });
}).controller('ListController', list_controller_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = module;
//# sourceMappingURL=list.js.map