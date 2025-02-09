// Sources : https://www.geeksforgeeks.org/problems/minimum-number-of-jumps-1587115620/1
// Company Tags : Moonfrog LabsFlipkartAmazonMicrosoftHousing.comWalmartAdobeGoogle

/*
Minimum Jumps
Difficulty: MediumAccuracy: 11.91%Submissions: 946K+Points: 4
You are given an array arr[] of non-negative numbers. Each number tells you the maximum number of steps you can jump forward from that position.

For example:

If arr[i] = 3, you can jump 1 step, 2 steps, or 3 steps forward from position i.
If arr[i] = 0, you cannot jump forward from that position.
Your task is to find the minimum number of jumps needed to move from the first position in the array to the last position.

Note:  Return -1 if you can't reach the end of the array.

Examples : 

Input: arr[] = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]
Output: 3 
Explanation: First jump from 1st element to 2nd element with value 3. From here we jump to 5th element with value 9, and from here we will jump to the last. 

Input: arr = [1, 4, 3, 2, 6, 7]
Output: 2 
Explanation: First we jump from the 1st to 2nd element and then jump to the last element.

Input: arr = [0, 10, 20]
Output: -1
Explanation: We cannot go anywhere from the 1st element.

Constraints:
2 ≤ arr.size() ≤ 106
0 ≤ arr[i] ≤ 105
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
    // let n = parseInt(readLine());
    // let arr = new Array(n);
    let arr = readLine()
      .split(' ')
      .map((x) => parseInt(x));
    // for (let j = 0; j < n; j++) {
    //     arr[j] = inputArr2[j];
    // }
    let obj = new Solution();
    let res = obj.minJumps(arr);
    console.log(res);
  }
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number[]} arr
 * @return {number}
 */

class Solution {
  minJumps(arr) {
    // code here
    let length = arr.length;

    if (length === 1) return 0;
    if (arr[0] === 0) return -1;

    let jump = 0,
      maxReach = arr[0],
      step = arr[0];
    for (let i = 1; i < length; i++) {
      if (i === length - 1) return jump + 1;

      maxReach = Math.max(maxReach, i + arr[i]);
      step--;

      // If no more steps left, we must jump.
      if (step === 0) {
        jump++;
        step = maxReach - i;

        // If we can't move further, return -1.
        if (step <= 0) return -1;
      }
    }

    // If we exit the loop, it means we can't reach the last index.
    return -1;
  }
}

/**
 * Dry Run of minJumps Function
 * ===========================================
 * Given an array arr[], where each element represents
 * the max number of steps you can jump forward,
 * find the minimum number of jumps needed to reach the end.
 * If the last index is unreachable, return -1.
 */

// ✅ Test Case 1: arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]
// Expected Output: 3

/*
Step | Index (i) | arr[i] | Max Reach | Steps Left | Jumps
------------------------------------------------------------
Init |    -      |   -    |     1     |     1     |   0  
  1  |     1     |   3    |     4     |     0     |   1  ⬅️ Jump!
  2  |     2     |   5    |     7     |     3     |   1
  3  |     3     |   8    |    11     |     2     |   1
  4  |     4     |   9    |    13     |     1     |   1
  5  |     5     |   2    |    13     |     0     |   2  ⬅️ Jump!
  6  |     6     |   6    |    13     |     5     |   2
  7  |     7     |   7    |    14     |     4     |   2
  8  |     8     |   6    |    14     |     3     |   2
  9  |     9     |   8    |    17     |     2     |   2
 10  |    10     |   9    |    19     |     1     |   3  ✅ (Reached last index)
*/

// ✅ Test Case 2: arr = [0, 10, 20]
// Expected Output: -1
/*
Step | Index (i) | arr[i] | Max Reach | Steps Left | Jumps
------------------------------------------------------------
Init |    -      |   -    |     0     |     0     |   0  
Fail |     0     |   0    |     0     |     0     |  -1  ❌ (Can't move forward)
*/

// ✅ Test Case 3: arr = [2, 3, 1, 1, 4]
// Expected Output: 2

/*
Step | Index (i) | arr[i] | Max Reach | Steps Left | Jumps
------------------------------------------------------------
Init |    -      |   -    |     2     |     2     |   0  
  1  |     1     |   3    |     4     |     1     |   1
  2  |     2     |   1    |     4     |     0     |   1  ⬅️ Jump!
  3  |     3     |   1    |     4     |     1     |   2  ✅ (Reached last index)
*/

// ✅ Test Case 4: arr = [3, 2, 1, 0, 4, 5, 6]
// Expected Output: -1

/*
Step | Index (i) | arr[i] | Max Reach | Steps Left | Jumps
------------------------------------------------------------
Init |    -      |   -    |     3     |     3     |   0  
  1  |     1     |   2    |     3     |     2     |   0  
  2  |     2     |   1    |     3     |     1     |   0  
  3  |     3     |   0    |     3     |     0     |   1  ⬅️ Jump!
Fail |     4     |   4    |     3     |    -1     |  -1  ❌ (Stuck at index 3)
*/

// ✅ Test Case 5: arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
// Expected Output: 1

/*
Step | Index (i) | arr[i] | Max Reach | Steps Left | Jumps
------------------------------------------------------------
Init |    -      |   -    |    10     |    10     |   0  
  1  |     1     |   9    |    10     |     9     |   0  
  2  |     2     |   8    |    10     |     8     |   0  
  3  |     3     |   7    |    10     |     7     |   0  
  4  |     4     |   6    |    10     |     6     |   0  
  5  |     5     |   5    |    10     |     5     |   0  
  6  |     6     |   4    |    10     |     4     |   0  
  7  |     7     |   3    |    10     |     3     |   0  
  8  |     8     |   2    |    10     |     2     |   0  
  9  |     9     |   1    |    10     |     1     |   0  
 10  |    10     |   0    |    10     |     0     |   1  ✅ (Reached last index)
*/
