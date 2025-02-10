// Source : https://leetcode.com/problems/count-number-of-bad-pairs/
/*
2364. Count Number of Bad Pairs
Medium - 1566

You are given a 0-indexed integer array nums. A pair of indices (i, j) is a bad pair if i < j and j - i != nums[j] - nums[i].

Return the total number of bad pairs in nums.

Example 1:
Input: nums = [4,1,3,3]
Output: 5
Explanation: The pair (0, 1) is a bad pair since 1 - 0 != 1 - 4.
The pair (0, 2) is a bad pair since 2 - 0 != 3 - 4, 2 != -1.
The pair (0, 3) is a bad pair since 3 - 0 != 3 - 4, 3 != -1.
The pair (1, 2) is a bad pair since 2 - 1 != 3 - 1, 1 != 2.
The pair (2, 3) is a bad pair since 3 - 2 != 3 - 3, 1 != 0.
There are a total of 5 bad pairs, so we return 5.

Example 2:
Input: nums = [1,2,3,4,5]
Output: 0
Explanation: There are no bad pairs.

Constraints:
1 <= nums.length <= 105
1 <= nums[i] <= 109
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function (nums) {
  let length = nums.length,
    countMap = new Map(),
    count = 0;
  let totalPair = (length * (length - 1)) / 2;
  //  i < j && j - i != nums[j] - nums[i] =>  nums[i] - i != nums[j] - j
  for (let i = 0; i < length; i++) {
    if (countMap.has(nums[i] - i)) {
      countMap.set(nums[i] - i, countMap.get(nums[i] - i) + 1);
    } else {
      countMap.set(nums[i] - i, 1);
    }
  }

  for (let [key, value] of countMap) {
    if (value > 1) {
      count += (value * (value - 1)) / 2;
    }
  }

  return totalPair - count;
};

// tips to solve the problem
//  i < j && j - i != nums[j] - nums[i] =>  nums[i] - i != nums[j] - j

// (length - 0) - 1 + (length - 1) - 1 + (length - 2) - 1 + (length - 3) - 1
// (length - 1) + (length - 2) + (length - 3) + (length - 4)
// length * length - (length * (length + 1))/2 = 16 - 10 = 6

//Or
// (length - 1) + (length - 2) + (length - 3) + (length - 4)
// 3 + 2 + 1 => (length * (length - 1))/2

// Optimized Solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function (nums) {
  let length = nums.length,
    countMap = new Map(),
    goodPairs = 0;

  for (let i = 0; i < length; i++) {
    let key = nums[i] - i;

    if (countMap.has(key)) {
      goodPairs += countMap.get(key); // Increment goodPairs by existing count
      countMap.set(key, countMap.get(key) + 1);
    } else {
      countMap.set(key, 1);
    }
  }

  let totalPairs = (length * (length - 1)) / 2;
  return totalPairs - goodPairs;
};

/**
 * Dry Run for countBadPairs Function
 *
 * Function: Counts bad pairs in the array where nums[i] - i ≠ nums[j] - j.
 *
 * Test Case 1: nums = [4,1,3,3]
 *
 * Step-by-step breakdown:
 * Index | nums[i] | nums[i] - i | Map State        | Good Pairs Count
 * --------------------------------------------------------------------
 *   0   |   4    |    4 - 0 = 4  | { 4: 1 }         | 0
 *   1   |   1    |    1 - 1 = 0  | { 4: 1, 0: 1 }   | 0
 *   2   |   3    |    3 - 2 = 1  | { 4: 1, 0: 1, 1: 1 } | 0
 *   3   |   3    |    3 - 3 = 0  | { 4: 1, 0: 2, 1: 1 } | 1 (since 0 appears twice)
 *
 * Total Pairs = (4 * 3) / 2 = 6
 * Good Pairs = 1
 * Bad Pairs = 6 - 1 = 5
 * Output: 5
 */

console.log(countBadPairs([4, 1, 3, 3])); // Output: 5

/**
 * Test Case 2: nums = [1,2,3,4,5]
 *
 * Step-by-step breakdown:
 * Index | nums[i] | nums[i] - i | Map State        | Good Pairs Count
 * --------------------------------------------------------------------
 *   0   |   1    |    1 - 0 = 1  | { 1: 1 }         | 0
 *   1   |   2    |    2 - 1 = 1  | { 1: 2 }         | 1
 *   2   |   3    |    3 - 2 = 1  | { 1: 3 }         | 3
 *   3   |   4    |    4 - 3 = 1  | { 1: 4 }         | 6
 *   4   |   5    |    5 - 4 = 1  | { 1: 5 }         | 10
 *
 * Total Pairs = (5 * 4) / 2 = 10
 * Good Pairs = 10
 * Bad Pairs = 10 - 10 = 0
 * Output: 0
 */

console.log(countBadPairs([1, 2, 3, 4, 5])); // Output: 0

/**
 * Test Case 3: nums = [7,2,3,4,5]
 *
 * Step-by-step breakdown:
 * Index | nums[i] | nums[i] - i | Map State        | Good Pairs Count
 * --------------------------------------------------------------------
 *   0   |   7    |    7 - 0 = 7  | { 7: 1 }         | 0
 *   1   |   2    |    2 - 1 = 1  | { 7: 1, 1: 1 }   | 0
 *   2   |   3    |    3 - 2 = 1  | { 7: 1, 1: 2 }   | 1
 *   3   |   4    |    4 - 3 = 1  | { 7: 1, 1: 3 }   | 3
 *   4   |   5    |    5 - 4 = 1  | { 7: 1, 1: 4 }   | 6
 *
 * Total Pairs = (5 * 4) / 2 = 10
 * Good Pairs = 6
 * Bad Pairs = 10 - 6 = 4
 * Output: 4
 */

console.log(countBadPairs([7, 2, 3, 4, 5])); // Output: 4
