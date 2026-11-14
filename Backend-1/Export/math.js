// Addition
function add(a, b) {
    return a + b;
}

// Subtraction
function subtract(a, b) {
    return a - b;
}

// Multiplication
function multiply(a, b) {
    return a * b;
}

// Division
function divide(a, b) {
    return a / b;
}

// Export multiple functions as an object
module.exports = {
    add,
    subtract,
    multiply,
    divide
};
// module.exports exports an object containing four functions.