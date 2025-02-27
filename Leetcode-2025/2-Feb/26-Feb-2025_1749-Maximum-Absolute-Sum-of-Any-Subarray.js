/*
1749. Maximum Absolute Sum of Any Subarray
Medium - 1490

You are given an integer array nums. The absolute sum of a subarray [numsl, numsl+1, ..., numsr-1, numsr] is abs(numsl + numsl+1 + ... + numsr-1 + numsr).

Return the maximum absolute sum of any (possibly empty) subarray of nums.

Note that abs(x) is defined as follows:

If x is a negative integer, then abs(x) = -x.
If x is a non-negative integer, then abs(x) = x.

Example 1:
Input: nums = [1,-3,2,3,-4]
Output: 5
Explanation: The subarray [2,3] has absolute sum = abs(2+3) = abs(5) = 5.

Example 2:
Input: nums = [2,-5,1,-4,3,-2]
Output: 8
Explanation: The subarray [-5,1,-4] has absolute sum = abs(-5+1-4) = abs(-8) = 8.

Constraints:
1 <= nums.length <= 105
-104 <= nums[i] <= 104
*/

// Native approach
// Time complexity: O(n^3)
// Space complexity: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function (nums) {
  let maxAbsSum = Math.abs(nums[0]),
    length = nums.length;
  for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
      let sum = 0;
      for (let k = j; k <= i; k++) {
        sum += nums[k];
      }
      maxAbsSum = Math.max(maxAbsSum, Math.abs(sum));
    }
  }
  return maxAbsSum;
};

// Optimized approach of Native approach
// Time complexity: O(n^2)
// Space complexity: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function (nums) {
  let maxAbsSum = Math.abs(nums[0]), // Initialize with absolute first element
    length = nums.length;

  let prefixSum = Array(length).fill(0);
  prefixSum[0] = nums[0];

  // Step 1: Compute prefix sum array
  for (let i = 1; i < length; i++) prefixSum[i] = nums[i] + prefixSum[i - 1];

  // Step 2: Find max absolute sum of subarrays
  for (let i = 1; i < length; i++) {
    for (let j = 0; j <= i; j++) {
      let subArraySum = j == 0 ? prefixSum[i] : prefixSum[i] - prefixSum[j - 1];
      maxAbsSum = Math.max(maxAbsSum, Math.abs(subArraySum));
    }
  }

  return maxAbsSum;
};

// Test Case 1: nums = [1,-3,2,3,-4]
// Expected Output: 5

/* 
Dry Run for nums = [1, -3, 2, 3, -4]
-----------------------------------------------------
Step 1: Compute prefixSum array

Index | nums[i] | prefixSum[i] 
--------------------------------
  0   |   1     |   1
  1   |  -3     |  -2  (1 + (-3))
  2   |   2     |   0  (-2 + 2)
  3   |   3     |   3  (0 + 3)
  4   |  -4     |  -1  (3 + (-4))

-----------------------------------------------------
Step 2: Find max absolute sum

Iterate over all subarrays and compute absolute sum:

i = 1 (prefixSum[i] = -2)
  - j = 0 → subArraySum = -2 → maxAbsSum = 2

i = 2 (prefixSum[i] = 0)
  - j = 0 → subArraySum = 0 → maxAbsSum = 2
  - j = 1 → subArraySum = 2 → maxAbsSum = 2

i = 3 (prefixSum[i] = 3)
  - j = 0 → subArraySum = 3 → maxAbsSum = 3
  - j = 1 → subArraySum = 5 → maxAbsSum = 5  ✅

i = 4 (prefixSum[i] = -1)
  - j = 0 → subArraySum = -1 → maxAbsSum = 5
  - j = 1 → subArraySum = 1 → maxAbsSum = 5
  - j = 2 → subArraySum = -3 → maxAbsSum = 5

Final Output: 5
*/

// Test Case 2: nums = [2,-5,1,-4,3,-2]
// Expected Output: 8

/* 
Dry Run for nums = [2, -5, 1, -4, 3, -2]
-----------------------------------------------------
Step 1: Compute prefixSum array

Index | nums[i] | prefixSum[i] 
--------------------------------
  0   |   2     |   2
  1   |  -5     |  -3  (2 + (-5))
  2   |   1     |  -2  (-3 + 1)
  3   |  -4     |  -6  (-2 + (-4))
  4   |   3     |  -3  (-6 + 3)
  5   |  -2     |  -5  (-3 + (-2))

-----------------------------------------------------
Step 2: Find max absolute sum

Iterate over all subarrays and compute absolute sum:

i = 1 (prefixSum[i] = -3)
  - j = 0 → subArraySum = -3 → maxAbsSum = 3

i = 2 (prefixSum[i] = -2)
  - j = 0 → subArraySum = -2 → maxAbsSum = 3
  - j = 1 → subArraySum = 1 → maxAbsSum = 3

i = 3 (prefixSum[i] = -6)
  - j = 0 → subArraySum = -6 → maxAbsSum = 6 ✅

i = 4 (prefixSum[i] = -3)
  - j = 0 → subArraySum = -3 → maxAbsSum = 6
  - j = 1 → subArraySum = 2 → maxAbsSum = 6
  - j = 2 → subArraySum = 3 → maxAbsSum = 6
  - j = 3 → subArraySum = 7 → maxAbsSum = 7 ✅

i = 5 (prefixSum[i] = -5)
  - j = 0 → subArraySum = -5 → maxAbsSum = 7
  - j = 1 → subArraySum = 0 → maxAbsSum = 7
  - j = 2 → subArraySum = 1 → maxAbsSum = 7
  - j = 3 → subArraySum = 5 → maxAbsSum = 7
  - j = 4 → subArraySum = 8 → maxAbsSum = 8 ✅

Final Output: 8
*/

// Optimized approach
// Time complexity: O(n)
// Space complexity: O(1)
// Using Kadane's algorithm
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return Math.abs(nums[0]);
  let maxEnd = (minEnd = maxRes = minRes = nums[0]);

  for (let i = 1; i < nums.length; i++) {
    maxEnd = Math.max(maxEnd + nums[i], nums[i]);
    maxRes = Math.max(maxRes, maxEnd);

    minEnd = Math.min(minEnd + nums[i], nums[i]);
    minRes = Math.min(minRes, minEnd);
  }

  return Math.max(Math.abs(maxRes), Math.abs(minRes));
};

// Test Case 1: nums = [1, -3, 2, 3, -4]
// Expected Output: 5

/* 
Dry Run for nums = [1, -3, 2, 3, -4]
-----------------------------------------------------
Initial State:
maxEnd = 1, minEnd = 1, maxRes = 1, minRes = 1

Iteration 1 (i = 1, nums[i] = -3):
  maxEnd = max(1 + (-3), -3) = -2
  minEnd = min(1 + (-3), -3) = -3
  maxRes = max(1, -2) = 1
  minRes = min(1, -3) = -3

Iteration 2 (i = 2, nums[i] = 2):
  maxEnd = max(-2 + 2, 2) = 2
  minEnd = min(-3 + 2, 2) = -1
  maxRes = max(1, 2) = 2
  minRes = min(-3, -1) = -3

Iteration 3 (i = 3, nums[i] = 3):
  maxEnd = max(2 + 3, 3) = 5  ✅ New Max
  minEnd = min(-1 + 3, 3) = 2
  maxRes = max(2, 5) = 5  ✅
  minRes = min(-3, 2) = -3

Iteration 4 (i = 4, nums[i] = -4):
  maxEnd = max(5 + (-4), -4) = 1
  minEnd = min(2 + (-4), -4) = -4  ✅ New Min
  maxRes = max(5, 1) = 5
  minRes = min(-3, -4) = -4  ✅

Final Values:
maxRes = 5, minRes = -4
Output: max(|5|, |−4|) = 5 ✅
*/

// Test Case 2: nums = [2, -5, 1, -4, 3, -2]
// Expected Output: 8

/* 
Dry Run for nums = [2, -5, 1, -4, 3, -2]
-----------------------------------------------------
Initial State:
maxEnd = 2, minEnd = 2, maxRes = 2, minRes = 2

Iteration 1 (i = 1, nums[i] = -5):
  maxEnd = max(2 + (-5), -5) = -3
  minEnd = min(2 + (-5), -5) = -5
  maxRes = max(2, -3) = 2
  minRes = min(2, -5) = -5 ✅

Iteration 2 (i = 2, nums[i] = 1):
  maxEnd = max(-3 + 1, 1) = 1
  minEnd = min(-5 + 1, 1) = -4
  maxRes = max(2, 1) = 2
  minRes = min(-5, -4) = -5

Iteration 3 (i = 3, nums[i] = -4):
  maxEnd = max(1 + (-4), -4) = -3
  minEnd = min(-4 + (-4), -4) = -8  ✅ New Min
  maxRes = max(2, -3) = 2
  minRes = min(-5, -8) = -8 ✅

Iteration 4 (i = 4, nums[i] = 3):
  maxEnd = max(-3 + 3, 3) = 3  ✅ New Max
  minEnd = min(-8 + 3, 3) = -5
  maxRes = max(2, 3) = 3
  minRes = min(-8, -5) = -8

Iteration 5 (i = 5, nums[i] = -2):
  maxEnd = max(3 + (-2), -2) = 1
  minEnd = min(-5 + (-2), -2) = -7
  maxRes = max(3, 1) = 3
  minRes = min(-8, -7) = -8

Final Values:
maxRes = 3, minRes = -8
Output: max(|3|, |−8|) = 8 ✅
*/
