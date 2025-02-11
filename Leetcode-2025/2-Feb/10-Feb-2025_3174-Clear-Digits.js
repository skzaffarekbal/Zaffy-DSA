/*
3174. Clear Digits
Easy - 722

You are given a string s.

Your task is to remove all digits by doing this operation repeatedly:

Delete the first digit and the closest non-digit character to its left.
Return the resulting string after removing all digits.

Example 1:

Input: s = "abc"
Output: "abc"

Explanation:
There is no digit in the string.

Example 2:

Input: s = "cb34"
Output: ""

Explanation:
First, we apply the operation on s[2], and s becomes "c4".
Then we apply the operation on s[1], and s becomes "".


Constraints:

1 <= s.length <= 100
s consists only of lowercase English letters and digits.
The input is generated such that it is possible to delete all digits.
*/

/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
  let stack = [],
    length = s.length;
  for (let i = 0; i < length; i++) {
    if (!isNaN(s[i]) && stack.length > 0) {
      stack.pop();
    } else stack.push(s[i]);
  }

  return stack.length ? stack.join('') : '';
};
