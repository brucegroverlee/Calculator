angular.module('starter.services', [])

.service('calculatorService', [function () {
  function operate (operation, number1, number2) {
    if (operation === 'addition') {
      return (number1 + number2)
    }
    if (operation === 'subtraction') {
      return (number1 - number2)
    }
    if (operation === 'multiplication') {
      return (number1 * number2)
    }
    if (operation === 'division') {
      return (number1 / number2)
    }
  }

  return {
    operate: operate
  }
}])