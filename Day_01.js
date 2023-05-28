/**
 * Given an array of integers, find whether it is Palindromic or not. Display "Yes" if the array is palindromic otherwise display "No".
An array is Palindromic only when read in reverse order gives the same result as in normal order.
Input:(5,C)
where:
First line represents the number of elements in the array.
Second line represents the elements in the array.
Output: Yes
Explanation: Normal order reading of elements: 3 6 0 6 3
Reverse order reading of elements: 3 6 0 6 3, as both the orders are same, the array is Palindromic, hence the output "Yes".
 */
const checkP = (a, arr) => {
    let str = ''
    let strR = ''
    for (let i = 0; i < a; i++) {
        str += arr[i]
    }
    for (let i = a-1; i >= 0; i--) {
        strR += arr[i]
    }
    if (str === strR) {
        return "Yes"
    } else {
        return "No"
    }
}

console.log(checkP(5, [3, 6, 0, 6, 3]))