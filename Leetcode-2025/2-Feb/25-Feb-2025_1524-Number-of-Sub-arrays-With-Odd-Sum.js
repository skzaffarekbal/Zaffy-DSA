// Source: https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/?envType=daily-question&envId=2025-02-25

/*
1524. Number of Sub-arrays With Odd Sum
Medium - 1561

Given an array of integers arr, return the number of subarrays with an odd sum.

Since the answer can be very large, return it modulo 109 + 7.

Example 1:
Input: arr = [1,3,5]
Output: 4
Explanation: All subarrays are [[1],[1,3],[1,3,5],[3],[3,5],[5]]
All sub-arrays sum are [1,4,9,3,8,5].
Odd sums are [1,9,3,5] so the answer is 4.

Example 2:
Input: arr = [2,4,6]
Output: 0
Explanation: All subarrays are [[2],[2,4],[2,4,6],[4],[4,6],[6]]
All sub-arrays sum are [2,6,12,4,10,6].
All sub-arrays have even sum and the answer is 0.

Example 3:
Input: arr = [1,2,3,4,5,6,7]
Output: 16

Constraints:

1 <= arr.length <= 105
1 <= arr[i] <= 100
*/

/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function (arr) {
  let odd = 0,
    even = 0,
    prefixSum = 0;
  for (num of arr) {
    prefixSum += num;
    prefixSum % 2 ? odd++ : even++;
  }
  return (odd * even + odd) % 1000000007;
};

// Best Acceptance approach
/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function (arr) {
  const MOD = 1e9 + 7;
  let result = 0;
  let prefixSum = 0;
  let oddCount = 0;
  let evenCount = 1;

  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];
    if (prefixSum % 2 === 0) {
      result = (result + oddCount) % MOD;
      evenCount += 1;
    } else {
      result = (result + evenCount) % MOD;
      oddCount += 1;
    }
  }

  return result;
};
