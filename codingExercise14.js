// Write a function called recursiveRange which accepts a number and returns the
// sum of numbers from zero to that number

function recursiveRange(num){
  if(num === 1) return 1;
  return num + recursiveRange(--num);
}
