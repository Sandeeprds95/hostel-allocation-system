var dashboardApp = angular.module('dashboardApp', []);

dashboardApp.controller('dashboardController', ['$scope', '$http', function($scope, $http) {

    var showBlock = true;
    var showFloor = false;
    var showRoom = false;
    var showBed = false;

    refresh();

    function refresh() {
        $scope.showBlock = showBlock;
        $scope.showFloor = showFloor;
        $scope.showRoom = showRoom;
        $scope.showBed = showBed;
        console.log($scope.showBlock);
        console.log($scope.showFloor);
    }

    $scope.studentResult = "";

    
    console.log("inside dashboard controller");
    
    //Retrieving username from Session storage
    var username = sessionStorage.getItem('username');
    //user object
    $scope.username = {
    	'username' : username
    };
    //Post method to retrieve user details
    $http.post('/dashboard', $scope.username)
    	.success(function(response) {
    		$scope.user = response;
    	})
    	.error(function(response) {
    		console.log(response);
    	});

    $scope.selectBlock = function(selectedBlock) {
        console.log(selectedBlock);
        $scope.studentResult = "";
        $scope.studentResult += selectedBlock;
        console.log($scope.studentResult);
        showFloor = true;
        showBlock = false;
        refresh();
    };
}]);