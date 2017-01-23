app.controller('regLoginController', [
'$scope','$http', 'userPersistenceService',
function($scope, userPersistenceService) {
    $scope.name = "regLogin";

    $scope.test = function() {
            //userPersistenceService.setCookieData();
            //$scope.temp = userPersistenceService.getCookieData();
            console.log($scope.userPersistenceService.userName);
            $scope.name = "fish";

            userPersistenceService.getCookieData()
            .then(function (response) {
                //$scope.customers = response.data;
                console.log(response.data);
            }, function (error) {
                //$scope.status = 'Unable to load customer data: ' + error.message;
            });
    }

}
]);
