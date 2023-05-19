var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope)
{
    $scope.contacts = [
        {
            id : 0,
            name: 'Pham Dy',
            password: '123',
            repeatPassword: '123',
            email: 'phamdacdy@gmail.com'
        }
    ];
    // Add new contact
    $scope.addContact = function() {
            if ($scope.newContact.password == $scope.newContact.confirmPassword){
                $scope.contacts.push($scope.newContact);
                $scope.myForm.$setPristine();
                alert("Successfully added");
            } 
            
    }

    
});

