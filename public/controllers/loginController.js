var loginApp = angular.module('loginApp', []);

loginApp.controller('loginCtrl', ['$scope', '$http', function($scope, $http) {

   	console.log("inside login controller");
    //User login
    $scope.login = function() {
        $http.post('/', $scope.student)
            .success(function(response) {
                sessionStorage.setItem('username', response.username);
                window.location = '../views/dashboard.html';
            })
            .error(function(response) {
                alert("Incorrect username or password");
                $scope.student.username = "";
                $scope.student.password = "";
            });
    };
}]);