// Write a function called sameFrequency. Given 2 positive integers, find out
// if the two numbers have the same frequency of digits.
// Your solution must have the following complexities:
// Time: O(N)

function sameFrequency(num1, num2){
  let num1str = num1.toString();
  let num2str = num2.toString();
  if(num1str.length !== num2str.length){
    return false;
  }
  let num1obj = {};
  for(let i = 0; i < num1str.length; i++){
    let num = parseInt(num1str.charAt(i));
    num1obj[num] = num1obj[num] + 1 || 1;
  }
  for(let i = 0; i < num2str.length; i++){
    let num = parseInt(num2str.charAt(i));
    if(num in num1obj && num1obj[num] !== 0){
      num1obj[num] = num1obj[num] - 1;
    } else {
      return false;
    }
  }
  return true;
}
