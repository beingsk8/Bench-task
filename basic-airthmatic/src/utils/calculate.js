const calculator = (num1, num2, calculate, callback) => {
    if (calculate === "add") {
        callback(undefined, `Addition  ${num1} and ${num2} is :  ${num1 + num2}`);
    } else if(calculate === "subtract") {
        callback(undefined, `Subtraction of ${num1} and ${num2} is :  ${num1 - num2}`);
    } else if (calculate === "divide") {
        callback(undefined, `Division of ${num1} and ${num2} is :  ${num1/num2}`);
    } else if(calculate === "multiply") {
        callback(undefined, `Multiplication of ${num1} and ${num2} is :  ${num1*num2}`);
    } else {
        callback(`Cant'calculate ${calculate}`)
    }
}

module.exports = calculator;