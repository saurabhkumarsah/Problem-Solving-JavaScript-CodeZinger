/**
 * Reverse an array
 * Given an array of integers A, reverse the array.
 * Input (5, [9,0,2,1,8])
 * Where, 
 * The first line represents the size of an array. 
 * The second line represents array elements separated by single space.
 * Output [8,1,2,0,9]
 */

const reversedArr = (arr) => {
    let newArr = []
    for(let i=arr.length-1; i>=0; i--) {
        newArr.push(arr[i])
    }
    return newArr
}
console.log(reversedArr([1,2,3,4,5]));


/**
 * Check if string is Palindrome
 * Given a string S, check whether a string S is Palindrome not. 
 * Display 1 if string is palindrome else 0. 
 * Input: (l"evel") 
 * Output: 1 
 * Assume that, 
 * The length of string S is within the range [0 to 10000].
 */

const isPalindrome = (str) => {
    let newStr = []
    for(let i=str.length-1; i>=0; i-- ) {
        newStr += str[i]
    }
    if (str === newStr) {
        return 1
    } else {
        return 0
    }
}

console.log(isPalindrome("level"));