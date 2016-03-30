'use strict';

angular.module('shoppinglist', ['ngRoute', 'ui.bootstrap', 'shoppinglist.list'])
  .config(function($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/list'
      });
  });
