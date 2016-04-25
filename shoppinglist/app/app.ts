/// <reference path="typings/angularjs/angular.d.ts" />

import list from './list/list';

angular.module('shoppinglist', [
  'ngRoute',
  'ui.bootstrap',
  list.name])
  .config(function($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/list'
      });
  });
