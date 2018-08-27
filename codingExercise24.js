// Write a function called linearSearch which acccepts an array and a value,
// and returns the index at which the value exists. If the value doesn't exist
// in the array, return -1.
// Don't use indexOf to implement this function

function linearSearch(arr, val){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val) return i;
    }
    return -1;
}
