/// <reference path="../typings/tsd.d.ts"/>

'use strict';

angular.module('shoppinglist.list', [])
  .config(function($routeProvider) {
    $routeProvider
      .when('/list', {
        templateUrl: 'list/html/list.html',
        controller: 'ListController',
        controllerAs: 'vm'
      });
  });
