/**
2116. Check if a Parentheses String Can Be Valid

A parentheses string is a non-empty string consisting only of '(' and ')'. It is valid if any of the following conditions is true:

It is ().
It can be written as AB (A concatenated with B), where A and B are valid parentheses strings.
It can be written as (A), where A is a valid parentheses string.
You are given a parentheses string s and a string locked, both of length n. locked is a binary string consisting only of '0's and '1's. For each index i of locked,

If locked[i] is '1', you cannot change s[i].
But if locked[i] is '0', you can change s[i] to either '(' or ')'.
Return true if you can make s a valid parentheses string. Otherwise, return false.


Example 1:

Input: s = "))()))", locked = "010100"
Output: true
Explanation: locked[1] == '1' and locked[3] == '1', so we cannot change s[1] or s[3].
We change s[0] and s[4] to '(' while leaving s[2] and s[5] unchanged to make s valid.

Example 2:

Input: s = "()()", locked = "0000"
Output: true
Explanation: We do not need to make any changes because s is already valid.

Example 3:

Input: s = ")", locked = "0"
Output: false
Explanation: locked permits us to change s[0]. 
Changing s[0] to either '(' or ')' will not make s valid.


Constraints:

n == s.length == locked.length
1 <= n <= 105
s[i] is either '(' or ')'.
locked[i] is either '0' or '1'.
 */

/*
Hint 1 -> Can an odd length string ever be valid?
Hint 2 -> From left to right, if a locked ')' is encountered, it must be balanced with either a locked '(' or an unlocked index on its left. If neither exist, what conclusion can be drawn? If both exist, which one is more preferable to use?
Hint 3 -> After the above, we may have locked indices of '(' and additional unlocked indices. How can you balance out the locked '(' now? What if you cannot balance any locked '('?
*/

/* My First Approach */

/*
But It failed on test cases
1) s = "()))", locked = "0010" Output: true
*/

/*

var canBeValid = function (s, locked) {
  let length = s.length;
  if (
    length % 2 == 1 ||
    (locked[0] == 1 && s[0] == ')') ||
    (locked[length - 1] == 1 && s[length - 1] == '(')
  )
    return false;

  let stack = [];
  stack.push({ value: s[0], locked: locked[0] });
  for (let i = 1; i < length; i++) {
    if (stack.length > 0) {
      if (stack[stack.length - 1].locked == '0' && locked[i] == '0') {
        stack.pop();
      } else if (stack[stack.length - 1].locked == '0' && locked[i] == '1' && s[i] == ')') {
        stack.pop();
      } else if (
        stack[stack.length - 1].locked == '1' &&
        stack[stack.length - 1].value == '(' &&
        locked[i] == '0'
      ) {
        stack.pop();
      } else {
        stack.push({ value: s[i], locked: locked[i] });
      }
    } else {
      stack.push({ value: s[i], locked: locked[i] });
    }
  }
  return !stack.length;
};
*/

/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function (s, locked) {
  let length = s.length;
  if (
    length % 2 == 1 ||
    (locked[0] == 1 && s[0] == ')') ||
    (locked[length - 1] == 1 && s[length - 1] == '(')
  )
    return false;

  let minOpen = 0,
    maxOpen = 0;
  for (let i = 0; i < length; i++) {
    if (locked[i] == '0') {
      maxOpen++;
      minOpen = minOpen == 0 ? 1 : minOpen - 1;
    } else {
      if (s[i] == '(') {
        maxOpen++;
        minOpen++;
      } else {
        maxOpen--;
        minOpen = minOpen == 0 ? 1 : minOpen - 1;
        if (minOpen > maxOpen) return false;
      }
    }
  }
  return minOpen == 0;
};
