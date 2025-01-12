// Source: https://leetcode.com/problems/construct-k-palindrome-strings/description/?envType=daily-question&envId=2025-01-11

/*
1400. Construct K Palindrome Strings
Solved
Medium
Topics
Companies
Hint
Given a string s and an integer k, return true if you can use all the characters in s to construct k palindrome strings or false otherwise.

Example 1:

Input: s = "annabelle", k = 2
Output: true
Explanation: You can construct two palindromes using all characters in s.
Some possible constructions "anna" + "elble", "anbna" + "elle", "anellena" + "b"
Example 2:

Input: s = "leetcode", k = 3
Output: false
Explanation: It is impossible to construct 3 palindromes using all the characters of s.
Example 3:

Input: s = "true", k = 4
Output: true
Explanation: The only possible solution is to put each character in a separate string.

Constraints:

1 <= s.length <= 105
s consists of lowercase English letters.
1 <= k <= 105
*/

/*
Hint 1 : If the s.length < k we cannot construct k strings from s and answer is false.
Hint 2 : If the number of characters that have odd counts is > k then the minimum number of palindrome strings we can construct is > k and answer is false.
Hint 3 : Otherwise you can construct exactly k palindrome strings and answer is true (why ?).
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function (s, k) {
  let sLength = s.length,
    charCountHash = {},
    oddCount = 0;
  if (sLength < k) return false;
  if (sLength == k) return true;

  for (let char of s) {
    if (!charCountHash[char]) charCountHash[char] = 1;
    else charCountHash[char]++;
  }

  for (const key of Object.keys(charCountHash)) {
    if (charCountHash[key] % 2) oddCount++;
  }

  return oddCount <= k;
};

// Another solution
var canConstruct = function (s, k) {
  if (s.length < k) return false;

  let charCount = new Array(26).fill(0);
  for (let char of s) {
    charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  let oddCount = 0;
  for (let count of charCount) {
    if (count % 2 !== 0) oddCount++;
  }

  return oddCount <= k;
};

// console.log(canConstruct('annabelle', 2)); // true
// console.log(canConstruct('leetcode', 3)); // false
// console.log(canConstruct('true', 4)); // true
