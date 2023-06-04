// Solve the Sum array puzzle and print the Sum array
// Given an array A of N integers, construct a Sum Array S(of same size) such that S[i] is equal to the sum of all the elements of A except A[i].
//     Input: (5, [3,6,4,8,9])
// where:
// First line represents the number of elements in the array
// Second line represents elements in the array.
// Output: 27 24 26 22 21
// Explanation: Output displays the resultant array S in which for each element in the original array A we have displayed it with the sum of all the elements except itself.
// Example: for element 3 we write 6 + 4 + 8 + 9 = 27 and so on.


const solution = (arr) => {
    let newArr = []
    let sum = arr.reduce((a,b) => a+b)
    for(let i=0; i<arr.length; i++ ) {
        let temp = sum - arr[i]
        newArr.push(temp)
    }
    return newArr
}
// console.log(solution([3,6,4,8,9]))



// Count substrings with same first and last characters
// Given a string S, find the count of all substrings starting and ending with the same character.
//     Input:

// abcab
// where:
// First line represents input string S.
//     Output:
// 7
// Explanation:
// There are 15 substrings of  abcab: a, ab, abc, abca, abcab, b, bc, bca, bcab, c, ca, cab, a, ab, b.
// Out of the above substrings, there are 7 substrings: a, abca, b, bcab, c, a and b starting and ending with the same character.
//     Assumptions:
// Character comparisons will be case -sensitive.

const sol= (str) => {
    let s = str.split('')
    let count = 0
    let arr = []
    for(let i=0; i<s.length; i++) {
        let sub = ''
        for(let j=i; j<s.length; j++) {
            sub += s[j]
            arr.push(sub)
        }
    }
    for(let i=0; i<arr.length; i++ ) {
        let ele = arr[i]
        if(ele[0] === ele[ele.length-1]) {
            count++
        }
    }
    return count
}
// console.log(sol("abcab"));