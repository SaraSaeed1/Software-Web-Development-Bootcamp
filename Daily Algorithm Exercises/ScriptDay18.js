/*
Balance Index
Here, a balance point is ON an index, not between indices.
Return the balance index where sums are equal on either side
(exclude its own value).
Return -1 if none exist.
*/

const numsA1 = [-2, 4, 7, 0, 0,0,0,0,0,1,0,10];
// const expected1 = 2;

const numsA2 = [9, 9];
// const expected2 = -1;

function balanceIndex(nums) {
    var center = 0
    for(var j=0;j<nums.length;j++){
        var rightSide=0
        var leftSide=0
        center = j
        for (var i=0; i<center ; i++){
            leftSide=leftSide+ nums[i]
            var index= i+1
        }
        for (var i=nums.length-1; i>center; i--){
            rightSide=rightSide+ nums[i]
        }
        if(leftSide==rightSide){
            return index
        }
    }
    return -1;
}

console.log('--------- Algorithm 1 ---------')
console.log(balanceIndex(numsA1))
console.log(balanceIndex(numsA2))

/*****************************************************************************/
/*
Balance Point

Write a function that returns whether the given
array has a balance point BETWEEN indices,
where one side’s sum is equal to the other’s.
*/

const numsB1 = [1, 2, 3, 4, 10];
// const expected1 = true;
// Explanation: between indices 3 & 4

const numsB2 = [1, 2, 4, 2, 1];
// const expected2 = false;

function balancePoint(nums) {
    var center = 0
    for(var j=0;j<nums.length;j++){
        var rightSide=0
        var leftSide=0
        center = j
        leftI = 0
        for (var i=0; i<center ; i++){
            leftSide=leftSide+ nums[i]
            leftI = i
        }
        leftSide += nums[leftI+1]
        for (var i=nums.length-1; i>center; i--){
            rightSide=rightSide+ nums[i]
        }
        if(leftSide==rightSide){
            return true
        }
    }
    return false;
}
console.log('--------- Algorithm 2 ---------')
console.log(balancePoint(numsB1))
console.log(balancePoint(numsB2))

