var angularApp = angular.module('angularApp', []);
angularApp.controller('shopingCartCtrl', function ($scope, $http) {
    $scope.message = "Bienvenido a mi página web :)";
    $scope.shopingCart = [];
    $scope.getAllProducts = function () {
        $http({
            method: 'GET',
            url: '../Products/GetAllProducts',
            params: {}
        }).
            then(function (response) {
            debugger;
            $scope.items = response.data;
            alert("ItemsCount: " + $scope.items.length);
        });
    };
    $scope.addProduct = function () {
        alert($scope.selectedItem.ProductName);
        var newProductCart = {};
        newProductCart.Price = $scope.selectedItem.Price;
        newProductCart.Quantity = 1;
        newProductCart.ProductId = $scope.selectedItem.Id;
        $scope.shopingCart.push(newProductCart);
    };
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
            then(function (response) {
            alert("Cart saved");
            $scope.shopingCart = [];
        });
    };
    //https://www.tutsmake.com/javascript-sum-array-object-values-examples/
    //Five Method – javascript sum array of objects reduce
    $scope.getTotal = function () {
        var sum = $scope.shopingCart.reduce(function (total, currentValue) {
            return total + (currentValue.Quantity * currentValue.Price);
        }, 0);
        return sum;
    };
    $scope.getAllProducts();
});
//# sourceMappingURL=ShopingCartCtrl.js.map