app.controller('MenuAndNavController', ['$scope', '$location', function($scope, $location) {

    $scope.menuShown = false;

    $scope.toggleMenu = function() {
        $scope.menuShown = !$scope.menuShown;
    }

    $scope.menuGo = function( path ) {
        $scope.menuShown = false;
        $location.path( path );
    }
}]);