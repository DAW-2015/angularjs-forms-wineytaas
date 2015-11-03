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

  app.directive('validaCpf', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.validaCpf = function(modelValue, viewValue) {
        strCPF = viewValue;
        var Soma;
        var Resto;
        Soma = 0;
        if (strCPF == "00000000000") return false;
        for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
          Resto = (Soma * 10) % 11;
        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
        Soma = 0;
        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
          Resto = (Soma * 10) % 11;
        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
        return true;
      };
    }
  };
});

