// Sources: https://leetcode.com/problems/shortest-common-supersequence/?envType=daily-question&envId=2025-02-28

/*
1092. Shortest Common Supersequence 
Hard - 1991

Given two strings str1 and str2, return the shortest string that has both str1 and str2 as subsequences. If there are multiple valid strings, return any of them.

A string s is a subsequence of string t if deleting some number of characters from t (possibly 0) results in the string s.

Example 1:
Input: str1 = "abac", str2 = "cab"
Output: "cabac"
Explanation: 
str1 = "abac" is a subsequence of "cabac" because we can delete the first "c".
str2 = "cab" is a subsequence of "cabac" because we can delete the last "ac".
The answer provided is the shortest such string that satisfies these properties.

Example 2:
Input: str1 = "aaaaaaaa", str2 = "aaaaaaaa"
Output: "aaaaaaaa"

Constraints:
1 <= str1.length, str2.length <= 1000
str1 and str2 consist of lowercase English letters.
*/

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function (str1, str2) {
  if (str1 == str2 || !str2.length) return str1;
  if (!str1.length) return str2;

  // Remove common prefix
  let commonPrefix = '';
  while (str1.length > 0 && str2.length > 0 && str1[0] === str2[0]) {
    commonPrefix += str1[0];
    str1 = str1.slice(1);
    str2 = str2.slice(1);
  }

  // Remove common suffix
  let commonSuffix = '';
  while (str1.length > 0 && str2.length > 0 && str1[str1.length - 1] === str2[str2.length - 1]) {
    commonSuffix = str1[str1.length - 1] + commonSuffix;
    str1 = str1.slice(0, -1);
    str2 = str2.slice(0, -1);
  }

  const len1 = str1.length;
  const len2 = str2.length;

  // Build the DP table for the LCS length.
  // dp[i][j] represents the length of the LCS for str1[0..i-1] and str2[0..j-1].
  const dp = Array.from({ length: len1 + 1 }, () => Array(len2 + 1).fill(0));

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // Backtrack through the DP table to construct the supersequence.
  let i = len1;
  let j = len2;
  const sequence = [];

  // Build the sequence in reverse order using push.
  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      // When characters match, add the character (part of LCS) to the sequence.
      sequence.push(str1[i - 1]);
      i--;
      j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      // Choose the character from str1.
      sequence.push(str1[i - 1]);
      i--;
    } else {
      // Choose the character from str2.
      sequence.push(str2[j - 1]);
      j--;
    }
  }

  // Append any remaining characters from str1.
  while (i > 0) {
    sequence.push(str1[i - 1]);
    i--;
  }

  // Append any remaining characters from str2.
  while (j > 0) {
    sequence.push(str2[j - 1]);
    j--;
  }

  // Reverse the sequence since we built it backwards.
  const middleSequence = sequence.reverse().join('');
  // Combine the common prefix, the middle sequence, and the common suffix.
  return commonPrefix + middleSequence + commonSuffix;
};
