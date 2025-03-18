// Sources: https://leetcode.com/problems/zero-array-transformation-ii/description/?envType=daily-question&envId=2025-03-13

/*
3356. Zero Array Transformation II
Medium - 1666

Topics: Array, Binary Search, Prefix Sum

You are given an integer array nums of length n and a 2D array queries where queries[i] = [li, ri, vali].

Each queries[i] represents the following action on nums:

Decrement the value at each index in the range [li, ri] in nums by at most vali.
The amount by which each value is decremented can be chosen independently for each index.
A Zero Array is an array with all its elements equal to 0.

Return the minimum possible non-negative value of k, such that after processing the first k queries in sequence, nums becomes a Zero Array. If no such k exists, return -1.

Example 1:
Input: nums = [2,0,2], queries = [[0,2,1],[0,2,1],[1,1,3]]
Output: 2

Explanation:
For i = 0 (l = 0, r = 2, val = 1):
Decrement values at indices [0, 1, 2] by [1, 0, 1] respectively.
The array will become [1, 0, 1].
For i = 1 (l = 0, r = 2, val = 1):
Decrement values at indices [0, 1, 2] by [1, 0, 1] respectively.
The array will become [0, 0, 0], which is a Zero Array. Therefore, the minimum value of k is 2.

Example 2:
Input: nums = [4,3,2,1], queries = [[1,3,2],[0,2,1]]
Output: -1

Explanation:
For i = 0 (l = 1, r = 3, val = 2):
Decrement values at indices [1, 2, 3] by [2, 2, 1] respectively.
The array will become [4, 1, 0, 0].
For i = 1 (l = 0, r = 2, val = 1):
Decrement values at indices [0, 1, 2] by [1, 1, 0] respectively.
The array will become [3, 0, 0, 0], which is not a Zero Array.

Constraints:
1 <= nums.length <= 105
0 <= nums[i] <= 5 * 105
1 <= queries.length <= 105
queries[i].length == 3
0 <= li <= ri < nums.length
1 <= vali <= 5
*/

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function (nums, queries) {
  const n = nums.length;
  let left = 0,
    right = queries.length;

  // Zero array isn't formed after all queries are processed
  if (!canFormZeroArray(nums, queries, right)) return -1;

  // Binary Search
  while (left <= right) {
    const middle = Math.floor(left + (right - left) / 2);
    if (canFormZeroArray(nums, queries, middle)) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  // Return earliest query that zero array can be formed
  return left;
};

function canFormZeroArray(nums, queries, k) {
  const n = nums.length;
  let sum = 0;
  const differenceArray = new Array(n + 1).fill(0);

  // Process queries
  for (let queryIndex = 0; queryIndex < k; queryIndex++) {
    const [start, end, val] = queries[queryIndex];

    // Process start and end of range
    differenceArray[start] += val;
    if (end + 1 < differenceArray.length) {
      differenceArray[end + 1] -= val;
    }
  }

  // Check if zero array can be formed
  for (let numIndex = 0; numIndex < n; numIndex++) {
    sum += differenceArray[numIndex];
    if (sum < nums[numIndex]) return false;
  }

  return true;
}
