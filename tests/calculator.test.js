const calculator = require('./../calculator');

describe('calculator.js', () => {

    test('should calculate a simple addition of 2 values', () => {
        let result = calculator('5 2 +');
        expect(result).toBe(7);
    });

    test('should calculate a simple subtraction of 2 values', () => {
        let result = calculator('20 10 -');
        expect(result).toBe(10);
    });

    test('should calculate a simple multiplication of 2 values', () => {
        let result = calculator('4 3 *');
        expect(result).toBe(12);
    });

    test('should calculate a simple division of 2 values', () => {
        let result = calculator('100 4 /');
        expect(result).toBe(25);
    });

    test('should calculate simple calculation (addition) with decimal value', () => {
        let result = calculator('2.3 4 +');
        expect(result).toBe(6.3);
    });

    test('should resulting equational calculation', () => {
        let result = calculator('2 3 ^');
        expect(result).toBe(8);
    });

    test('should calculate factorial', () => {
        let result = calculator('4 !');
        expect(result).toBe(24);
    });

    test('should calculate percentage', () => {
        let result = calculator('50 %');
        expect(result).toBe(0.5);
    });
});
