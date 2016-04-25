/// <reference path="../../typings/angularjs/angular.d.ts"/>
/// <reference path="../../typings/lodash/lodash.d.ts"/>

import TobayItem from '../models/TobayItem';

class ListController {

    private tobays: TobayItem[] = [];
    private remainingCount: number;
    private productName: string;

    constructor(
      private $scope: ng.IScope
    ) {
        this.$scope.$watch(() =>
          this.tobays,
        (newProducts) => {
            this.remainingCount = _.filter(newProducts, (product: TobayItem) => {
                return product.bought != true;
            }).length;
        }, true);
    }
    addToProducts() {
      let newTodo : string = this.productName.trim();
			if (!newTodo.length) {
				return;
			}

			this.tobays.push(new TobayItem(newTodo, false));
			this.productName = '';
    }

    removeProduct(tobayItem: TobayItem) {
        _.remove(this.tobays, tobayItem);
    }

}

export default ListController;
