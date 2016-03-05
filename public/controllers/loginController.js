var loginApp = angular.module('loginApp', []);

loginApp.controller('loginCtrl', ['$scope', '$http', function($scope, $http) {

   	console.log("inside login controller");
    $scope.login = function() {
        console.log($scope.student);
        $http.post('/', $scope.student)
            .success(function(response) {
                sessionStorage.setItem('username', response.username);
                window.location = '../dashboard/dashboard.html';
            })
            .error(function(response) {
                alert("Incorrect username or password");
                console.log(response);
                $scope.student.username = "";
                $scope.student.password = "";
            });
    };
}]);