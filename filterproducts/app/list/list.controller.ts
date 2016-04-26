/// <reference path="../typings/tsd.d.ts"/>

var module = class ListController {

    public products: any = [];
    private remainingCount: number;
    private productName: string;
    private $modal: any;

    constructor($scope, $modal) {
        this.$modal = $modal;
        $scope.$watch(() =>
            this.products,
            (newProducts: IProduct[]) => {
                this.remainingCount = _.filter(newProducts, (product) => {
                    return product.bought != true;
                }).length;
            }, true);
    }

    addToProducts(products) {
        if (!_.isArray(products)) {
            products = [products];
        }
        this.productName = '';
        this.products = _.uniq(_.union(this.products, products), 'name');
    }

    removeProduct(product) {
        _.remove(this.products, { name: product.name });
    }

    findProduct() {
        this.$modal.open({
            animation: true,
            templateUrl: 'list/html/products.html',
            controller: 'ProductsController as vm',
            size: 'lg'
        }).result.then(this.addToProducts)
    }

}

export default module;
