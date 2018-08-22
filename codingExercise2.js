// Write a function which counts how many unique values appear in a sorted
// array.
// Assumptions: You are allowed to mutate the original array

function uniqueVals(arr){
    if(arr.length === 0){
        return 0;
    }
    let i = 0;
    let j = 1;
    while(j < arr.length){
        if(arr[j] === arr[i]){
            j++;
        } else if(arr[j] > arr[i]){
            i++;
            arr[i] = arr[j];
            j++;
        }
    }
    return i + 1;
}
// this solution moves along the array using 2 pointers. The first, i,
// keeps track of the unique values, the second, j, moves each iteration
// and is used to compare for uniqueness.
// this solution is O(n). A nested array approach would be O(n^2)
