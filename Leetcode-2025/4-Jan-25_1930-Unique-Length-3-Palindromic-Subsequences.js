/*
Link : https://leetcode.com/problems/unique-length-3-palindromic-subsequences/description/?envType=daily-question&envId=2025-01-04
*/

/*
1930. Unique Length-3 Palindromic Subsequences
Solved
Medium
Topics
Companies
Hint
Given a string s, return the number of unique palindromes of length three that are a subsequence of s.

Note that even if there are multiple ways to obtain the same subsequence, it is still only counted once.

A palindrome is a string that reads the same forwards and backwards.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".

Example 1:

Input: s = "aabca"
Output: 3
Explanation: The 3 palindromic subsequences of length 3 are:
- "aba" (subsequence of "aabca")
- "aaa" (subsequence of "aabca")
- "aca" (subsequence of "aabca")
Example 2:

Input: s = "adc"
Output: 0
Explanation: There are no palindromic subsequences of length 3 in "adc".
Example 3:

Input: s = "bbcbaba"
Output: 4
Explanation: The 4 palindromic subsequences of length 3 are:
- "bbb" (subsequence of "bbcbaba")
- "bcb" (subsequence of "bbcbaba")
- "bab" (subsequence of "bbcbaba")
- "aba" (subsequence of "bbcbaba")

Constraints:

3 <= s.length <= 105
s consists of only lowercase English letters.
*/


/*
Worst Approach O(n^3)
*/
/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
    let palindromes = {}, length = s.length, i = 0;
    for (let i = 0; i < length - 2; i++) {
        for (let j = i + 2; j < length; j++) {
            if (s[i] == s[j]) {
                let k = i + 1;
                while (k < j) {
                    if (!palindromes[s[i] + s[k] + s[j]]) {
                        palindromes[s[i] + s[k] + s[j]] = { i, k, j };
                    }
                    k++;
                }
            }
        }
    }
    return Object.keys(palindromes).length;
};


/*
Best Approach O(26n) = O(n)

-> Create 2 alphabet array first and last of length 26 fill with -1 in each position which store 
first index position on a character in first Array and Last index position in last character array.
-> Loop from 0 to 26 and check first array which have value, then check same index in last array
if both are same then skip that character (That mean the character have only 1 place in the String)
-> Then Loop over string from first[index]+1 to last[index] and store all character in Set. 
-> Set count indicates number of palindromes. 
*/
/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
    let first = Array(26).fill(-1), last = Array(26).fill(-1), length = s.length;
    let palindromeCount = 0;
    for (let i = 0; i < length; i++) {
        let charIndex = s[i].charCodeAt(0) - 'a'.charCodeAt(0); // ASCII value
        if (first[charIndex] == -1) {
            first[charIndex] = i
        }
        last[charIndex] = i;
    }

    for (let i = 0; i < 26; i++) {
        if (first[i] == -1 || first[i] == last[i]) continue;
        let set = new Set();
        for (let j = first[i] + 1; j < last[i]; j++) {
            set.add(s[j]);
        }
        palindromeCount += set.size;
    }

    return palindromeCount;
};
