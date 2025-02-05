// Source: https://leetcode.com/problems/special-array-i/description/?envType=daily-question&envId=2025-02-01

/*
3151. Special Array I

An array is considered special if every pair of its adjacent elements contains two numbers with different parity.

You are given an array of integers nums. Return true if nums is a special array, otherwise, return false.


Example 1:

Input: nums = [1]

Output: true

Explanation:

There is only one element. So the answer is true.

Example 2:

Input: nums = [2,1,4]

Output: true

Explanation:

There is only two pairs: (2,1) and (1,4), and both of them contain numbers with different parity. So the answer is true.

Example 3:

Input: nums = [4,3,1,6]

Output: false

Explanation:

nums[1] and nums[2] are both odd. So the answer is false.

Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function (nums) {
  let numsLength = nums.length;
  if (numsLength == 1) return true;
  for (let i = 0; i < numsLength - 1; i++) {
    if (!((nums[i] % 2 == 0 && nums[i + 1] % 2 == 1) || (nums[i] % 2 == 1 && nums[i + 1] % 2 == 0)))
      return false;
  }

  return true;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function (nums) {
  let numsLength = nums.length;
  if (numsLength == 1) return true;
  for (let i = 0; i < numsLength - 1; i++) if ((nums[i] + nums[i + 1]) % 2 == 0) return false;

  return true;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function (nums) {
  let numsLength = nums.length;
  if (numsLength == 1) return true;
  for (let i = 0; i < numsLength - 1; i++) if ((nums[i] % 2 == nums[i + 1]) % 2) return false;

  return true;
};

console.log(isArraySpecial([1])); // true
console.log(isArraySpecial([2, 1, 4])); // true
console.log(isArraySpecial([4, 3, 1, 6])); // false
