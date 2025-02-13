/*
GP Term

Given the first 2 terms A and B of a Geometric Series. The task is to find the Nth term of the series.

Example 1:
Input:
A = 2 
B = 3
N = 1
Output: 2
Explanation: The first term is already
given in the input as 2

Example 2:
Input:
A = 1
B = 2
N = 5
Output: 16
Explanation: Common ratio = 2,
Hence Fifth term is 1*(2)(5-1) = 24 = 16 .

Your Task:
You don't need to read input or print anything. Your task is to complete the function termOfGP() that takes A, B and N as parameter and returns Nth term of GP. The return value should be double that would be automatically converted to floor by the driver code.

Expected Time Complexity : O(logN)
Expected Auxilliary Space : O(1)

Constraints:
-100 <= A <= 100
-100 <= B <= 100
1 <= N <= 5
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
    let input_line = readLine()
      .split(' ')
      .map((x) => parseInt(x));
    let A = input_line[0];
    let B = input_line[1];
    let N = parseInt(readLine());
    let obj = new Solution();
    console.log(Math.floor(obj.termOfGP(A, B, N)));

    console.log('~');
  }
}

// } Driver Code Ends

//User function Template for javascript
/**
 * @param {number} A
 * @param {number} B
 * @param {number} N
 * @returns {number}
 */
class Solution {
  termOfGP(A, B, N) {
    // code here
    return A * this.power(B / A, N - 1);
  }

  power(n, p) {
    if (p === 0) return 1;
    if (p < 0) return 1 / this.power(n, -p);

    let temp = this.power(n, parseInt(p / 2));

    if (p % 2 === 0) return temp * temp;
    else return temp * temp * n;
  }
}
