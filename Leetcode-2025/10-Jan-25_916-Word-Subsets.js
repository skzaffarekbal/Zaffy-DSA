// Source: https://leetcode.com/problems/word-subsets/description/?envType=daily-question&envId=2025-01-10

/* 
916. Word Subsets

You are given two string arrays words1 and words2.

A string b is a subset of string a if every letter in b occurs in a including multiplicity.

For example, "wrr" is a subset of "warrior" but is not a subset of "world".
A string a from words1 is universal if for every string b in words2, b is a subset of a.

Return an array of all the universal strings in words1. You may return the answer in any order.

Example 1:

Input: words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["e","o"]
Output: ["facebook","google","leetcode"]
Example 2:

Input: words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["l","e"]
Output: ["apple","google","leetcode"]

Constraints:

1 <= words1.length, words2.length <= 104
1 <= words1[i].length, words2[i].length <= 10
words1[i] and words2[i] consist only of lowercase English letters.
All the strings of words1 are unique.
*/

/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {
  let maxCharCount = Array(26).fill(0),
    result = [];

  for (let word of words2) {
    let charCount = Array(26).fill(0);
    for (let char of word) {
      charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for (let i = 0; i < 26; i++) {
      maxCharCount[i] = Math.max(maxCharCount[i], charCount[i]);
    }
  }

  for (let word of words1) {
    let charCount = Array(26).fill(0);
    let isUniversal = true;
    for (let char of word) {
      charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for (let i = 0; i < 26; i++) {
      if (charCount[i] < maxCharCount[i]) {
        isUniversal = false;
        break;
      }
    }

    if (isUniversal) {
      result.push(word);
    }
  }

  return result;
};

console.log(wordSubsets(['amazon', 'apple', 'facebook', 'google', 'leetcode'], ['e', 'o']));
// ["facebook","google","leetcode"]
// console.log(wordSubsets(["amazon", "apple", "facebook", "google", "leetcode"], ["l", "e"]));
// ["apple","google","leetcode"]
