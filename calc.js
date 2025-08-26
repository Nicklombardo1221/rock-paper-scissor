

class Calculator {
    calculate(str) {
        let [a, operator, b] = str.split(' ');
        a = +a;
        b = +b;
        switch (operator) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
            default:
                return NaN; // or throw an error
        }
    }
}


let calc = new Calculator;
console.log( calc.calculate("3 + 7") ); // 10
console.log( calc.calculate("3 - 7") ); // -4
console.log( calc.calculate("3 * 7") ); // 21
console.log( calc.calculate("3 / 7") ); // 0.42857142857142855