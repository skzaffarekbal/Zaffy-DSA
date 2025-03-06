/*
69. Sqrt(x)
Easy - 728

Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

Example 1:
Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.

Example 2:
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

Constraints:

0 <= x <= 231 - 1
*/

// Approach 1
// Time complexity: O(sqrt(x))
// Space complexity: O(1)
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 0) return null;
  let i = 1;
  for (; i * i <= x; i++) {}
  return i - 1;
};

// Approach 2
// Time complexity: O(log(x))
// Space complexity: O(1)
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 0) return null;
  if (x === 0) return 0;

  let start = 1,
    end = x;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (mid * mid === x) return mid;
    else if (mid * mid < x) start = mid + 1;
    else end = mid - 1;
  }
  return end;
};
