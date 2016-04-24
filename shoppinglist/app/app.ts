/// <reference path="typings/angularjs/angular.d.ts" />

'use strict';

angular.module('shoppinglist', ['ngRoute', 'ui.bootstrap', 'shoppinglist.list'])
  .config(function($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/list'
      });
  });
