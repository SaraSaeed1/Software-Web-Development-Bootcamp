// Theme: Strings & Objects

/*
  Given an array of strings
  return a sum to represent how many times each array item is found (a frequency table)
  Useful methods:
    Object.hasOwnProperty("keyName")
      - returns true or false if the object has the key or not
    Python: key in dict
*/

const arr1 = ["a", "a", "a"]
// const expected1 = {
//   a: 3,
// }

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"]
// const expected2 = {
//   a: 2,
//   b: 1,
//   c: 3,
//   B: 1,
//   d: 1,
// }

const arr3 = []
// const expected3 = {}

function frequencyTableBuilder(arr) {
    let newDict = {}
    var count =0;
    for(var i = 0; i < arr.length; i++){
        for (j = 0 ; j<arr.length; j++){
            if(arr[i]==arr[j]){
            count=count+1
            newDict[arr[i]] = count;
            }
        }count=0;
    }
    return newDict
}

console.log("-----------First Algorithm------------")

console.log(frequencyTableBuilder(arr1))
console.log("-----------------------")
console.log(frequencyTableBuilder(arr2))  
console.log("-----------------------")
console.log(frequencyTableBuilder(arr3))

/*****************************************************************************/
/*
        Reverse Word Order
    
        Given a string of words (with spaces)
        return a new string with words in reverse sequence.
    */

const str1 = "This is a test";
// const expected1 = "test a is This";

function reverseString(str) {
    var i = str.length - 1;
    var start, end = i + 1;
    var result = "";
    
    while (i >= 0){
        if (str[i] == ' '){
            start = i + 1;
            while (start != end)
                result += str[start++];
            result += ' ';
            end = i;
        }
        i--;
    }
    start = 0;
    while (start != end)
        result += str[start++];
    return result;
}

console.log("-----------Second Algorithm------------")
console.log(reverseString(str1))