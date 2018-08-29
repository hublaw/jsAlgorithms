// Write a function called product of array which accepts anarray of numbers and
// returns the product of them all.

function productOfArray(arr){
  if(arr.length === 0) return 0;
  if(arr.length === 1) return arr[0];
  return arr[0] * productOfArray(arr.slice(1));
}
