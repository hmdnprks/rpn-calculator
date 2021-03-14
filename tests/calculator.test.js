const RPNCalculator = require('./../calculator');

describe('calculator.js', () => {
    const RPN = new RPNCalculator();

    test('should calculate a simple addition of 2 values', () => {
        let result = RPN.calculate('5 2 +');
        expect(result).toBe(7);
    });

    test('should calculate a simple subtraction of 2 values', () => {
        let result = RPN.calculate('20 10 -');
        expect(result).toBe(10);
    });

    test('should calculate a simple multiplication of 2 values', () => {
        let result = RPN.calculate('4 3 *');
        expect(result).toBe(12);
    });

    test('should calculate a simple division of 2 values', () => {
        let result = RPN.calculate('100 4 /');
        expect(result).toBe(25);
    });

    test('should calculate simple calculation (addition) with decimal value', () => {
        let result = RPN.calculate('2.3 4 +');
        expect(result).toBe(6.3);
    });

    test('should resulting equational calculation', () => {
        let result = RPN.calculate('2 3 ^');
        expect(result).toBe(8);
    });

    test('should calculate factorial', () => {
        let result = RPN.calculate('4 !');
        expect(result).toBe(24);
    });

    test('should calculate percentage', () => {
        let result = RPN.calculate('50 %');
        expect(result).toBe(0.5);
    });

    test('should has a greater number than the operator', () => {
        let result = RPN.calculate('5 +');
        expect(result).toBe('Not enough operand');
    });

    test('The operator must match the initialized one', () => {
        let result = RPN.calculate('5 )');
        expect(result).toBe('Not a valid input');
    });

    test('Calculate 1 2 3 + - = -4',  function() {
        expect(RPN.calculate('1 2 3 + -')).toBe(-4);
    });

    test('Calculate : 9 5 3 + 2 4 ^ - + 0.5 + = 1.5',  function() {
        expect(RPN.calculate('9 5 3 + 2 4 ^ - + 0.5 +')).toBe(1.5);
    });

    test('Calculate 9 5 3 + 2 4 ^ - + 4 + 2 ^ = 25',  function() {
        expect(RPN.calculate('9 5 3 + 2 4 ^ - + 4 + 2 ^')).toBe(25);
    });

    test('Calculate 9 5 3 + 2 4 ^ - + 4 + ! = 120',  function() {
        expect(RPN.calculate('9 5 3 + 2 4 ^ - + 4 + !')).toBe(120);
    });
});
