/// <reference path="../typings/angularjs/angular.d.ts"/>

import ListController from './controllers/ListController';

var module = angular
    .module('shoppinglist.list', [])
    .config(function($routeProvider) {
        $routeProvider
            .when('/list', {
                templateUrl: 'list/html/list.html',
                controller: 'ListController',
                controllerAs: 'vm'
            });
    })
    .controller('ListController', ListController);

export default module;
