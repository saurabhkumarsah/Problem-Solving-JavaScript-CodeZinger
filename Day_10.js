/**
 * Check whether a string is suffix of another
 * Given two strings S1 and S2, check whether S1 is a suffix of S2 i.e. check whether string S2 ends with string S1.
 * Input: ("code", "coderscode")
 * where: First line represents string S1., Second line represents string S2.
 * Output: Yes
 */
const check = (s1,s2) => {
    let l = s2.length - s1.length
    let str = []
    for(let i=s2.length-1; i<s2.length && i>=l; i-- ){
        str.unshift(s2[i])
    }
    let w = str.join('')
    if(s1 == w) {
        return "Yes"
    } else {
        return "No"
    }
}
// console.log(check("world", "my first code is hello world"));


/**
 * Find length of string without using inbuilt string method
 * Given a string S, find the length of S without using an inbuilt string method. 
 * Input ("Codezinger University") 
 * Output  21 
 * Assume that, The length of string S is within the range [0 to 10000].
 */
function lengthOfString(s){
    let element, count = 0;
    for (element of s) {
        count++
    }
    return count
}
// console.log(lengthOfString("StirngOfLength"));


/**
 * Remove all occurrences of word
 * Given a string S and a word W, remove all the occurrences of the word W in the input string S.
 * Input: ("hello world hello", "hello")
 * where: First line represents the input string S,Second line represents the word to be removed W.
 * Output: ("world")
 * Explanation: String after removing all occurrences of hello becomes " world ".
 */
const removeWordFromString = (string, word) => {
    return string.replaceAll(word, " ")
}
// console.log(removeWordFromString("hello world hello", "hello"));