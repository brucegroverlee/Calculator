angular.module('starter.controllers', [])

.controller('calculatorCtrl', ['$scope', 'calculatorService', function ($scope, calculatorService) {
  $scope.number1 = 0
  $scope.number2 = 0
  $scope.numberDisplay = 0
  //addition, subtraction, multiplication or division
  $scope.operator = ''

  $scope.addDigit = function (digit) {
    $scope.numberDisplay = ($scope.numberDisplay * 10) + digit
  }

  $scope.clearDisplay = function () {
    $scope.numberDisplay = 0
  }

  $scope.addOperator = function (operator) {
    if (operator === 'addition') {
      $scope.operator = 'addition'
      $scope.number1 = $scope.numberDisplay
      $scope.numberDisplay = 0
    }
    
    if (operator === 'subtraction') {
      $scope.operator = 'subtraction'
      $scope.number1 = $scope.numberDisplay
      $scope.numberDisplay = 0
    }
    
    if (operator === 'multiplication') {
      $scope.operator = 'multiplication'
      $scope.number1 = $scope.numberDisplay
      $scope.numberDisplay = 0
    }
    
    if (operator === 'division') {
      $scope.operator = 'division'
      $scope.number1 = $scope.numberDisplay
      $scope.numberDisplay = 0
    }

  }

  $scope.operate = function () {
    $scope.number2 = $scope.numberDisplay
    $scope.numberDisplay = calculatorService.operate($scope.operator, $scope.number1, $scope.number2)
  }
}])