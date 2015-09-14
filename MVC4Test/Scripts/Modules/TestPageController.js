﻿var app = angular.module('myApp', []);
app.controller('myCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.yo = "";
    $scope.getValuesFromApi = function() {
        $http.get('http://localhost:6212/api/values').
            success(function(data, status, headers, config) {
                $scope.yo = data;
            }).
            error(function(data, status, headers, config) {
                alert("error");
            });
    }

}]);