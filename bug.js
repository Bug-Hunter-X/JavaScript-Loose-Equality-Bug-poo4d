function foo(a, b) {
  if (a == null || b == null) {
    return null; // Handle null or undefined values
  }
  return a + b; 
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: null
console.log(foo(1, undefined)); // Output: null
console.log(foo(NaN, 2)); //Output: NaN