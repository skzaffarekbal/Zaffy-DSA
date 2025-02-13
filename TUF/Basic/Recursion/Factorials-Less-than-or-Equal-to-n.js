// Source: https://www.geeksforgeeks.org/problems/find-all-factorial-numbers-less-than-or-equal-to-n3548/0
/*
Factorials Less than or Equal to n
A number n is called a factorial number if it is the factorial of a positive integer. For example, the first few factorial numbers are 1, 2, 6, 24, 120,
Given a number n, the task is to return the list/vector of the factorial numbers smaller than or equal to n.

Examples:

Input: n = 3
Output: 1 2
Explanation: The first factorial number is 1 which is less than equal to n. The second number is 2 which is less than equal to n,but the third factorial number is 6 which is greater than n. So we print only 1 and 2.

Input: n = 6
Output: 1 2 6
Explanation: The first three factorial numbers are less than equal to n but the fourth factorial number 24 is greater than n. So we print only first three factorial numbers.

Constraints:
1<=n<=1018
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
    let N = parseInt(readLine());
    let obj = new Solution();
    let res = obj.factorialNumbers(N);
    let s = '';
    for (let it of res) {
      s += it + ' ';
    }
    console.log(s);
    console.log('~');
  }
}
// } Driver Code Ends

// User function Template for javascript
/**
 * @param {number} N
 * @returns {number}
 */

class Solution {
  // Function to calculate the factorial of a number.
  factorialNumbers(n) {
    // your code here
    let result = [];
    function factorial(num) {
      if (num === 0 || num === 1) return 1;
      return num * factorial(num - 1);
    }

    for (let i = 1; ; i++) {
      let fact = factorial(i);
      if (fact > n) break;
      result.push(fact);
    }
    return result;
  }
}
