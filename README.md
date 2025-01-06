# Improper Error Handling in Arithmetic Operations

This repository demonstrates a common error in JavaScript: improper error handling. The `calculate` function handles invalid operators incorrectly; instead of throwing an error, it returns a simple string. This can lead to unexpected behavior and make debugging difficult.

## Bug Description

The primary issue lies within the `calculate` function. When an invalid operator is provided, the function merely returns the string "Invalid operator."  A more robust solution would be to throw a more descriptive error, allowing for better error handling and debugging.

## Solution

The solution involves modifying the `calculate` function to throw an error when an invalid operator is provided, which improves error handling and makes debugging easier.

## How to Run

1. Clone the repository.
2. Open `bug.js` to see the buggy code and `bugSolution.js` for the improved version. 
3. Run the files in a JavaScript environment (Node.js, browser's console, etc.).