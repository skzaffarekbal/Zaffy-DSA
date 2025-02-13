// Sources: https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/description/?envType=daily-question&envId=2025-02-13
/*
3066. Minimum Operations to Exceed Threshold Value II
Medium - 1323

Companies: tcs
You are given a 0-indexed integer array nums, and an integer k.

You are allowed to perform some operations on nums, where in a single operation, you can:

Select the two smallest integers x and y from nums.
Remove x and y from nums.
Insert (min(x, y) * 2 + max(x, y)) at any position in the array.
Note that you can only apply the described operation if nums contains at least two elements.

Return the minimum number of operations needed so that all elements of the array are greater than or equal to k.

Example 1:

Input: nums = [2,11,10,1,3], k = 10

Output: 2

Explanation:

In the first operation, we remove elements 1 and 2, then add 1 * 2 + 2 to nums. nums becomes equal to [4, 11, 10, 3].
In the second operation, we remove elements 3 and 4, then add 3 * 2 + 4 to nums. nums becomes equal to [10, 11, 10].
At this stage, all the elements of nums are greater than or equal to 10 so we can stop. 

It can be shown that 2 is the minimum number of operations needed so that all elements of the array are greater than or equal to 10.

Example 2:

Input: nums = [1,1,2,4,9], k = 20

Output: 4

Explanation:

After one operation, nums becomes equal to [2, 4, 9, 3]. 
After two operations, nums becomes equal to [7, 4, 9]. 
After three operations, nums becomes equal to [15, 9]. 
After four operations, nums becomes equal to [33].
At this stage, all the elements of nums are greater than 20 so we can stop. 

It can be shown that 4 is the minimum number of operations needed so that all elements of the array are greater than or equal to 20.

Constraints:

2 <= nums.length <= 2 * 105
1 <= nums[i] <= 109
1 <= k <= 109
The input is generated such that an answer always exists. That is, there exists some sequence of operations after which all elements of the array are greater than or equal to k.
*/

// Using JS Library
// TODO: explore the JS library and Implement Own MinHeap
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  const minHeap = new MinPriorityQueue({ priority: (x) => x });
  for (const num of nums) {
    minHeap.enqueue(num);
  }
  let operation = 0;
  while (minHeap.front().element < k) {
    let x = minHeap.dequeue().element;
    let y = minHeap.dequeue().element;
    let newElement = 2 * x + y;
    minHeap.enqueue(newElement);
    operation++;
  }
  return operation;
};

// Using Sorting Array

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  nums.sort((a, b) => b - a); // Sort in descending order
  let operationArr = [],
    operation = 0;

  while (
    (nums.length && nums[nums.length - 1] < k) || // If smallest in nums < k
    (operationArr.length && operationArr[0] < k) // If smallest in operationArr < k
  ) {
    // Pick two smallest values from nums and operationArr
    let x =
      nums.length && !(nums[nums.length - 1] > operationArr[0]) ? nums.pop() : operationArr.shift();

    let y =
      nums.length && !(nums[nums.length - 1] > operationArr[0]) ? nums.pop() : operationArr.shift();

    operationArr.push(2 * x + y); // Merge and add to operationArr
    operation++;
  }
  return operation;
};

/**
 * Dry Run for Input: nums = [2,11,10,1,3], k = 10
 */

/*
Initial state:
nums = [11, 10, 3, 2, 1]  // After sorting in descending order
operationArr = []
operation = 0

Iteration 1:
nums.pop() → x = 1  (smallest from nums)
nums.pop() → y = 2  (next smallest from nums)
operationArr.push(2 * 1 + 2) → operationArr = [4]
operation = 1

Iteration 2:
nums.pop() → x = 3
operationArr.shift() → y = 4
operationArr.push(2 * 3 + 4) → operationArr = [10]
operation = 2

Exit loop since all elements >= k
Output: 2
*/

/**
 * Dry Run for Input: nums = [1,1,2,4,9], k = 20
 */

/*
Initial state:
nums = [9, 4, 2, 1, 1]  // After sorting
operationArr = []
operation = 0

Iteration 1:
nums.pop() → x = 1
nums.pop() → y = 1
operationArr.push(2 * 1 + 1) → operationArr = [3]
operation = 1

Iteration 2:
nums.pop() → x = 2
operationArr.shift() → y = 3
operationArr.push(2 * 2 + 3) → operationArr = [7]
operation = 2

Iteration 3:
nums.pop() → x = 4
operationArr.shift() → y = 7
operationArr.push(2 * 4 + 7) → operationArr = [15]
operation = 3

Iteration 4:
nums.pop() → x = 9
operationArr.shift() → y = 15
operationArr.push(2 * 9 + 15) → operationArr = [33]
operation = 4

Exit loop since all elements >= k
Output: 4
*/
