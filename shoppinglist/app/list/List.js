"use strict";
var ListController_1 = require('./controllers/ListController');
var module = angular
    .module('shoppinglist.list', [])
    .config(function ($routeProvider) {
    $routeProvider
        .when('/list', {
        templateUrl: 'list/html/list.html',
        controller: 'ListController',
        controllerAs: 'vm'
    });
})
    .controller('ListController', ListController_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = module;
