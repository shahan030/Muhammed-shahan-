// Simple Calculator class
class Calculator {
    constructor(a, b, operation) {
        this.a = parseFloat(a);
        this.b = parseFloat(b);
        this.operation = operation;
    }

    calculate() {
        if (isNaN(this.a) || isNaN(this.b)) {
            return "Error";
        }

        switch (this.operation) {
            case '+':
                return this.a + this.b;
            case '-':
                return this.a - this.b;
            case '*':
                return this.a * this.b;
            case '/':
                return this.b !== 0 ? this.a / this.b : "Error";
            default:
                return "Invalid";
        }
    }
}


const display = document.querySelector('input[name="display"]');
const buttons = document.querySelectorAll('input[type="button"]');

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.value;

        if (value === "") return;

        if (value === "AC") {
            expression = "";
            display.value = "";
        } else if (value === "DE") {
            expression = expression.slice(0, -1);
            display.value = expression;
        } else if (value === "=") {
            const operator = expression.match(/[+\-*/]/);
            if (operator) {
                const [a, b] = expression.split(operator[0]);
                const calc = new Calculator(a, b, operator[0]);
                const result = calc.calculate();
                display.value = result;
                expression = result.toString();
            } else {
                display.value = "Invalid";
            }
        } else {
            expression += value;
            display.value = expression;
        }
    });
});
