/**
 * Find a string within a string
 * Given two strings S1 & S2, search for an occurrence of the second string within a first string.  
 * Note: Do not use system library for the implementation. 
 * Input ("Code Zinger University","Zinger")  
 * where,
 * First line represents string S1. 
 * Second line represents string S2. 
 * Output: 5 
 * Here 'Zinger' word starts at 5th index within 'Code Zinger University’. 
 * Assume that, 
 * he length of strings S1 & S2 are within the range [1 to 10000].
 * Character comparisons will be case-sensitive.
 */

const findStr = (str1, str2) => {
    let l = str2.length
    let flag = true;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === str2[0]) {
            let newStr = ''
            for (let j = i; j < l + i; j++) {
                newStr += str1[j]
            }
            if (str2 === newStr) {
                flag = false;
                return i;
            }
        }

    }
    if (flag == true) {
        return -1
    }
}
// let a = "CodeZingeZinger"
// let b = "Zinger"
// console.log(findStr(a,b));
// console.log(findStr("Code Zinger University", "Zinger"));


/**
 * Array Balance
 * Given an unsorted array A, check whether the array is balanced. 
 * Display 1 if the array is balanced otherwise 0. 
 * Input (5, [1,1,1,2,1] )
 * Where, 
 * First line represents the size of an array. 
 * Second line represents array elements. 
 * Output: 1 
 * Here for the given array, the sum of first three elements 1 + 1 + 1 is 3 and last two elements 2 + 1 is 3. Hence the array is balanced. 
 */

const balancedArray = (arr) => {
    let sum = 0;
    let lSide = 0;
    let flag = false
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    for (let i = 0; i < arr.length; i++) {
        lSide += arr[i]
        let rSide = sum - lSide
        if (lSide === rSide) {
            flag = true
            return 1;
        }
    }
    if (flag === false) {
        return 0
    }
}

// console.log(balancedArray([1,2]));