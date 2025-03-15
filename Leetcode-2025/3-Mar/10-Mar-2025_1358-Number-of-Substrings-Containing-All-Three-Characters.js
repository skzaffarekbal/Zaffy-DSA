// Problem Link: https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/?envType=daily-question&envId=2025-03-11

// Approach: Sliding Window
/*
1358. Number of Substrings Containing All Three Characters
Medium - 1613
Companies: DE Shaw, PayPal

Given a string s consisting only of characters a, b and c.

Return the number of substrings containing at least one occurrence of all these characters a, b and c.

Example 1:
Input: s = "abcabc"
Output: 10
Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again). 

Example 2:
Input: s = "aaacb"
Output: 3
Explanation: The substrings containing at least one occurrence of the characters a, b and c are "aaacb", "aacb" and "acb". 

Example 3:
Input: s = "abc"
Output: 1

Constraints:
3 <= s.length <= 5 x 10^4
s only consists of a, b or c characters.
*/
// Approach: Sliding Window
// Time Complexity: O(n)
// Space Complexity: O(1)

/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  let abcIndex = { a: -1, b: -1, c: -1 },
    total = 0;
  for (let i = 0; i < s.length; i++) {
    abcIndex[s[i]] = i;
    total += 1 + Math.min(abcIndex['a'], abcIndex['b'], abcIndex['c']);
  }
  return total;
};
