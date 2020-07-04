var angularApp = angular.module('angularApp', []);

interface ShopingCartScope extends ng.IScope {
    message: string;
    getAllProducts();
    items: AngularJSTypescriptCSharp.Models.ProductModel[];
    selectedItem: AngularJSTypescriptCSharp.Models.ProductModel;
    addProduct();
    shopingCart: AngularJSTypescriptCSharp.Models.ShopingCartModel[];
}


angularApp.controller('shopingCartCtrl', function ($scope: ShopingCartScope, $http: ng.IHttpService) {

    $scope.message = "Bienvenido a mi página web :)";
    $scope.shopingCart = [];
    $scope.getAllProducts = function () {

        $http({
            method: 'GET',
            url: '../Products/GetAllProducts',
            params: {

            }
        }).
            then(function (response: any) {
                debugger;
                $scope.items = response.data;
                alert("ItemsCount: " + $scope.items.length);
            });

    }


    $scope.addProduct = function () {
        alert($scope.selectedItem.ProductName);
        var newProductCart = <AngularJSTypescriptCSharp.Models.ShopingCartModel>{};
        newProductCart.Price = $scope.selectedItem.Price;
        newProductCart.Quantity = 1;
        newProductCart.ProductId = $scope.selectedItem.Id;
        $scope.shopingCart.push(newProductCart);
    }

    $scope.saveShopingCart = function () {

        debugger;
        alert("Enviando  " + $scope.shopingCart.length + " productos");


        $http({
            method: 'POST',
            url: '../Products/SaveCart',
            data: {
                shopingCart: $scope.shopingCart,
            }
        }).
            then(function (response: any) {
                alert("Cart saved");
                $scope.shopingCart = [];
            });

    }

    //https://www.tutsmake.com/javascript-sum-array-object-values-examples/
    //Five Method – javascript sum array of objects reduce
    $scope.getTotal = () => {
        var sum = $scope.shopingCart.reduce(function (total, currentValue) {
            return total + (currentValue.Quantity * currentValue.Price);
        }, 0);

        return sum;
    }

    $scope.getAllProducts();

  
});
