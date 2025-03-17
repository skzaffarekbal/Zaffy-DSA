/*
2529. Maximum Count of Positive Integer and Negative Integer
Easy - 787

Topics: Array, Two Pointers, Binary Search, Counting

Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.

In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
Note that 0 is neither positive nor negative.

Example 1:
Input: nums = [-2,-1,-1,1,2,3]
Output: 3
Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3.

Example 2:
Input: nums = [-3,-2,-1,0,0,1,2]
Output: 3
Explanation: There are 2 positive integers and 3 negative integers. The maximum count among them is 3.

Example 3:
Input: nums = [5,20,66,1314]
Output: 4
Explanation: There are 4 positive integers and 0 negative integers. The maximum count among them is 4.

Constraints:
1 <= nums.length <= 2000
-2000 <= nums[i] <= 2000
nums is sorted in a non-decreasing order.

Follow up: Can you solve the problem in O(log(n)) time complexity?
*/

// Approach: Two Pointers
// Time Complexity: O(n)
// Space Complexity: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  let negative = 0,
    positive = 0;
  for (num of nums) {
    if (num > 0) positive++;
    if (num < 0) negative++;
  }
  return Math.max(negative, positive);
};

// Approach: Binary Search
// Time Complexity: O(log(n))
// Space Complexity: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  const firstPositive = () => {
    let ans = nums.length,
      left = 0,
      right = nums.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] > 0) {
        ans = mid;
        right = mid - 1;
      } else left = mid + 1;
    }
    return ans;
  };

  const lastNegative = () => {
    let ans = -1,
      left = 0,
      right = nums.length - 1;
    while (left <= right) {
      mid = Math.floor((left + right) / 2);
      if (nums[mid] < 0) {
        ans = mid;
        left = mid + 1;
      } else right = mid - 1;
    }
    return ans;
  };

  let positiveCount = nums.length - firstPositive();
  let negativeCount = lastNegative() + 1;
  return Math.max(positiveCount, negativeCount);
};
