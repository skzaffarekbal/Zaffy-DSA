// Sources: https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/?envType=daily-question&envId=2025-03-04

/*
1780. Check if Number is a Sum of Powers of Three
Medium - 1331

Given an integer n, return true if it is possible to represent n as the sum of distinct powers of three. Otherwise, return false.

An integer y is a power of three if there exists an integer x such that y == 3x.

Example 1:
Input: n = 12
Output: true
Explanation: 12 = 31 + 32

Example 2:
Input: n = 91
Output: true
Explanation: 91 = 30 + 32 + 34

Example 3:
Input: n = 21
Output: false

Constraints:
1 <= n <= 107
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {
  if (n % 3 > 1) return false;
  while (n > 0) {
    if (n % 3 > 1) return false;
    n = Math.floor(n / 3);
  }
  return true;
};
