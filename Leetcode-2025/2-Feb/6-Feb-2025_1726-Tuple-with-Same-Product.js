// Sources: https://leetcode.com/problems/tuple-with-same-product/?envType=daily-question&envId=2025-02-06

/*
1726. Tuple with Same Product

Given an array nums of distinct positive integers, return the number of tuples (a, b, c, d) such that a * b = c * d where a, b, c, and d are elements of nums, and a != b != c != d.

Example 1:

Input: nums = [2,3,4,6]
Output: 8
Explanation: There are 8 valid tuples:
(2,6,3,4) , (2,6,4,3) , (6,2,3,4) , (6,2,4,3)
(3,4,2,6) , (4,3,2,6) , (3,4,6,2) , (4,3,6,2)
Example 2:

Input: nums = [1,2,4,5,10]
Output: 16
Explanation: There are 16 valid tuples:
(1,10,2,5) , (1,10,5,2) , (10,1,2,5) , (10,1,5,2)
(2,5,1,10) , (2,5,10,1) , (5,2,1,10) , (5,2,10,1)
(2,10,4,5) , (2,10,5,4) , (10,2,4,5) , (10,2,5,4)
(4,5,2,10) , (4,5,10,2) , (5,4,2,10) , (5,4,10,2)

Constraints:

1 <= nums.length <= 1000
1 <= nums[i] <= 104
All elements in nums are distinct.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function (nums) {
  let productMap = {},
    length = nums.length,
    noOfTuples = 0;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (productMap[nums[i] * nums[j]]) productMap[nums[i] * nums[j]] += 1;
      else productMap[nums[i] * nums[j]] = 1;
    }
  }
  Object.keys(productMap).forEach((key) => {
    if (productMap[key] > 1) noOfTuples += productMap[key] * (productMap[key] - 1) * 4;
  });
  return noOfTuples;
};
