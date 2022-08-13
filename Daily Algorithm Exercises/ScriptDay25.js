/**
 * Partitions the given array in-place by selecting the number at the middle
 * index to use it as a "pivot" value, then arranges all numbers less than the
 * pivot to be to it's left and all larger numbers to the right of the pivot.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of array
 *    being processed.
 * @param {number} right The index indicating the end of the slice of array
 *    being processed.
 * @returns {Array<number>} The idx where left section of smaller items ends.
 */

// result [2, 3, 14, 8, 6, 11, 7]
const nums1 = [11, 8, 14, 3, 6, 2, 7];
const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];

function partition(nums) {
    var left = 0
    var right = nums.length - 1
    var center = right /2
    for ( left ; left<center ;left++){

        while (right>left) {
            if(nums[left]>=nums[center] && nums[right]<=nums[center]){
                var temp= nums[left]
                nums[left]= nums[right]
                nums[right]=temp
            }
            else if (nums[left]>=nums[center] && nums[right]>=nums[center] ){
                right --;
            }
            else{
                break;
            }
        }
    }
    return nums
}
// console.log(partition(nums1))
// console.log(partition(nums2))
console.log(partition(nums3))