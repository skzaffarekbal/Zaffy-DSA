/*
Sum 1 to n Divisors
Difficulty: EasyAccuracy: 43.37%Submissions: 198K+Points: 2
Given a positive integer n, The task is to find the value of Σi F(i) where i is from 1 to n and function F(i) is defined as the sum of all divisors of i.

Examples:

Input: n = 4
Output: 15
Explanation:
F(1) = 1
F(2) = 1 + 2 = 3
F(3) = 1 + 3 = 4
F(4) = 1 + 2 + 4 = 7
So, F(1) + F(2) + F(3) + F(4)
    = 1 + 3 + 4 + 7 = 15

Input: n = 5
Output: 21
Explanation:
F(1) = 1
F(2) = 1 + 2 = 3
F(3) = 1 + 3 = 4
F(4) = 1 + 2 + 4 = 7
F(5) = 1 + 5 = 6
So,  F(1) + F(2) + F(3) + F(4) + F(5)
    = 1 + 3 + 4 + 7 + 6 = 21

Input: n = 1
Output: 1
Explanation:
F(1) = 1
So,  F(1) = 1 

Constraints:
1 <= n <= 105
*/

// Solution 1: Brute Force
// Time Complexity: O(n^2)
// Space Complexity: O(1)

//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', (_) => {
  inputString = inputString
    .trim()
    .split('\n')
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let N = parseInt(readLine());
    let obj = new Solution();
    let res = obj.sumOfDivisors(N);
    console.log(res);

    console.log('~');
  }
}

// } Driver Code Ends

// User function Template for javascript
/**
 * @param {number} n
 * @returns {number}
 */

class Solution {
  // Function to find sum of divisors
  sumOfDivisors(n) {
    // your code here
    let totalSum = 0;
    for (let i = 1; i <= n; i++) {
      let sum = 0;
      for (let j = 1; j <= i / 2; j++) {
        if (i % j == 0) sum += j;
      }
      totalSum += sum + i;
    }
    return totalSum;
  }
}

// Solution 2: Optimized
// Time Complexity: O(n)
// Space Complexity: O(1)

class Solution {
  // Function to find sum of divisors
  sumOfDivisors(n) {
    // your code here
    let totalSum = 0;
    for (let i = 1; i <= n; i++) totalSum += i * parseInt(n / i);
    return totalSum;
  }
}
