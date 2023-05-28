/**
 * Given an array of N integers, find the largest gap between any two elements of the array.
 * In simple words, find max(|Ai-Aj|) where 0 ≤ i < N and 0 ≤ j < N.
 * Input:  (4,  [4,3,6,7,10]) 
 * where:
 * First line represents the number of elements in the array.
 * Second line represents the elements in the array.
 * Output:   7
 * Explanation: Here, the largest gap can be found between 3 and 10 which is 10 - 3 = 7, hence the output 7.
 * Assumptions: Array element can be in the range -1000 to 1000.
 */
const largestGap = (a, arr) => {
    let array = []
    for (let i = 0; i < a; i++) {
        for (let j = i + 1; j < a; j++) {
            let diff = arr[j] - arr[i]
            array.push(diff)
        }
    }
    return Math.max(...array)
}
// console.log(largestGap(5,[4,3,6,7,10]));


/**
 * Rotate an array to right side
 * Tags:	Array
 * Given an array of integers, write a program to rotate the array to the right side K times.
 * Input: (10, [10,20,30,40,50,60,70,80,90,100],3 )
 * where:
 * First line represents the number of elements in the array.
 * Second line represents the elements in the array.
 * Third line represents the value of K( Number of times to rotate the array to right side )
 * Output: [80,90,100,10,20,30,40,50,60,70]
 * Explanation: Output displays the array after rotating K=3 times to the right side.
 */
const rotate = (arr, k) => {
    let array = arr
    for (let i = 0; i < k; i++) {
        let temp = array.pop()
        array.unshift(temp)
    }
    return array
}
// console.log(rotate([10,20,30,40,50,60,70,80,90,100],3));



/**
 * Copy elements of one array into another
 * Tags:	Array
 * Given an array of integers, copy elements of one array into another array of the same size.
 * Input: ( 3, [1,2,3])
 * where:
 * First line represents the number of elements in the array.
 * Second line represents the elements in the array.
 * Output: [1,2,3]
 * 
 */
const deepCopy = (length, array) => {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i])
    }
    return newArray
}

console.log(deepCopy([1, 2, 3, 4, 5]));