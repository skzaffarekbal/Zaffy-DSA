/*
Trailing zeroes in factorial

For an integer n, find the number of trailing zeroes in n!.

Examples :

Input: n = 5
Output: 1
Explanation: 5! = 120 so the number of trailing zero is 1.
Input: n = 4
Output: 0
Explanation: 4! = 24 so the number of trailing zero is 0.
Input: n = 43
Output: 9
Constraints:
1 <= n <= 109
*/
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
    let n = parseInt(readLine());
    let obj = new Solution();
    let res = obj.trailingZeroes(n);
    console.log(res);

    console.log('~');
  }
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {Number} n
 * @returns {Number}
 */

class Solution {
  trailingZeroes(n) {
    // code here
    let count = 0;
    for (let i = 5; i <= n; i = i * 5) {
      count += parseInt(n / i);
    }
    return count;
  }
}
