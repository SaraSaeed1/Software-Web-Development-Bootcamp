/*
  Given two strings,
  return true if the first string can be built from the letters in the 2nd string
  Ignore case
  .indexOf will only tell you if the letter is found one time // not true: The indexOf() method returns the position of the first occurrence of a specified value in a string
*/

const strA1 = "Hello World";
const strB1 = "lloeh wordl";
const expected1 = true;

const strA2 = "Hey";
const strB2 = "hello";
const expected2 = false;
// Explanation: second string is missing a "y"

const strA3 = "hello";
const strB3 = "helo";
const expected3 = false;
// Explanation: second string doesn't have enough "l" letters

const strA4 = "hello";
const strB4 = "lllheo";
const expected4 = true;

const strA5 = "hello";
const strB5 = "heloxyz";
const expected5 = false;
// Explanation: not strB5 does not have enough "l" chars.

function addArr(s1){
    arr=[];
    for(i=0; i<s1.length; i++){
        arr.push(s1[i])
    }
    return arr
}

function canBuildS1FromS2(s1, s2) {
    s1= s1.toUpperCase();
    s2= s2.toUpperCase();
    var arr1= addArr(s1)
    var arr2= addArr(s2)


    var count=0;
    if(arr2.length >= arr1.length){
        for(var i=0 ; i<arr1.length; i++){
            for(var j=0 ; j<arr2.length ; j++){
                if(arr1[i]== arr2[j]){
                    count++
                    arr2.splice(j,1);
                    break;
                }
            }
        }
        if(count==arr1.length){
            return true
        }else{
            return false;
        }
    }else{
        return false;
    }
}
console.log("----------------------")
console.log(strA1)
console.log(strB1)
console.log(canBuildS1FromS2(strA1,strB1))
console.log("----------------------")
console.log(strA2)
console.log(strB3)
console.log(canBuildS1FromS2(strA2,strB2))
console.log("----------------------")
console.log(strA3)
console.log(strB3)
console.log(canBuildS1FromS2(strA3,strB3))
console.log("----------------------")
console.log(strA4)
console.log(strB4)
console.log(canBuildS1FromS2(strA4,strB4))
console.log("----------------------")
console.log(strA5)
console.log(strB5)
console.log(canBuildS1FromS2(strA5,strB5))
/*****************************************************************************/

/*
  Given a string, find the length of the longest substring without repeating characters.
*/
const str1 = "abcabcbb";
// const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.

const str2 = "bbbbb";
// const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

const str3 = "pwwkew";
// const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3.
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const str4 = "dvadf";
// const expected4 = 4;
// Explanation: "vadf"

function lengthOfLongestSubString(str) {
  //   code here
}