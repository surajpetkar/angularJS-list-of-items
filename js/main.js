var listApp = angular.module("myList", []);
listApp.controller("myListController", function($scope){
    $scope.items = [];
    $scope.newItem = "";
    $scope.addItem = function () {
        if($scope.newItem != ""){
            $scope.items.push($scope.newItem);
            $scope.newItem = "";
        }
    }
    $scope.removeItem = function (index) {
        $scope.items.splice(index, 1);
    }
});