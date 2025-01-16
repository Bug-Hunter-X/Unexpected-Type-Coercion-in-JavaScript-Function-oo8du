# Unexpected Type Coercion in JavaScript

This repository demonstrates a common error in JavaScript: unexpected type coercion.  The `foo` function intends to add two numbers, but due to JavaScript's loose typing, it performs string concatenation if provided with string arguments.

## Bug
The `bug.js` file contains the function with the type coercion issue.  The issue is that when non-numeric values are passed, instead of throwing an error or returning a meaningful result, it performs string concatenation.

## Solution
The `bugSolution.js` file shows how to improve the function using strict type checking and error handling to prevent unexpected results.

## How to Run
1. Clone the repository
2. Open `bug.js` and `bugSolution.js` in your preferred code editor.
3. Execute each file using Node.js (or your preferred JavaScript runtime) to observe the different behaviors.