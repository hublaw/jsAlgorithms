// Write a function factorial which accepts a number and returns the factorial
// of that number.
function factorial(num) {
  if(num === 0) return 1;
  return num * factorial(--num);
}

// this is a recursive solution. Iterative solution is a simple loop
