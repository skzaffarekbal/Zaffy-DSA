/*
Exactly 3 Divisors

Given a positive integer value n. The task is to find how many numbers less than or equal to n have numbers of divisors exactly equal to 3.

Examples:
Input: n = 6
Output: 1
Explanation: The only number less than 6 with 3 divisors is 4 which has 1, 2 and 4 as divisors.

Input: n = 10
Output: 2
Explanation: 4 and 9 have 3 divisors.

Your Task:
You don't need to read input or print anything. Your task is to complete the function exactly3Divisors() that takes n as input parameter and returns count of numbers less than or equal to n with exactly 3 divisors.

Expected Time Complexity : O(n1/2 * n1/4)
Expected Auxilliary Space :  O(1)

Constraints :
1 <= n <= 109
*/

//{ Driver Code Starts
//Initial Template for javascript
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
    console.log(obj.exactly3Divisors(N));

    console.log('~');
  }
}

// } Driver Code Ends

//User function Template for javascript

/**
 * @param {number} N
 * @returns {number}
 */
class Solution {
  exactly3Divisors(N) {
    // code here
    let total3Div = 0;
    for (let i = 2; i * i <= N; i++) {
      if (this.isPrime(i) && i * i <= N) total3Div++;
    }
    return total3Div;
  }

  isPrime(n) {
    if (n === 1) return false;
    if (n === 2 || n === 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i = i + 6) if (n % i === 0 || n % (i + 2) === 0) return false;

    return true;
  }
}

/*
A number has exactly 3 divisors if and only if it is a square of a prime number.

Why?
If a number X has exactly 3 divisors, it must be of the form p² where p is a prime number.
The divisors of p² are: {1, p, p²} (Exactly 3 divisors).

Example:
4 = 2² → {1, 2, 4} → 3 divisors
9 = 3² → {1, 3, 9} → 3 divisors
16 = 4² → {1, 2, 4, 8, 16} → 5 divisors (Not valid!)
*/
