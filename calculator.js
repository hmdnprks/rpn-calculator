const operators = require("./utils/operators");

class RPNCalculator {
  constructor(){
      this.stacks = [];
  }

  calculate(expression) {
    if (expression.length < 1) {
      return 0;
    }

    let input = expression.split(" ");
    try {
      input.forEach((unit) => {
        this.checkInput(unit)
      });
      return this.stacks.pop();
    } catch (e) {
      return e;
    }
  }

  checkInput(input){
    this.checkNotValidInput(input);
    if (this.isValidNumber(input)) {
      this.stacks.push(parseFloat(input));
    } else {
        this.doOperation(input);
    }
  }

  doOperation(input){
    let operandCount = operators[input].length;
    if (this.stacks.length >= operandCount) {
      let operands = [];
      for (let x = 0; x < operandCount; x++) {
        operands.push(this.stacks.pop());
      }
      this.stacks.push(operators[input].apply(null, operands.reverse()));
    } else {
      throw "Not enough operand";
    }
  }

  isValidNumber(input){
    return !isNaN(parseFloat(input));
  }

  checkNotValidInput(input){
    if (!this.isValidNumber(input) && Object.keys(operators).indexOf(input) < 0) {
      throw "Not a valid input";
    }
  }
}

module.exports = RPNCalculator;
