// /**
//  * Question 1.
//  * 
//  * Count number of distinct pairs in the array whose sum exists in the given array
//  * Given an array A of N positive integers, find the number of distinct pairs (A[i], A[j]) whose sum exists in the given array for all 0 <= i < j < N.
//  * Note: While repeating pairs will not be counted again. And we can't make a pair using the same elements again. Eg : (2, 1) and (1, 2) will be considered as only one pair. 
//  * Input: (7, [1,5,6,4,-1,5,10])
//  * Explanation: Here there are 6 pairs: (1 + 5) = 6, (1 + 4) = 5, (5 + -1) = 4, (5 + 5)=10,(6 + 4)=10, (6 + -1) = 5.
// [ [ -1, 5 ], [ -1, 6 ], [ 1, 4 ], [ 1, 5 ], [ 4, 6 ] ]
//     Here (1 + 5) comes twice will be considered as only one pair.
//     Also (-1 + 5) is not distinct as (5 + -1) has occurred, hence considered one pair.
//  */

function sol1(a, arr) {
    arr.sort((a, b) => a - b)
    let array = []
    let resArr = []
    for (let i = 0; i < a; i++) {
        for (let j = i + 1; j < a; j++) {
            for (let k = 0; k < a; k++) {
                if (arr[i] + arr[j] == arr[k]) {
                    array.push(`${arr[i]}${arr[j]}`)
                }
            }
        }
    }
    array.sort((a, b) => a - b)
    for (let i = 0; i < array.length; i++) {
        if (array[i] != array[i + 1]) {
            resArr.push(array[i])
        }
    }
    return resArr.length
}
console.log(sol1(7, [1, 5, 6, 4, -1, 5, 10]));


/**
 * Question 1.
 * Check whether a string can become empty by repeatedly deleting a given sub-string
 * Given a string S1 and another string S2, find whether S1 can become empty by deleting S2 from S1 again and again. You are allowed to delete S2 from S1 any number of times.
 * Explanation: In the string S1= "cocodede", we can first delete the substring "code". S1 now becomes "code". We can again delete sub-string "code". Now the string S1 becomes empty.
 * Input:("code","cocodede") --> Yes
 * Input:("code","cocodeed") --> Yes
 * Input:("how","hohohowwwhow") --> Yes
 * Input:("code","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") --> No
 */



function sol2(s1, s2) {
    let str1 = s1.split('')
    let str2 = s2.split('')
    str2.sort()
    let arr = []
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] == str2[j]) {
                arr.push(str2[j])
            }
        }
    }
    arr.sort()
    if (str2.join('') == arr.join('')) {
        return "yes"
    } else {
        return "No"

    }
}
console.log(sol2("how","hohohowwwhow"))