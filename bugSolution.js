function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

const operations = {
  '+': add,
  '-': subtract,
  '*': multiply,
  '/': divide
};

function calculate(op, a, b) {
  if (!operations[op]) {
    throw new Error(`Invalid operator: ${op}`);
  }
  return operations[op](a, b);
}

// Example usage
console.log(calculate('+', 5, 3)); // Output: 8
console.log(calculate('-', 10, 4)); // Output: 6
console.log(calculate('*', 7, 2)); // Output: 14
console.log(calculate('/', 20, 5)); // Output: 4

// Example with invalid operator
try {
  console.log(calculate('%', 10, 2)); 
} catch (error) {
  console.error(error.message); // Output: Invalid operator: %
}

//Example with division by zero
try {
  console.log(calculate('/', 10, 0));
} catch (error) {
  console.error(error.message); // Output: Cannot divide by zero
}