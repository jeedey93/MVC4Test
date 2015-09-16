var app = angular.module('myApp', []);
app.controller('myCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.yo = "";

    $scope.sortType = 'Id'; // set the default sort type
    $scope.sortReverse = false;  // set the default sort order
    $scope.searchAsset = '';     // set the default search/filter term

    $http.get(' http://localhost:6212/api/products/').
            success(function (data, status, headers, config) {
                $scope.products = data;
            }).
            error(function (data, status, headers, config) {
                alert("error");
            });

    $http.get('http://localhost:6212/api/values').
        success(function (data, status, headers, config) {
            $scope.yo = data;
        }).
        error(function (data, status, headers, config) {
            alert("error");
        });

    $scope.setEditAssetId = function (id) {
        console.log(id);
        $scope.editAssetId = id;
        $scope.findValue(id);
    }

    $scope.findValue = function (id) {
        $http.get('http://localhost:6212/api/values' + '/' + id).
           success(function (data, status, headers, config) {
               $scope.singleValue = data;
           }).
           error(function (data, status, headers, config) {
               alert("error");
           });
    }
}]);