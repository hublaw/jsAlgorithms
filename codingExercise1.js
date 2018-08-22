// Write a function given 2 strings which tests if the second string is an anagram of the first.
// Assumptions: strings will always be alpha and lower case, with no punctuation
function validAnagram(str1, str2){
    if (str1.length !== str2.length){
        console.log("different lengths!")
        return false;
    }
    let letterCompare1 = {};
    let letterCompare2 = {};
    // create first object
    for(i = 0; i < str1.length; i++){
        letterCompare1[str1[i]] = (letterCompare1[str1[i]] || 0) + 1
    }
    // create second object
        for(i = 0; i < str2.length; i++){
        letterCompare2[str2[i]] = (letterCompare2[str2[i]] || 0) + 1
    }
    // compare both objects
    for (key in letterCompare1){
        if(!(key in letterCompare2)){
            console.log("letter doesnt exist")
            return false;
        }
        if(letterCompare1[key] !== letterCompare2[key]){
            console.log("frequency doesnt match")
            return false;
        }
    }
    return true;
}
