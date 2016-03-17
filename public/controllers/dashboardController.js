var dashboardApp = angular.module('dashboardApp', []);

dashboardApp.controller('dashboardController', ['$scope', '$http', function($scope, $http) {

    var showBlock = true;
    var showFloor = false;
    var showRoom = false;
    var showBed = false;

    //Division scopes
    $scope.selectedBlock;
    $scope.selectedFloor;
    $scope.selectedRoom;
    $scope.selectedBed;

    //Room availability
    $scope.roomAvailable = false;
    $scope.roomUnavailable = true;

    refresh();

    //Changes the card according to the visibility
    function refresh() {
        $scope.showBlock = showBlock;
        $scope.showFloor = showFloor;
        $scope.showRoom = showRoom;
        $scope.showBed = showBed;
    }

    //Sets the the value of the tabs
    $scope.setTab = function(tabNum) {
        $scope.roomAvailable = false;
        $scope.selectedRoomUnavailable = false;
        console.log($scope.selectedBlock);
        console.log($scope.selectedFloor);
        console.log($scope.selectedRoom);
        console.log($scope.selectedBed);
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

    //Changes to the previous tab
    $scope.previousTab = function(tabNum) {
        $scope.setTab(tabNum);
    }

    //checks if a particular room is available or not
    $scope.checkAvailability = function() {
        var pad = '0';
        var roomNum = String($scope.selectedRoom);
        if(roomNum.length <= 1) {
            roomNum = pad + roomNum;
        }
        $scope.hostelDetails = {
            'block' : $scope.selectedBlock,
            'floor' : $scope.selectedFloor,
            'room' : roomNum
        };
        console.log($scope.hostelDetails);
        $http.post('/check', $scope.hostelDetails)
            .success(function(response) {
                console.log(response);
                if(response >=3 ) {
                    $scope.roomUnavailable = false;
                    $scope.roomAvailable = false;
                } else {
                    $scope.roomUnavailable = true;
                    $scope.roomAvailable = true;
                }
            })
            .error(function(response) {
                console.log(response);
            });
    }

    //input value change in room number
    $scope.inputChange = function() {
        $scope.roomUnavailable = true;
        $scope.roomAvailable = false;
    }
}]);