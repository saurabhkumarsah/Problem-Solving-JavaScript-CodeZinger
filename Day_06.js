/*  Question-1.   
        Find if the array has an element whose value is half of the sum of array
         Given a sorted array (with unique elements), find whether there exists an element(say X) which is exactly half of the sum of all the elements of the array including X. */

function sol(a, arr) {
    let sumOfEle = 0
    for (let i = 0; i < a; i++) {
        sumOfEle += arr[i]
    }
    if (a * 2 == sumOfEle) {
        return "YES"
    } else {
        return "NO"
    }
}
// console.log(sol(5,[3,5,7,11,13]))

/**
 * Question-2.
 *  Count the pairs in an array that hold A[i] + A[j] = i + j
    Given an array A of N integers, count all the pairs (A[i], A[j]) such that i + j = A[i] + A[j] for all 0 <= i < j < N.

    Explanation: Only possible pair is (A[4], A[5]) i.e. (5, 4) where i + j = A[i] + A[j] i.e. 4 + 5 = 5 + 4, hence the output 1.
    
    Input: (4,[1,0,3,2])
 */

let sol2 = (a, arr) => {
    let count = 0;
    for (let i = 0; i < a; i++) {
        for (let j = i + 1; j < a; j++) {
            let pairEle = arr[i] + arr[j]
            let indexPair = i + j
            if (pairEle == indexPair) {
                count += 1
            }
            // console.log(i,j)
        }
    }
    return count
}
// console.log(sol2(10,[8,4,2,1,5,4,2,1,2,3]))

/**
 * Question-3.
 * Replace every element of an array by its frequency
 * Given an array of integers, replace every element by its frequency in the array.
 * Explanation: In the array, the element 1 has occurred only once so it's frequency is 1. Element 2 has occurred thrice so its frequency is 3, and element 5 has occurred twice so its frequency is 2.
 * Input: (6,[1,2,5,2,2,5])
 */

const sol3 = (a, arr) => {
    let resArr = []
    let resStr = ''
    for (let i = 0; i < a; i++) {
        let count = 0
        for (let j = 0; j < a; j++) {
            if (arr[i] == arr[j]) {
                count += 1
            }
        }
        resArr.push(count)
        resStr += count + ' '
    }
    return (resArr)
}
// console.log(sol3(6, [1, 2, 5, 2, 2, 5]))

/**
 * Question-3.1
 * Check whether a string can become empty by repeatedly deleting a given sub-string
 * Given a string S1 and another string S2, find whether S1 can become empty by deleting S2 from S1 again and again. You are allowed to delete S2 from S1 any number of times.
 * Input: ("cocodede","code")
 */

const sol31 = (s1, s2) => {
    s1.split('')
    let str = s2.split('')
    let arr = []
    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (s1[i] == str[j]) {
                arr.push(str[j])
            }
        }
    }
    let resStr1 = arr.sort().join("")
    let resStr2 = str.sort().join("")
    if (resStr1 == resStr2) {
        return "Yes"
    } else {
        return "No"
    }
}
console.log(sol31("code", "cocodede"))


/**
 * Smallest element in array greater than or equal to K
 * Given an array of integers and a number K, find the smallest element in array greater than or equal to K. If such element exists in the array, display it otherwise display "-1".
 * Explanation: Smallest integer in the array greater than or equal to K=5 is 7.
 * Input:(8,[1,3,4,7,8,9,9,10],5)
 */

const sol4 = (a, arr, k) => {
    arr.sort((a, b) => a - b)
    let flag = false;
    for (let i = 0; i < a; i++) {
        if (arr[i] >= k) {
            flag = true;
            return arr[i];
        }
    }
    if (flag == false) {
        return -1
    }
}
// console.log(sol4(8,[1,3,4,7,8,9,9,10],5))