/*
Primality Test

(Given a number N, Check if a number is prime or not. A prime number is a number which is only divisible by 1 and itself.)

A prime number is a number which is only divisible by 1 and itself.
Given number N check if it is prime or not.


Example 1:
Input:
N = 5
Output: True
Explanation: 5 is only divisible by 1 
and itself. So, 5 is a prime number.

Example 2:
Input:
N = 4
Output: False
Explanation: 4 is divisible by 2. 
So, 4 is not a prime number.

Your Task:
You don't need to read input or print anything. Your task is to complete the function isPrime() that takes N as input parameter and returns True if N is prime else returns False. 

Expected Time Complexity : O(N1/2)
Expected Auxilliary Space :  O(1)

Constraints:
1 <= N <= 109
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
    if (obj.isPrime(N)) console.log('Yes');
    else console.log('No');

    console.log('~');
  }
}
// } Driver Code Ends

/**
 * @param {number} N
 * @returns {boolean}
 */
class Solution {
  isPrime(N) {
    // code here
    if (N === 1) return false;

    for (let i = 1; i * i <= N; i++) if (N % i === 0) return false;

    return true;
  }
}

//User function Template for javascript
/**
 * @param {number} N
 * @returns {boolean}
 */
class Solution {
  isPrime(N) {
    // code here
    if (N === 1) return false;
    if (N === 2 || N === 3) return true;
    if (N % 2 === 0 || N % 3 === 0) return false;

    for (let i = 5; i * i <= N; i = i + 6) if (N % i === 0 || N % (i + 2) === 0) return false;

    return true;
  }
}

/**
 * Prime Number Check - Dry Run
 *
 * Function: Determines whether a number is prime.
 *
 * Algorithm Explanation:
 * 1️⃣ If N = 1, return false (1 is not prime).
 * 2️⃣ If N = 2 or 3, return true (smallest prime numbers).
 * 3️⃣ If N is divisible by 2 or 3, return false (not prime).
 * 4️⃣ Iterate using i = 5 up to √N, checking divisibility by (i) and (i + 2).
 *    - Why i += 6? Because all primes > 3 are of the form 6k ± 1.
 *    - If a number is divisible by any such i, it's NOT prime.
 * 5️⃣ If no divisors found, return true (it’s prime).
 */

// ✅ Test Case 1: N = 121
// Expected Output: false
console.log(new Solution().isPrime(121));

/**
 * Dry Run for N = 121
 * ------------------------------------
 * Step 1: 121 is NOT 1, 2, or 3.
 * Step 2: 121 is NOT even and NOT divisible by 3.
 * Step 3: Loop starts with i = 5 and runs while i * i <= 121.
 * - i = 5 → 5 * 5 = 25 <= 121 → 121 % 5 ≠ 0.
 * - i = 11 → 11 * 11 = 121 <= 121 → 121 % 11 == 0 ❌ (Divisible)
 * - Since 121 is divisible by 11, it is NOT prime.
 *
 * Result: false
 */

// ✅ Test Case 2: N = 1031
// Expected Output: true
console.log(new Solution().isPrime(1031));

/**
 * Dry Run for N = 1031
 * ------------------------------------
 * Step 1: 1031 is NOT 1, 2, or 3.
 * Step 2: 1031 is NOT even and NOT divisible by 3.
 * Step 3: Loop starts with i = 5 and runs while i * i <= 1031.
 * - i = 5 → 5 * 5 = 25 <= 1031 → 1031 % 5 ≠ 0.
 * - i = 11 → 11 * 11 = 121 <= 1031 → 1031 % 11 ≠ 0.
 * - i = 17 → 17 * 17 = 289 <= 1031 → 1031 % 17 ≠ 0.
 * - i = 23 → 23 * 23 = 529 <= 1031 → 1031 % 23 ≠ 0.
 * - i = 29 → 29 * 29 = 841 <= 1031 → 1031 % 29 ≠ 0.
 * - i = 35 → 35 * 35 = 1225 > 1031 (Loop stops).
 * - No divisors found → 1031 is PRIME ✅.
 *
 * Result: true
 */