"use strict";
var list_1 = require('./list/list');
angular.module('shoppinglist', [
    'ngRoute',
    'ui.bootstrap',
    list_1.default.name])
    .config(function ($routeProvider) {
    $routeProvider
        .otherwise({
        redirectTo: '/list'
    });
});
