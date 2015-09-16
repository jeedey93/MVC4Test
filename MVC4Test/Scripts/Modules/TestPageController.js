var app = angular.module('myApp', []);
app.controller('myCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.yo = "";

    $scope.sortType = 'name'; // set the default sort type
    $scope.sortReverse = false;  // set the default sort order
    $scope.searchFish = '';     // set the default search/filter term

    $scope.getValuesFromApi = function() {
        $http.get('http://localhost:6212/api/values').
            success(function(data, status, headers, config) {
                $scope.yo = data;
            }).
            error(function(data, status, headers, config) {
                alert("error");
            });
    }
    $scope.clearValuesApi = function() {
        $scope.yo = "";
    }

    $scope.setEditAssetId = function (id) {
        console.log(id);
        $scope.editAssetId = id;
        $scope.findValue(id);
    }

    $scope.findValue = function(id){
        $http.get('http://localhost:6212/api/values'+'/'+id).
           success(function (data, status, headers, config) {
               $scope.singleValue = data;
           }).
           error(function (data, status, headers, config) {
               alert("error");
           });
    }
}]);