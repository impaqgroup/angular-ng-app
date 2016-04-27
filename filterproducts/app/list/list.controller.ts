interface IProduct {
    bought: boolean;
    name: string;
}

var module = class ListCtrl {

    products: IProduct[];
    productName: string;
    $modal: any;
    remainingCount: number;

    constructor($scope: ng.IScope, $modal) {
        this.$modal = $modal;
        $scope.$watch(() => {
            return this.products
        }, (newProducts) => {
            this.remainingCount = _.filter(newProducts, (product: IProduct) => {
                return product.bought != true;
            }).length;
        }, true);
    }

    addToProducts(products: IProduct[] | IProduct): IProduct[] {
        if (!_.isArray(products)) {
            products = [products];
        }
        this.productName = '';
        return this.products = _.uniq(_.union(this.products, products), 'name');
    }

    removeProduct(product: IProduct) {
        _.remove(this.products, product);
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
