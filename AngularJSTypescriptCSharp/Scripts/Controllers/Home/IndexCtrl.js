var angularApp = angular.module('angularApp', []);
angularApp.controller('indexCtrl', function ($scope, $http) {
    $scope.message = "Bienvenido a mi página web :)";
    $scope.clickButton = function () {
        $http({
            method: 'GET',
            url: '../Home/GetData',
            params: {}
        }).
            then(function (response) {
            debugger;
            $scope.items = response.data;
            alert("ItemsCount: " + $scope.items.length);
        });
    };
});
//# sourceMappingURL=IndexCtrl.js.map