function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers'); // Throw error for non-numbers
  }
  return a + b; // Correct addition
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: null
console.log(foo('1', 2)); // Throws Error: 'Inputs must be numbers'
console.log(foo(1, '2')); // Throws Error: 'Inputs must be numbers' 