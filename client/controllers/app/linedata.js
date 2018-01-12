angular.module('app').controller('app_linedata', app_linedata);
function app_linedata($scope, app) {
    'use strict';
    app.init($scope);
    $scope.incrementQuant = function () {
        $scope.data.quantity++;
    };
    $scope.decrementQuant = function () {
        if ($scope.data.quantity > 0) {
            $scope.data.quantity--;
        }
    };
}