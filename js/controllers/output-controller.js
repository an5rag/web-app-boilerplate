angular.module('zenvisageControllers')

    .controller('OutputController', ['$scope','$rootScope', function ($scope,$rootScope) {
        $scope.stuff = "This is an output element!";
        $rootScope.$watch('shared', function() {
            $scope.temp = $rootScope.shared.value;
            console.log($rootScope.shared.value);
        }, true);
    }]);