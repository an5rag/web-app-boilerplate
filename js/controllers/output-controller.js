angular.module('zenvisageControllers')

    .controller('OutputController', ['$scope','$rootScope','ScatterService', function ($scope,$rootScope, ScatterService) {
        $scope.stuff = "This is an output element!";
        $rootScope.$watch('polygons', function() {
            $scope.polygons = $rootScope.polygons;
        }, true);
    }]);