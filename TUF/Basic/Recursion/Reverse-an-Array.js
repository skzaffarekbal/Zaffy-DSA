// Sources : https://www.geeksforgeeks.org/problems/reverse-an-array/0
/*
Reverse an Array
You are given an array of integers arr[]. Your task is to reverse the given array.

Note: Modify the array in place.

Examples:
Input: arr = [1, 4, 3, 2, 6, 5]
Output: [5, 6, 2, 3, 4, 1]
Explanation: The elements of the array are 1 4 3 2 6 5. After reversing the array, the first element goes to the last position, the second element goes to the second last position and so on. Hence, the answer is 

5 6 2 3 4 1.
Input: arr = [4, 5, 2]
Output: [2, 5, 4]
Explanation: The elements of the array are 4 5 2. The reversed array will be 2 5 4.

Input: arr = [1]
Output: [1]
Explanation: The array has only single element, hence the reversed array is same as the original.

Constraints:
1<=arr.size()<=105
0<=arr[i]<=105

Company Tags
Bloomberg, Facebook, TCS, Adobe, Google, Infosys, Capgemini, Morgan Stanley, Amazon, Microsoft, Apple, Yahoo, PayPal, Uber
*/
//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
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

function printArray(arr) {
  let s = '';
  for (let i of arr) {
    s += i + ' ';
  }
  console.log(s);
  console.log('~');
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let input1 = readLine()
      .split(' ')
      .map((x) => parseInt(x));
    let n = input1.length;
    let a = new Array(n);
    for (let i = 0; i < n; i++) {
      a[i] = input1[i];
    }
    let obj = new Solution();
    obj.reverseArray(a);
    printArray(a);
  }
}

// } Driver Code Ends

// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
  // Function to reverse the array.
  reverseArray(arr) {
    // your code here
    function reverse(start, end) {
      if (start >= end) return;
      else {
        let temp = arr[end];
        arr[end] = arr[start];
        arr[start] = temp;
        return reverse(start + 1, end - 1);
      }
    }
    reverse(0, arr.length - 1);
    return arr;
  }
}
