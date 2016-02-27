var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {

   	console.log("Hello World from controller");

/*
    var refresh = function() {
    	$http.get('/contactlist').
    	success(function(response) {
    		console.log("I got the data form server!");
    		$scope.contactList = response;
    		$scope.contact = "";
    	});
    };

   	refresh();

   	$scope.addContact = function() {
    	console.log($scope.contact);
    	$http.post('/contactlist', $scope.contact).
    		success(function(response) {
    			console.log(response);
    			refresh();
    		});
    };

    $scope.deleteContact = function(id) {
    	console.log(id);
    	$http.delete('./contactlist/' + id).
    		success(function(response) {
    			refresh();
    		});
    };

    $scope.editContact =  function(id) {
    	console.log(id);
    	$http.get('/contactlist/' + id).
    		success(function(response) {
    			$scope.contact = response;
    		});
    };

    $scope.updateContact = function() {
    	$http.put('/contactlist/' + $scope.contact._id, $scope.contact).
	   		success(function(response) {
	   			refresh();
    		});
   	};

    $scope.clearField =  function() {
    	$scope.contact = "";
    };
}]);
*/