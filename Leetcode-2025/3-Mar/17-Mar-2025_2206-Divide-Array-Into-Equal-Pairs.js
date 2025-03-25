// Source: https://leetcode.com/problems/divide-array-into-equal-pairs/?envType=daily-question&envId=2025-03-17

/*
2206. Divide Array Into Equal Pairs
Easy - 494

Topics: Array, Hash Table, Bit Manipulation, Counting

You are given an integer array nums consisting of 2 * n integers.

You need to divide nums into n pairs such that:

Each element belongs to exactly one pair.
The elements present in a pair are equal.
Return true if nums can be divided into n pairs, otherwise return false.

Example 1:
Input: nums = [3,2,3,2,2,2]
Output: true
Explanation: 
There are 6 elements in nums, so they should be divided into 6 / 2 = 3 pairs.
If nums is divided into the pairs (2, 2), (3, 3), and (2, 2), it will satisfy all the conditions.

Example 2:
Input: nums = [1,2,3,4]
Output: false
Explanation: 
There is no way to divide nums into 4 / 2 = 2 pairs such that the pairs satisfy every condition.

Constraints:
nums.length == 2 * n
1 <= n <= 500
1 <= nums[i] <= 500
*/

// Approach: Hash Table
// Time complexity: O(n)

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
  const frequency = {};

  for (let num of nums) {
    frequency[num] = (frequency[num] || 0) + 1;
  }

  for (const key in frequency) {
    if (frequency[key] % 2 !== 0) {
      return false;
    }
  }

  return true;
};

// Approach: Hash Table
// Time complexity: O(n)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
  let numMap = new Map();
  for (let num of nums) {
    if (numMap.has(num)) numMap.delete(num);
    else numMap.set(num, 1);
  }

  return numMap.size === 0;
};
