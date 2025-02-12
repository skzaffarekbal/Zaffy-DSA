/*
1910. Remove All Occurrences of a Substring
Medium - 1362
Company: X, Zoho
Given two strings s and part, perform the following operation on s until all occurrences of the substring part are removed:

Find the leftmost occurrence of the substring part and remove it from s.
Return s after removing all occurrences of part.

A substring is a contiguous sequence of characters in a string.

Example 1:
Input: s = "daabcbaabcbc", part = "abc"
Output: "dab"
Explanation: The following operations are done:
- s = "daabcbaabcbc", remove "abc" starting at index 2, so s = "dabaabcbc".
- s = "dabaabcbc", remove "abc" starting at index 4, so s = "dababc".
- s = "dababc", remove "abc" starting at index 3, so s = "dab".
Now s has no occurrences of "abc".

Example 2:
Input: s = "axxxxyyyyb", part = "xy"
Output: "ab"
Explanation: The following operations are done:
- s = "axxxxyyyyb", remove "xy" starting at index 4 so s = "axxxyyyb".
- s = "axxxyyyb", remove "xy" starting at index 3 so s = "axxyyb".
- s = "axxyyb", remove "xy" starting at index 2 so s = "axyb".
- s = "axyb", remove "xy" starting at index 1 so s = "ab".
Now s has no occurrences of "xy".

Constraints:
1 <= s.length <= 1000
1 <= part.length <= 1000
s​​​​​​ and part consists of lowercase English letters.
*/

/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
  let stack = [],
    partLength = part.length,
    targetChar = part[partLength - 1];
  for (let char of s) {
    stack.push(char);
    if (
      char === targetChar &&
      stack.length >= partLength &&
      stack.slice(-partLength).join('') === part
    ) {
      stack.length -= partLength;
    }
  }
  return stack.join('');
};

/**
 * Remove Occurrences of a Substring - Dry Run
 *
 * Function: Removes all occurrences of `part` from `s` until none remain.
 * Approach: Uses a stack to efficiently detect and remove the `part` substring.
 *
 * Algorithm:
 * 1️⃣ Iterate through each character of `s`.
 * 2️⃣ Push the character onto a stack.
 * 3️⃣ If the last `part.length` characters in the stack match `part`, remove them.
 * 4️⃣ Return the final stack as a string.
 *
 * Stack helps efficiently track character sequences while checking for `part`.
 */

// ✅ Test Case 1: s = "daabcbaabcbc", part = "abc"
// Expected Output: "dab"
console.log(removeOccurrences('daabcbaabcbc', 'abc'));

/**
 * Dry Run for s = "daabcbaabcbc", part = "abc"
 * ---------------------------------------------------
 * Input: s = "daabcbaabcbc", part = "abc"
 * Initial Variables:
 *    stack = []
 *    partLength = 3
 *    targetChar = 'c'  (last character of part)
 *
 * Iteration-wise execution:
 *
 * Step 1: 'd' → stack = ['d']
 * Step 2: 'a' → stack = ['d', 'a']
 * Step 3: 'a' → stack = ['d', 'a', 'a']
 * Step 4: 'b' → stack = ['d', 'a', 'a', 'b']
 * Step 5: 'c' → stack = ['d', 'a', 'a', 'b', 'c'] → "abc" found → Remove "abc"
 *           New stack = ['d', 'a']
 * Step 6: 'b' → stack = ['d', 'a', 'b']
 * Step 7: 'a' → stack = ['d', 'a', 'b', 'a']
 * Step 8: 'a' → stack = ['d', 'a', 'b', 'a', 'a']
 * Step 9: 'b' → stack = ['d', 'a', 'b', 'a', 'a', 'b']
 * Step 10: 'c' → stack = ['d', 'a', 'b', 'a', 'a', 'b', 'c'] → "abc" found → Remove "abc"
 *           New stack = ['d', 'a', 'b', 'a']
 * Step 11: 'b' → stack = ['d', 'a', 'b', 'a', 'b']
 * Step 12: 'c' → stack = ['d', 'a', 'b', 'a', 'b', 'c'] → "abc" found → Remove "abc"
 *           New stack = ['d', 'a', 'b']
 *
 * Final stack: ['d', 'a', 'b']
 * Output: "dab"
 */

// ✅ Test Case 2: s = "axxxxyyyyb", part = "xy"
// Expected Output: "ab"
console.log(removeOccurrences('axxxxyyyyb', 'xy'));

/**
 * Dry Run for s = "axxxxyyyyb", part = "xy"
 * ---------------------------------------------------
 * Input: s = "axxxxyyyyb", part = "xy"
 * Initial Variables:
 *    stack = []
 *    partLength = 2
 *    targetChar = 'y'  (last character of part)
 *
 * Iteration-wise execution:
 *
 * Step 1: 'a' → stack = ['a']
 * Step 2: 'x' → stack = ['a', 'x']
 * Step 3: 'x' → stack = ['a', 'x', 'x']
 * Step 4: 'x' → stack = ['a', 'x', 'x', 'x']
 * Step 5: 'x' → stack = ['a', 'x', 'x', 'x', 'x']
 * Step 6: 'y' → stack = ['a', 'x', 'x', 'x', 'x', 'y'] → "xy" found → Remove "xy"
 *           New stack = ['a', 'x', 'x', 'x']
 * Step 7: 'y' → stack = ['a', 'x', 'x', 'x', 'y'] → "xy" found → Remove "xy"
 *           New stack = ['a', 'x', 'x']
 * Step 8: 'y' → stack = ['a', 'x', 'x', 'y'] → "xy" found → Remove "xy"
 *           New stack = ['a', 'x']
 * Step 9: 'y' → stack = ['a', 'x', 'y'] → "xy" found → Remove "xy"
 *           New stack = ['a']
 * Step 10: 'b' → stack = ['a', 'b']
 *
 * Final stack: ['a', 'b']
 * Output: "ab"
 */
