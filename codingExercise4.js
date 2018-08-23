// Implement a function called areThereDuplicates, which accepts a variable number of
// arguments and checks whether there are any duplicates among the arguments passed in
// Restrictions:
// Time - O(N)
// Space - O(N)

function areThereDuplicates(){
    if(arguments.length === 0){
        return false;
    }
    let lookup = {};
    for(let i = 0; i < arguments.length; i++){
        let argument = arguments[i];
        if(argument in lookup){
            return true;
        } else {
            lookup[argument] = argument;
        }
  }
  return false;
}

// one liner solution:
// function areThereDuplicates(){
//   return new Set(arguments).size !== arguments.length;    
// }
