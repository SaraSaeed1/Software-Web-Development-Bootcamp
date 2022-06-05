/*
  String: Reverse
  Given a string,
  return a new string that is the given string reversed
*/

var str1 = "creature";
// const expected1 = "erutaerc"

var str2 = "dog"
// const expected2 = "god"

function reverseString(str) {
    var newString = "";
    for (var i = str.length-1 ; i >= 0 ; i--) { 
        //  console.log(i)
        newString += str[i]; 
    }
    return newString;
}
console.log(reverseString(str1))
console.log(reverseString(str2))
console.log("--------------------------------")


/*****************************************************************************/

/*
Acronyms

Create a function that, given a string, returns the string’s acronym
(first letter of each word capitalized).

Do it with .split first if you need to, then try to do it without
*/
var str3 = " there's no free lunch - gotta pay yer way. ";
// const expected1 = "TNFL-GPYW";

var str4 = "Live from New York, it's Saturday Night!";
// const expected2 = "LFNYISN";

function acronymize(str) {
    var newString = "";
    for (var i=0 ;  i<str.length-1 ; i++) { 
        if (str[i] == ' '){
            newString += str[i+1];
        }
        else if(i== ' '){
            newString += str[i];
        }
    }
    return newString.toUpperCase();
}
console.log(acronymize(str3))
console.log(acronymize(str4))
console.log("--------------------------------")



  /*****************************************************************************/
  
  /* case insensitive string compare */
  
    var strA = "ABC";
    var strB = "abc";
  //   const expected1 = true;
  
    var strA2 = "ABC";
    var strB2 = "abd";
  //   const expected2 = false;
  
  //   const strA3 = "ABC";
  //   const strB3 = "bc";
  //   const expected3 = false;
  
function caseInsensitiveStringCompare(strA, strB) {
    var x = strA.toUpperCase();
    var y = strB.toUpperCase();
    // console.log ( x, y)
    if(x == y){
        return true;
    }else{
        return false;
    }
}
console.log(caseInsensitiveStringCompare(strA,strB))
console.log(caseInsensitiveStringCompare(strA2,strB2))  