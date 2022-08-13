/*
Efficiently combine two already sorted multiset arrays
into an array containing the sorted set intersection of the two.
Output: only the shared values between the two arrays (deduped).
* Venn Diagram Visualization (bottom):
* https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
* - Time: O(n) linear, n = max(sortedA.length, sortedB.length) when there are
*    dupes we may end up looping over all items of longer arr.
* - Space: O(n) linear, n = shorter array length.
* @param {Array<number>} sortedA
* @param {Array<number>} sortedB Both sets are multisets
*    (multi in that it can contain multiple dupes).
* @returns {Array<number>} The sorted set intersection: a new array that is
*    sorted and contains only the shared values between the two arrays
*    deduped.
*/

const numsA1 = [0, 1, 2, 2, 2, 7,7,7,7,8,8,8];
const numsB1 = [2, 2, 6, 6, 7,7];
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];



function removeDuplicates (nums) {
    // Length of the updated array
    let count = 0;
    var newArr=[]
    // Loop for all the elements in the array
    for (let i = 0; i < nums.length; i++) {
        // If the current element is equal to the next element, we skip
        if (i < nums.length-1  && nums[i] == nums[i + 1]) {
            continue;
        }
        // We will update the array in place
        nums[count] = nums[i];
        newArr.push(nums[count])
        count++;
    }
    // console.log(nums)
    return newArr;
}

function orderedIntersection(sortedA, sortedB) {
    let newArr=[];
    for(i=0 ; i<sortedA.length ; i++){
        for(j=0 ; j<sortedB.length ; j++){
            if(sortedA[i] == sortedB[j]){
                // if(newArr[newArr.length-1]!==sortedA[i])
                newArr.push(sortedA[i]);
            }
        }
    }
    return removeDuplicates(newArr);
}

console.log(orderedIntersection(numsA1,numsB1));