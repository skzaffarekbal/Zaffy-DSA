// Sources: https://leetcode.com/problems/reverse-integer/submissions/1533455276/

/*
7. Reverse Integer

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21

Constraints:

-231 <= x <= 231 - 1
*/

// Approach-1
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let bit = Math.pow(2, 31) - 1;
  let reverse = parseInt(Math.abs(x).toString().split('').reverse().join(''));
  return reverse > bit || reverse < -bit ? 0 : x < 0 ? -reverse : reverse;
};

// Approach-2
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let n = Math.abs(x),
    reverse = 0;
  while (n > 0) {
    reverse = reverse * 10 + (n % 10);
    n = parseInt(n / 10);
  }

  return reverse > 0x7fffffff ? 0 : x < 0 ? -reverse : reverse;
};
