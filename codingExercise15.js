// Write a recursive function called reverse which accepts a string and returns
// it's reverse

function reverse(str){
  if(str.length === 1) return str;
  var first = str.charAt(0);
  str = str.substr(1, str.length -1);
  return reverse(str) + first;
}
