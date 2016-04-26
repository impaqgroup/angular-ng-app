/// <reference path="./typings/tsd.d.ts"/>

import list from './list/list';

angular.module('shoppinglist', ['ngRoute', 'ui.bootstrap', list.name])
  .config(function($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/list'
      });
  });

  angular.element(document).ready(() => {
      angular.bootstrap(document, ['shoppinglist'], {});
  });
