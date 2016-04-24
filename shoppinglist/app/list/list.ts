/// <reference path="../typings/angularjs/angular.d.ts"/>

angular.module('shoppinglist.list', [])
  .config(function($routeProvider) {
    $routeProvider
      .when('/list', {
        templateUrl: 'list/html/list.html',
        controller: 'ListController',
        controllerAs: 'vm'
      });
  });
