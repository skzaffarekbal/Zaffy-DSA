// Sources: https://leetcode.com/problems/longest-nice-subarray/description/?envType=daily-question&envId=2025-03-18

/*
2401. Longest Nice Subarray
Medium - 1741

Topics: Array, Bit Manipulation, Sliding Window
Companies: Paytm

You are given an array nums consisting of positive integers.

We call a subarray of nums nice if the bitwise AND of every pair of elements that are in different positions in the subarray is equal to 0.

Return the length of the longest nice subarray.

A subarray is a contiguous part of an array.

Note that subarrays of length 1 are always considered nice.

Example 1:
Input: nums = [1,3,8,48,10]
Output: 3
Explanation: The longest nice subarray is [3,8,48]. This subarray satisfies the conditions:
- 3 AND 8 = 0.
- 3 AND 48 = 0.
- 8 AND 48 = 0.
It can be proven that no longer nice subarray can be obtained, so we return 3.

Example 2:
Input: nums = [3,1,5,11,13]
Output: 1
Explanation: The length of the longest nice subarray is 1. Any subarray of length 1 can be chosen.

Constraints:
1 <= nums.length <= 105
1 <= nums[i] <= 109
*/

// Approach 1: Brute Force
// Time Complexity: O(n^2)

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function (nums) {
  let maxLength = 1,
    length = nums.length;
  for (let start = 0; start < length; start++) {
    let currentLength = 1;
    let usedBits = nums[start];
    for (let end = start + 1; end < length; end++) {
      if ((usedBits & nums[end]) === 0) {
        currentLength++;
        usedBits |= nums[end];
      } else break;
    }
    maxLength = Math.max(maxLength, currentLength);
  }
  return maxLength;
};

// Approach 2 : Sliding Window
// Time Complexity: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function (nums) {
  let maxLength = 0,
    length = nums.length,
    usedBits = 0,
    start = 0;
  for (let i = 0; i < length; i++) {
    // If current number shares bits with window, shrink window from
    // left until there's no bit conflict
    while ((usedBits & nums[i]) != 0) {
      usedBits ^= nums[start]; // Remove leftmost element's bits
      start++;
    }

    // Add current number to the window
    usedBits |= nums[i];
    // Update max length if current window is longer
    maxLength = Math.max(maxLength, i - start + 1);
  }
  return maxLength;
};
