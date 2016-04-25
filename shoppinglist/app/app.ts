/// <reference path="./typings/types.d.ts"/>

import list from './list/List';

angular.module('shoppinglist', [
  'ngRoute',
  'ui.bootstrap',
  list.name
])
  .config(function($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/list'
      });
  });

  angular.element(document).ready(() => {
      angular.bootstrap(document, ['shoppinglist'], {});
  });
