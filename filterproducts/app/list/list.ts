import ListCtrl from './list.controller';

export default angular.module('shoppinglist.list', [])
  .config(function($routeProvider) {
    $routeProvider
      .when('/list', {
        templateUrl: 'list/html/list.html',
        controller: 'ListController',
        controllerAs: 'vm'
      });
  }).
  controller('ListController', ListCtrl);
