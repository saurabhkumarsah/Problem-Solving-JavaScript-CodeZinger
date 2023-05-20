/**
 * Reverse string according to number of words
 * Given a string S containing a number of words. If the count of words in the string S is even then reverse its even position’s words else reverse its odd position, push reversed words at the starting of a new string and append the remaining words as it is in order.
 * Input: Ashish Yadav Abhishek Rajput Sunil Pundir
 * Output: ridnuP tupjaR vadaY Ashish Abhishek Sunil
 */

const reverseString = (s) => {
    let str = s.split(' ')
    let resArr = []
    let res = ''
    if (str.length % 2 == 0) {
        for (let i = 0; i < str.length; i++) {
            if (i % 2 != 0) {
                let word = str[i]
                let reverseWord = ''
                for (let j = word.length - 1; j >= 0; j--) {
                    reverseWord += word[j]
                }
                resArr.unshift(reverseWord)
            } else {
                resArr.push(str[i])
            }
        }
    }
    else {
        for (let i = 0; i < str.length; i++) {
            if (i % 2 == 0) {
                let word = str[i]
                let reverseWord = ''
                for (let j = word.length - 1; j >= 0; j--) {
                    reverseWord += word[j]
                }
                resArr.unshift(reverseWord)
            } else {
                resArr.push(str[i])
            }
        }
    }

    return resArr.join(" ")
}

// console.log(reverseString("Ashish Yadav Abhishek Rajput Sunil Pundir"))

/**
 * Count occurrences of word in a given string
 * Given a string S and a word W, count the number of times the given word appears in the string.
 * Input: (Hello World Hello, Hello)   
 * where:
 *      First line represents the input string S
 *      Second line represents the word to be searched W
 * Output: 2
 */


/**
 * Remove duplicate characters
 * Given a string S, remove the repeated characters in the string
 * Input: ("Hello World")
 * where: First line represents the input string
 * Output: "Helo Wrd"
 */
const rem = (str) => {
    let arr = str.split('')
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] == arr[j]){
                arr.splice(j,1)
            }
        }
    }
    console.log(arr.join(''));
}
// rem("Hello World")

/**
 * Check whether strings are rotation of each other
 * Given two strings S1 & S2, write a program to say whether S2 is a rotation of S1.
 * e.g. string S2=CDAB is a rotation of string S1=ABCD, whereas string S2=ACBD is not a rotation of string S1=ABCD
 * Input: ("ABCD" "CDAB")
 * where, First line represents string S1. , Second line represents string S2. 
 * 
 * Output: Yes
 * Input: ("ABCD" "CBDA")
 * Output: No
 */

const rotateString = (S1,S2) => {
    let arr = S1.split('')
    let flag = false;
    for(let i=0; i<arr.length; i++ ) {
        let temp = arr.pop()
        arr.unshift(temp)
        if(arr.join('') == S2){
            flag = true
            break;
        }
    }
    if(flag == true){
        return "Yes"
    } else{
        return "No"
    }
}
// console.log(rotateString("ABCD","DAB"))