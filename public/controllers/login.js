var mainApp = angular.module('mainApp', ['ngRoute']);

mainApp.controller('loginCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {

   	console.log("inside login controller");
    $scope.login = function() {
      var flag = false;
        $http.post('/', $scope.student).
            success(function(response) {
                sessionStorage.setItem('username', response.username);
                window.location = '../dashboard/dashboard.html';
            }).
            error(function(response) {
                alert("Incorrect username or password");
                console.log(response);
                $scope.student.username = "";
                $scope.student.password = "";
            });
    };
}]);

var dashboardApp = angular.module('dashboardApp', []);

dashboardApp.controller('dashboardCtrl', ['$scope', '$http', function($scope, $http) {

    console.log("inside dashboard controller");
    var username = sessionStorage.getItem('username');
    console.log(username);
}]);