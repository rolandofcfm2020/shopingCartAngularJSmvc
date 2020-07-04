var angularApp = angular.module('angularApp', []);

interface IndexScope extends ng.IScope {
    message: string;
    clickButton();
    items: AngularJSTypescriptCSharp.Models.TestModel[];
}


angularApp.controller('indexCtrl', function ($scope: IndexScope, $http: ng.IHttpService) {

    $scope.message = "Bienvenido a mi página web :)";
    $scope.clickButton = function () {

         $http({
            method: 'GET',
            url: '../Home/GetData',
            params: {
                
            }
         }).
             then(function (response: any) {
                 debugger;
                 $scope.items = response.data;
                 alert("ItemsCount: " + $scope.items.length);
            });

    }
});
