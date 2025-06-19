// Sources: https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i/description/?envType=daily-question&envId=2025-03-19

/*
3191. Minimum Operations to Make Binary Array Elements Equal to One I
Medium - 1189

Topics: Array, Bit Manipulation, Queue, Sliding Window, Prefix Sum

You are given a binary array nums.

You can do the following operation on the array any number of times (possibly zero):

Choose any 3 consecutive elements from the array and flip all of them.
Flipping an element means changing its value from 0 to 1, and from 1 to 0.

Return the minimum number of operations required to make all elements in nums equal to 1. If it is impossible, return -1.

Example 1:
Input: nums = [0,1,1,1,0,0]
Output: 3

Explanation:
We can do the following operations:
Choose the elements at indices 0, 1 and 2. The resulting array is nums = [1,0,0,1,0,0].
Choose the elements at indices 1, 2 and 3. The resulting array is nums = [1,1,1,0,0,0].
Choose the elements at indices 3, 4 and 5. The resulting array is nums = [1,1,1,1,1,1].

Example 2:
Input: nums = [0,1,1,1]
Output: -1

Explanation:
It is impossible to make all elements equal to 1.


Constraints:
3 <= nums.length <= 105
0 <= nums[i] <= 1
*/

// Approach 1
// Time Complexity: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let count = 0;
  for (let i = 2; i < nums.length; i++) {
    if (nums[i - 2] == 0) {
      count++;
      nums[i - 2] = nums[i - 2] ? 0 : 1;
      nums[i - 1] = nums[i - 1] ? 0 : 1;
      nums[i] = nums[i] ? 0 : 1;
    }
  }
  let sum = nums.reduce((acc, cur) => acc + cur, 0);
  if (sum === nums.length) return count;
  return -1;
};

// Approach 2
// Time Complexity: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  const n = nums.length;
  let count = 0;
  for (let i = 0; i < n - 2; i++) {
    if (nums[i] === 0) {
      count++;
      nums[i] = nums[i] ? 0 : 1;
      nums[i + 1] = nums[i + 1] ? 0 : 1;
      nums[i + 2] = nums[i + 2] ? 0 : 1;
    }
  }
  if (nums[n - 1] === 1 && nums[n - 2] === 1) return count;
  return -1;
};
