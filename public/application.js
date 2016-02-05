'use strict';

var mainAppModule = angular.module('Hello',[]);

// var NameController = function($scope, $http) {
//   $scope.yourName = 'No Name';
//   var users_json = $http.get('/user');
// };
// NameController.$inject = ['$scope', '$http'];
// mainAppModule.controller('NameController', NameController);

mainAppModule.controller('NameController', ['$scope', '$http', function($scope, $http) {
  $scope.yourName = 'No Name';
  var users_json = $http.get('/user');
}]);

mainAppModule.filter('sayHello', function() {
  return function(name) {
    return 'Hello, ' + name;
  };
});