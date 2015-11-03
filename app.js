var app = angular.module('formExample', []);
  
  app.controller('ExampleController', ['$scope', function($scope) {
    this.master = {};

    this.update = function(user) {
      this.master = angular.copy(user);
    };

    this.reset = function() {
      $scope.user = {};
    };

    this.reset();
  }]);

  

