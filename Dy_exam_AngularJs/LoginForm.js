var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope)
{
    $scope.showMe = false;
    $scope.addContact = function() {
            if ($scope.newContact.email == ''){
                $scope.showMe = true;
            } else {
                $scope.newContact={};
                $scope.showMe = false;            
                alert('Logged in successfully')
            }
    }
});

