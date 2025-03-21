// Sources: https://leetcode.com/problems/factorial-trailing-zeroes/

/*
172. Factorial Trailing Zeroes
Medium - 1327

Companies: Google

Given an integer n, return the number of trailing zeroes in n!.

Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.

Example 1:
Input: n = 3
Output: 0
Explanation: 3! = 6, no trailing zero.

Example 2:
Input: n = 5
Output: 1
Explanation: 5! = 120, one trailing zero.

Example 3:
Input: n = 0
Output: 0

Constraints:
0 <= n <= 104

Follow up: Could you write a solution that works in logarithmic time complexity?
*/
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let count = 0;
  for (let i = 5; i <= n; i = i * 5) count += Math.floor(n / i);
  return count;
};
