// Sources: https://www.geeksforgeeks.org/problems/count-digits5716/1
/*
Count Digits

Given a positive integer n, count the number of digits in n that divide n evenly (i.e., without leaving a remainder). Return the total number of such digits.

A digit d of n divides n evenly if the remainder when n is divided by d is 0 (n % d == 0).
Digits of n should be checked individually. If a digit is 0, it should be ignored because division by 0 is undefined.

Examples :

Input: n = 12
Output: 2
Explanation: 1, 2 when both divide 12 leaves remainder 0.
Input: n = 2446
Output: 1
Explanation: Here among 2, 4, 6 only 2 divides 2446 evenly while 4 and 6 do not.
Input: n = 23
Output: 0
Explanation: 2 and 3, none of them divide 23 evenly.
Constraints:
1<= n <=105
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
    let res = obj.evenlyDivides(N);
    console.log(res);

    console.log('~');
  }
}

// } Driver Code Ends

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number} n
 * @returns {number}
 */

class Solution {
  // Function to check whether the number evenly divides n.
  evenlyDivides(n) {
    // code here
    let num = n,
      count = 0;
    while (num > 0) {
      let digit = num % 10;
      num = parseInt(num / 10);
      if (n % digit == 0) count++;
    }

    return count;
  }
}
