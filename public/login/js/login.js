var myApp = angular.module('login', []);

myApp.controller('loginCtrl', ['$scope', '$http', function($scope, $http) {

   	console.log("inside login controller");

    $scope.login = function() {
        //console.log($scope.hostel);
        $http.post('/', $scope.hostel).
            success(function(response) {
                //console.log("inside Login function.");
                //console.log(response);
                window.location="../../dashboard/dashboard.html";
            }).
            error(function(response) {
                alert("Incorrect username or password");
                console.log(response);
                $scope.hostel.username = "";
                $scope.hostel.password = "";
            });
    };
}]);