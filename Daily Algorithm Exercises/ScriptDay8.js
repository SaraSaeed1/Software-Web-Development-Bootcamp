/*
  Input: a 2 dimensional array of integers
  Output: A 1 dimensional array of all the same elements preserving original order
*/

// this given array has a length of 3 because it has 3 arrays as items
const twoDimArr1 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
// const expected1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const twoDimArr2 = [[1], [2], [3]]
// const expected2 = [1, 2, 3]

// const twoDimArr3 = [[], [], [10, 20]]
// const expected3 = [10, 20]

function flatten2dArray(twoDimArr) {
    var newArr =[];
    var item;
    for(let i=0; i<twoDimArr.length ; i++){
        for(let j=0; j<twoDimArr[i].length ; j++ ){
            newArr[newArr.length]=twoDimArr[i][j];
        }
    }
    return newArr;
}
console.log(flatten2dArray(twoDimArr1));