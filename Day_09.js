/**
 * Check whether a string is Isogram or not
 * Given a string S, find whether it is Isogram or not.
 * Input:("Machine")
 * where:
 * First line represents string S.
 * Output: Yes
 * Explanation: "Machine" does not have any character repeating, it is an Isogram
 */

const isIsogram = (S) => {
    let flag = false
    let str = S.split('')
    for(let i=0; i<str.lenght-1; i++){
        for(let j=i+1; j<str.lenght; j++){
            if(str[i] == str[j]){
                flag = true;
                break;
            }
        }
    }
    if(flag == true){
        return "Yes"
    } else{
        return "No"
    }
}
// console.log(isIsogram("hello"));

/**
 * Display all the leap years in a specific range
 * Given a year N, display all the leap years from 1 to N.
 * Input: (50)
 * where:
 * First line represents the value of N.
 * Output: 4 8 12 16 20 24 28 32 36 40 44 48
 * Assumptions:  N can be in the range 0 to 3000.
 */

const isLeepYear = (n) => {
    let str = []
    for(let i=4; i<=n; i=i+4) {
        str.push(i)
    }
    for(let i=0; i<=arr.lenght; i++) {
        if(str[i] == 100 || str[i] == 200 || str[i] == 300){
            str.splice(i,1)
        }
    }
    return str.join(' ');
}
// console.log(isLeepYear(50));

/**
 * Number of substrings divisible by 6
 * Given a string S consisting of integers 0 to 9, find the number of substrings which are divisible by 6. Substring does not contain leading zeroes
 * Input: ("606") 
 * where: First line represents input string S.
 * Output: 5
 * Explanation: Substrings "6", "0", "6", "60", "606" are divisible by 6.
 * Input: 4806 
 * Output:  5
 * Explanation: Substrings "0", "6", "48", "480", "4806" are divisible by 6.
 */
const sol = (str) => {
    let arr = str.split("")
    let newArr = []
    let count = 0
    for(let i=0;i<arr.length;i++) {
        let temp = 0
        for(let j=i; j<arr.length;j++) {
            temp += arr[j]
            newArr.push(+temp)
        }
    }
    console.log(newArr);
    for(let i=0; i<newArr.length; i++ ) {
        if(newArr[i]%6 === 0){
            count++
        }
    }
    return count-1
}
// console.log(sol("4806"));
