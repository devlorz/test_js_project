angular.module('users').controller('AuthController', [
    '$scope',
    '$http',
    '$state',
    function($scope) {
        $scope.signup = function(isValid) {
            if (isValid) {
                // alert('Ready to send signup request');
                $http.post('/signup', $scope.user)
                .success(function(response) {
                    $state.go('home');
                })
                .error(function(response) {
                    $scope.error = response.message;
                });

            }
        };

        $scope.login = function(isValid) {
            if (isValid) {
                // alert('Ready to send login request');
                $http.post('/login', $scope.user)
                .success(function(response) {
                    $state.go('home');
                })
                .error(function(response) {
                    $scope.error = response.message;
                });
            }
        };
    }
]);
