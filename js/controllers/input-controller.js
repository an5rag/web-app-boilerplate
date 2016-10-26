angular.module('zenvisageControllers')

    .controller('InputController', ['$scope', '$state', '$rootScope', function ($scope, $state, $rootScope) {
        $scope.stuff = "This is an input element!";
        $rootScope.shared = {value:"Something to begin with!"};
        setTimeout(function () {
            $rootScope.shared = {value:"The input controller just changed this"};
            $rootScope.$digest();
        }, 3000);
    }]);