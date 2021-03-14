const calculator = (expression) => {
    const operators = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '*': (x, y) => x * y,
        '/': (x, y) => x / y,
        '^': (x, y) => Math.pow(x, y),
        '!': (x) => factorial(x),
        '%': (x) => percentage(x),
    };

    if (expression.length < 1) {
        return 0;
    }

    let input = expression.split(' ');
    let stacks = [];
    try {
        input.forEach((unit) => {
            if (!isNaN(parseFloat(unit))) {
                stacks.push(parseFloat(unit));
            } else if (isNaN(parseFloat(unit)) && Object.keys(operators).indexOf(unit) >= 0) {
                let operandCount = operators[unit].length;
                if(stacks.length >= operandCount) {
                    let operands = [];
                    for (let x=0; x < operandCount; x++) {
                        operands.push(stacks.pop());
                    }
                    stacks.push(operators[unit].apply(null, operands.reverse()));
                } else {
                    throw "Not enough operand"
                }
            } else {
                throw "Not a valid input"
            }
        });

        return stacks.pop();
    } catch (e) {
        return e;
    }

};

const factorial = num =>  {
    if (num === 0)
    { return 1 }
    return num * factorial(num-1);
}

const percentage = num =>  {
    return num / 100;
}

module.exports = calculator;