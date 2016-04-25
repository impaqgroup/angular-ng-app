"use strict";
var List_1 = require('./list/List');
angular.module('shoppinglist', [
    'ngRoute',
    'ui.bootstrap',
    List_1.default.name
])
    .config(function ($routeProvider) {
    $routeProvider
        .otherwise({
        redirectTo: '/list'
    });
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['shoppinglist'], {});
});
