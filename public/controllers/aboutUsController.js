var aboutUsApp = angular.module('aboutUsApp', []);

aboutUsApp.controller('aboutUsCtrl', ['$scope', '$http', function($scope, $http) {

   	console.log("inside aboutUs controller");
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
}]);