angular.module('zenvisageControllers')

    .controller('InputController', ['$scope', '$state', '$rootScope', 'ScatterService', function ($scope, $state, $rootScope, ScatterService) {
        $scope.stuff = "This is an input element!";
        $rootScope.shared = {value:"Something to begin with!"};
        ScatterService.drawRandom();
        $scope.scatterService = ScatterService;
        $scope.submit = function (){
            var polygons = ScatterService.getPolygons();
            $rootScope.polygons = polygons;
            $rootScope.$digest();
        };
        setTimeout(function () {
            $rootScope.shared = {value:"The input controller just changed this"};
            $rootScope.$digest();
        }, 3000);
    }]);