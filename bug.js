function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  return a + b; // Potential error if a or b are not numbers
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: null
console.log(foo('1', 2)); // Output: 12 (Type coercion)
console.log(foo(1, '2')); // Output: 12 (Type coercion)