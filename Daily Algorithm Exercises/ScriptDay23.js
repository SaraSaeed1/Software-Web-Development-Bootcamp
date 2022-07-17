/*
start at 0:52 seconds: https://www.youtube.com/watch?v=lyZQPjUT5B4
Stable sort
Time Complexity
    - Best: O(n) linear when array is already sorted.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic when the array is reverse sorted.
Space: O(1) constant.
For review, create a function that uses BubbleSort to sort an unsorted array in-place.
For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/
const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8]
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function bubbleSort(nums) {
    for (let i = 0 ; i<nums.length; i++){
        for (let j=0 ; j<nums.length ; j++){
            if(nums[j]>nums[j+1]){
                let temp = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = temp
            }
        }
    }
    return nums
}
console.log("-----------bubbleSort1--------------")
console.log(bubbleSort(numsRandomOrder))


// another SOL:
function bubbleSort2(nums) {
    for (let i = 0 ; i<nums.length; i++){
        if(nums[i]>nums[i+1]){
            let temp = nums[i]
            nums[i] = nums[i+1]
            nums[i+1] = temp
            i=-1
        }
    }
    return nums
}
console.log()
console.log("-----------bubbleSort2--------------")
console.log(bubbleSort2(numsReversed))

/*
    Selection sort works by iterating through the list, finding the minimum
    value, and moving it to the beginning of the list. Then, ignoring the first
    position, which is now sorted, iterate through the list again to find the
    next minimum value and move it to index 1. This continues until all values
    are sorted.
    https://www.youtube.com/watch?v=Ns4TPTC8whw
    Unstable sort.
    
    Time Complexity
    - Best: O(n^2) quadratic.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic.
    
    Space: O(1) constant.
    
    Selection sort is one of the slower sorts.
    - ideal for: pagination, where page 1 displays 10 records for example,
    you run selection sort for 10 iterations only to display the first 10
    sorted items.
    */
const numsOrdered2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
  // const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  // const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function selectionSort(nums) {
    for (let i = 0; i < nums.length; i++) {
        let lowest = i
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[lowest]) {
            lowest = j
            }
        }
        if (lowest !== i) {
            [nums[i], nums[lowest]] = [nums[lowest], nums[i]]
        }
    }
    return nums
}
console.log()
console.log("-----------selectionSort--------------")
console.log(selectionSort(numsOrdered2))

  // https://visualgo.net/en/sorting
  // https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
  // https://www.bigocheatsheet.com/