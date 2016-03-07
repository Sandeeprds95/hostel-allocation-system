var dashboardApp = angular.module('dashboardApp', []);

dashboardApp.controller('dashboardCtrl', ['$scope', '$http', function($scope, $http) {

    console.log("inside dashboard controller");
    var username = sessionStorage.getItem('username');
    $scope.username = {
    	'username' : username
    };
    $http.post('/dashboard', $scope.username)
    	.success(function(response) {
    		$scope.user = response;
    	})
    	.error(function(response) {
    		console.log(response);
    	});
}]);