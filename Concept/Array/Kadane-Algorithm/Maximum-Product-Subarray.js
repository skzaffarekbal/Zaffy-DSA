// Source: https://www.geeksforgeeks.org/problems/maximum-product-subarray3604/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=practice_card
/*
Maximum Product Subarray

Company Tags: Morgan Stanley, Amazon, Microsoft, OYO Rooms, D-E-Shaw, Google

Given an array arr[] that contains positive and negative integers (may contain 0 as well). Find the maximum product that we can get in a subarray of arr[].

Note: It is guaranteed that the output fits in a 32-bit integer.

Examples
Input: arr[] = [-2, 6, -3, -10, 0, 2]
Output: 180
Explanation: The subarray with maximum product is {6, -3, -10} with product = 6 * (-3) * (-10) = 180.

Input: arr[] = [-1, -3, -10, 0, 6]
Output: 30
Explanation: The subarray with maximum product is {-3, -10} with product = (-3) * (-10) = 30.

Input: arr[] = [2, 3, 4] 
Output: 24 
Explanation: For an array with all positive elements, the result is product of all elements. 

Constraints:
1 ≤ arr.size() ≤ 106
-10  ≤  arr[i]  ≤  10
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

/* Function to print an array */
function printArray(arr, size) {
  let i;
  let s = '';
  for (i = 0; i < size; i++) {
    s += arr[i] + ' ';
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let arr = readLine()
      .split(' ')
      .map((x) => parseInt(x, 10));
    let obj = new Solution();
    let res = obj.maxProduct(arr);
    if (res === -0) {
      res = 0;
    }
    console.log(res.toString());
  }
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number[]} arr
 * @return {number}
 */

class Solution {
  maxProduct(arr) {
    // code here
    if (arr.length === 0) return 0;
    if (arr.length === 1) return arr[0];

    let maxEnd = arr[0],
      minEnd = arr[0],
      maxRes = arr[0];
    for (let i = 1; i < arr.length; i++) {
      let temp = Math.max(maxEnd * arr[i], minEnd * arr[i], arr[i]);
      minEnd = Math.min(maxEnd * arr[i], minEnd * arr[i], arr[i]);
      maxEnd = temp;
      maxRes = Math.max(maxRes, maxEnd);
    }

    return maxRes;
  }
}
