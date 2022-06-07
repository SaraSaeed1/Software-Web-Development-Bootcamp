// String Encode
// You are given a string that may contain sequences of consecutive characters.
// Create a function to shorten a string by including the character,
// then the number of times it appears.
// If final result is not shorter (such as "bb" => "b2" ),
// return the original string.
//   */

const str1 = "aaaabbcddd"
// const expected1 = "a4b2c1d3"

const str2 = ""
// const expected2 = ""

const str3 = "a"
// const expected3 = "a"

const str4 = "bbcc"  // b2c2  -> length is both 4
// const expected4 = "bbcc"

function encodeStr(str) {
    var newString = ""
    var item = str[0]
    var count=0

    for (i=0; i<=str.length ; i++){
        if ( str[i]==item){
            count+=1
        }
        else{
            newString += item+count
            item = str[i]
            var count=0
            count+=1
        }
    }
    return newString
}
console.log("------str1-------")
console.log(encodeStr(str1))

console.log("")
console.log("------str2-------")
console.log(encodeStr(str2))

console.log("")
console.log("------str3-------")
console.log(encodeStr(str3))

console.log("")
console.log("------str4-------")
console.log(encodeStr(str4))
/*****************************************************************************/

/*
    String Decode
    Given a string, create a function that repeats each letter by the number that follows
    */

const str5 = "a3b2c1d3";
// const expected1 = "aaabbcddd";

function decodeStr(str) {
    var string = ""
    for (var i=0; i<str.length; i++){
        const num = Number(str[i]);
        if(Number.isInteger(num)){
            for(var j=0; j<str[i]; j++){
                string+=str[i-1]
            }
        }
    }
    return string
}
console.log(decodeStr(str5))