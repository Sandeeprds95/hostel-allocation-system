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
    }

    function setTab(tabNum) {
        if(tabNum == 1) {
            showBlock = true;
            showFloor = false;
            showRoom = false;
            showBed = false;
        } else if(tabNum == 2) {
            showBlock = false;
            showFloor = true;
            showRoom = false;
            showBed = false;
        } else if(tabNum == 3) {
            showBlock = false;
            showFloor = false;
            showRoom = true;
            showBed = false;
        } else {
            showBlock = false;
            showFloor = false;
            showRoom = false;
            showBed = true;
        }
        refresh();
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

    $scope.selectInstance = function(selectedInstance, tabNum) {
        console.log(selectedInstance);
        $scope.studentResult = "";
        $scope.studentResult += selectedInstance;
        console.log($scope.studentResult);
        setTab(tabNum);
    };

    $scope.previousTab = function(tabNum) {
        console.log($scope.studentResult);
        $scope.studentResult = $scope.studentResult.slice(0, -1);
        console.log("after:" + $scope.studentResult);
        setTab(tabNum);
    }

}]);