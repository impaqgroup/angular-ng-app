(function () {
    'use strict';
    angular.module('shoppinglist.list')
        .factory('productsService', ProductsService);
    function ProductsService($http) {
        function findAll() {
            return $http.get('products.json');
        }
        return {
            findAll: findAll
        };
    }
}());
//# sourceMappingURL=products.service.js.map