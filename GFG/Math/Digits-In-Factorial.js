/*
Digits In Factorial
Difficulty: EasyAccuracy: 29.7%Submissions: 153K+Points: 2
Given an integer N. Find the number of digits that appear in its factorial. 
Factorial is defined as, factorial(n) = 1*2*3*4……..*N and factorial(0) = 1.

Example 1:
Input: N = 5
Output: 3
Explanation: Factorial of 5 is 120.
Number of digits in 120 is 3 (1, 2, and 0)

Example 2:
Input: N = 120
Output: 199
Explanation: The number of digits in
120! is 199

Your Task:
You don't need to read input or print anything. Your task is to complete the function digitsInFactorial() that takes N as input parameter and returns number of digits in factorial of N.

Expected Time Complexity : O(N)
Expected Auxilliary Space : O(1)

Constraints:
1 ≤ N ≤ 105
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
    console.log(obj.digitsInFactorial(N));

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
  digitsInFactorial(N) {
    // code here
    let factorial = N,
      digit = 0;
    for (let i = 2; i < N; i++) factorial *= i;
    for (; factorial != 0; factorial = parseInt(factorial / 10)) ++digit;
    return digit;
  }
}

// Best Approach - Loop Only Once
// Time Complexity: O(N) - Loop through N numbers
/**
 * @param {number} N
 * @returns {number}
 */
class Solution {
  digitsInFactorial(N) {
    // code here
    if (N === 0 || N === 1) return 1;
    let logSum = 0;
    for (let i = 2; i <= N; i++) logSum += Math.log10(i);
    return Math.floor(logSum) + 1;
  }
}

/*
Dry Run for N = 10:

Step 1: Initialize logSum = 0

Step 2: Iterate from i = 2 to 10 and update logSum
---------------------------------------------------
i = 2  → logSum = log10(2)  = 0.3010
i = 3  → logSum += log10(3)  = 0.4771 → 0.3010 + 0.4771 = 0.7781
i = 4  → logSum += log10(4)  = 0.6021 → 0.7781 + 0.6021 = 1.3802
i = 5  → logSum += log10(5)  = 0.6990 → 1.3802 + 0.6990 = 2.0792
i = 6  → logSum += log10(6)  = 0.7782 → 2.0792 + 0.7782 = 2.8574
i = 7  → logSum += log10(7)  = 0.8451 → 2.8574 + 0.8451 = 3.7025
i = 8  → logSum += log10(8)  = 0.9031 → 3.7025 + 0.9031 = 4.6056
i = 9  → logSum += log10(9)  = 0.9542 → 4.6056 + 0.9542 = 5.5598
i = 10 → logSum += log10(10) = 1.0000 → 5.5598 + 1.0000 = 6.5598

Step 3: Compute the number of digits
-------------------------------------
Number of digits = floor(logSum) + 1
                 = floor(6.5598) + 1
                 = 6 + 1
                 = 7

Final Output:
-------------
digitsInFactorial(10) → 7
*/
