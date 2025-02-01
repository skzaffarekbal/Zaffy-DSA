/*
Link : https://leetcode.com/problems/count-vowel-strings-in-ranges/description/?envType=daily-question&envId=2025-01-02
*/

/*
2559. Count Vowel Strings in Ranges

You are given a 0-indexed array of strings words and a 2D array of integers queries.

Each query queries[i] = [li, ri] asks us to find the number of strings present in the range li to ri (both inclusive) of words that start and end with a vowel.

Return an array ans of size queries.length, where ans[i] is the answer to the ith query.

Note that the vowel letters are 'a', 'e', 'i', 'o', and 'u'.

Example 1:

Input: words = ["aba","bcb","ece","aa","e"], queries = [[0,2],[1,4],[1,1]]
Output: [2,3,0]
Explanation: The strings starting and ending with a vowel are "aba", "ece", "aa" and "e".
The answer to the query [0,2] is 2 (strings "aba" and "ece").
to query [1,4] is 3 (strings "ece", "aa", "e").
to query [1,1] is 0.
We return [2,3,0].

Example 2:

Input: words = ["a","e","i"], queries = [[0,2],[0,1],[2,2]]
Output: [3,2,1]
Explanation: Every string satisfies the conditions, so we return [3,2,1].

Constraints:

1 <= words.length <= 105
1 <= words[i].length <= 40
words[i] consists only of lowercase English letters.
sum(words[i].length) <= 3 * 105
1 <= queries.length <= 105
0 <= li <= ri < words.length
*/

/*
Worst Approach O(n^2)
Can be optimized to O(n) by using Prefix Sum
*/
/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function (words, queries) {
  let wordsBoolean = [],
    length = words.length,
    result = [];
  let vowels = { a: true, e: true, i: true, o: true, u: true };

  for (let i = 0; i < length; i++) {
    if (words[i].length == 1) wordsBoolean[i] = vowels[words[i]] ? true : false;
    else
      wordsBoolean[i] = vowels[words[i][0]] && vowels[words[i][words[i].length - 1]] ? true : false;
  }

  for (let i = 0; i < queries.length; i++) {
    let count = 0;
    for (let j = queries[i][0]; j <= queries[i][1]; j++) {
      if (wordsBoolean[j]) count++;
    }
    result[i] = count;
  }
  return result;
};

/*
Worst Approach O(n)
Optimized from O(n^2) to O(n) by using Prefix Sum.
*/

/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function (words, queries) {
  let prefixSum = [],
    sum = 0,
    length = words.length,
    qLength = queries.length;
  let result = [];
  let vowels = { a: true, e: true, i: true, o: true, u: true };

  for (let i = 0; i < length; i++) {
    if (vowels[words[i][0]] && vowels[words[i][words[i].length - 1]]) {
      sum = sum + 1;
    }
    prefixSum[i] = sum;
  }

  for (let i = 0; i < qLength; i++) {
    let currentQuery = queries[i];
    result[i] =
      prefixSum[currentQuery[1]] - (currentQuery[0] == 0 ? 0 : prefixSum[currentQuery[0] - 1]);
  }
  return result;
};
