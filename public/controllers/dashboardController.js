var dashboardApp = angular.module('dashboardApp', []);

dashboardApp.controller('dashboardCtrl', ['$scope', '$http', function($scope, $http) {

    console.log("inside dashboard controller");
    var username = sessionStorage.getItem('username');
    //console.log(username);
    $scope.username = {
    	'username' : username
    };
	//console.log($scope.username);
    $http.post('/dashboard', $scope.username)
    	.success(function(response) {
    		$scope.user = response;
    	})
    	.error(function(response) {
    		console.log(response);
    	});
}]);