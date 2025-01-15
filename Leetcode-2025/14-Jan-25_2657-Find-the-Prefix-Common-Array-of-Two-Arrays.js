/*
Source: https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/?envType=daily-question&envId=2025-01-14
*/

/*
2657. Find the Prefix Common Array of Two Arrays

You are given two 0-indexed integer permutations A and B of length n.

A prefix common array of A and B is an array C such that C[i] is equal to the count of numbers that are present at or before the index i in both A and B.

Return the prefix common array of A and B.

A sequence of n integers is called a permutation if it contains all integers from 1 to n exactly once.

Example 1:

Input: A = [1,3,2,4], B = [3,1,2,4]
Output: [0,2,3,4]
Explanation: At i = 0: no number is common, so C[0] = 0.
At i = 1: 1 and 3 are common in A and B, so C[1] = 2.
At i = 2: 1, 2, and 3 are common in A and B, so C[2] = 3.
At i = 3: 1, 2, 3, and 4 are common in A and B, so C[3] = 4.
Example 2:

Input: A = [2,3,1], B = [3,1,2]
Output: [0,1,3]
Explanation: At i = 0: no number is common, so C[0] = 0.
At i = 1: only 3 is common in A and B, so C[1] = 1.
At i = 2: 1, 2, and 3 are common in A and B, so C[2] = 3.

Constraints:

1 <= A.length == B.length == n <= 50
1 <= A[i], B[i] <= n
It is guaranteed that A and B are both a permutation of n integers.
*/

// Approach 1
// Time Complexity: O(n^3)
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
  let length = A.length,
    prefixCommonArray = Array(A.length).fill(0);

  for (let i = 0; i < length; i++) {
    // O(n^3)
    let commonCount = 0;
    for (let iA = 0; iA <= i; iA++) {
      // O(n^2)
      for (let iB = 0; iB <= i; iB++) {
        // O(n)
        if (A[iA] == B[iB]) {
          commonCount++;
          break;
        }
      }
    }

    prefixCommonArray[i] = commonCount;
  }

  return prefixCommonArray;
};

// Approach 2
// Time Complexity: O(n^2)
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
  let length = A.length,
    prefixCommonArray = Array(A.length).fill(0);
  let bObj = {};

  for (let i = 0; i < length; i++) {
    // O(n^2)
    let commonCount = 0;
    bObj[B[i]] = true;
    for (let iA = 0; iA <= i; iA++) {
      // O(n)
      if (A[iA] in bObj) commonCount++;
    }

    prefixCommonArray[i] = commonCount;
  }

  return prefixCommonArray;
};

// Approach 3
// Time Complexity: O(n)
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
  let length = A.length,
    prefixCommonArray = Array(A.length).fill(0);
  let aObj = {},
    bObj = {};

  for (let i = 0; i < length; i++) {
    aObj[A[i]] = i;
    bObj[B[i]] = i;
  }

  for (let i = 0; i < length; i++) {
    let commonCount = 0;
    if (A[i] == B[i]) commonCount++;
    else {
      if (aObj[B[i]] <= i) commonCount++;
      if (bObj[A[i]] <= i) commonCount++;
    }
    commonCount = i > 0 ? prefixCommonArray[i - 1] + commonCount : commonCount;
    prefixCommonArray[i] = commonCount;
  }

  return prefixCommonArray;
};
