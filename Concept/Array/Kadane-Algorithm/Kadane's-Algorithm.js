/*
Kadane's Algorithm

Company Tags
Zoho, Flipkart, Morgan Stanley, Accolite, Amazon, Microsoft, Samsung, Snapdeal, 24*7 Innovation Labs, Citrix, D-E-Shaw, FactSet, Hike, Housing.com, MetLife, Ola Cabs, Oracle, Payu,Teradata, Visa, Walmart, Adobe, Google, Arcesium

Given an integer array arr[]. You need to find the maximum sum of a subarray.

Examples:

Input: arr[] = [2, 3, -8, 7, -1, 2, 3]
Output: 11
Explanation: The subarray {7, -1, 2, 3} has the largest sum 11.

Input: arr[] = [-2, -4]
Output: -2
Explanation: The subarray {-2} has the largest sum -2.

Input: arr[] = [5, 4, 1, 7, 8]
Output: 25
Explanation: The subarray {5, 4, 1, 7, 8} has the largest sum 25.

Constraints:
1 ≤ arr.size() ≤ 105
-109 ≤ arr[i] ≤ 104
*/

// Kadane's Algorithm
// Time complexity: O(n)
// Space complexity: O(1)

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
  for (let i = 0; i < t; i++) {
    const arr = readLine()
      .split(' ')
      .map((x) => parseInt(x));
    let obj = new Solution();
    let ans = obj.maxSubarraySum(arr);
    if (ans == -0) ans = 0;
    console.log(ans);
    console.log('~');
  }
}
// } Driver Code Ends

class Solution {
  /**
   * @param {number[]} arr
   * @returns {number}
   */
  maxSubarraySum(arr) {
    // Your code here
    if (arr.length === 0) return 0;
    if (arr.length === 1) return arr[0];

    let maxEnd = arr[0],
      maxRes = arr[0];
    for (let i = 1; i < arr.length; i++) {
      maxEnd = Math.max(maxEnd + arr[i], arr[i]);
      maxRes = Math.max(maxRes, maxEnd);
    }

    return maxRes;
  }
}
