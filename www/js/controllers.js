angular.module('starter.controllers', [])

.controller('calculatorCtrl', ['$scope', function ($scope) {
  $scope.number1 = 0
  $scope.number2 = 0
  $scope.numberDisplay = 0
  //addition, subtraction, multiplication or division

  $scope.addDigit = function (digit) {
    $scope.numberDisplay = ($scope.numberDisplay * 10) + digit
  }

  $scope.clearDisplay = function () {
  	$scope.numberDisplay = 0
  }
}])