/// <reference path="../typings/angularjs/angular.d.ts"/>
/// <reference path="../typings/lodash/lodash.d.ts"/>

import Product from './Product';
import * as _ from 'lodash';

class ListController {

    public products: Product[];
    public remainingCount: number;
    public productName: string;
    public product: Product;

    constructor(private $scope) {
        $scope.$watch(function() {
            return this.products
        }, function(newProducts) {
            this.remainingCount = _.filter(newProducts, function(product: Product) {
                return product.bought != true;
            }).length;
        }, true);
    }
    addToProducts() {
        this.products.push({ name: this.productName });
        this.productName = '';
    }

    removeProduct() {
        _.remove(this.products, { name: this.product.name });
    }

}

export default ListController;
