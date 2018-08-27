// Write a function called binarySearch which acccepts a sorted array and a value,
// and returns the index at which the value exists. If the value doesn't exist
// in the array, return -1. This algorithm should be more efficient than linearSearch

function binarySearch(sortedArr, val){
    let left = 0;
    let right = sortedArr.length - 1;
    while (left < right){
        let centre = Math.floor(left + ((right - left) / 2));
        console.log(left, centre, right);
        if (sortedArr[centre] === val) return centre;
        if (sortedArr[left] === val) return left;
        if (sortedArr[right] === val) return right;
        if (sortedArr[centre] > val){
            right = centre - 1;
        } else {
            left = centre + 1;
        }
    }
    return -1;
}

// This solution is O(log n)
