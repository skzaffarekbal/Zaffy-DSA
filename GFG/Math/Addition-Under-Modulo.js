// Source: https://www.geeksforgeeks.org/batch/dsa-4/track/DSASP-Mathematics/problem/addition-under-modulo

/*
Addition Under Modulo
Given two numbers a and b, find the sum of a and b. Since the sum can be very large, find the sum modulo 109+7.

Example 1:
Input:
a = 9223372036854775807
b = 9223372036854775807
Output: 582344006
Explanation: 
9223372036854775807 + 9223372036854775807 
= 18446744073709551614.
18446744073709551614 mod (109+7)
= 582344006

Example 2:
Input:
a = 1000000007
b = 1000000007
Output: 0
Explanation: 1000000007 + 1000000007 =
(2000000014) mod (109+7) = 0

Your Task:
You don't need to read input or print anything. Your task is to complete the function sumUnderModulo() that takes a and b as input parameters and returns sum of a and b under modulo 109+7.

Expected Time Complexity : O(1)
Expected Auxilliary Space :  O(1)

Constraints:
1 <= a,b <= 263-1
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
    let input_line = readLine().split(' ');
    let a = BigInt(input_line[0]);
    let b = BigInt(input_line[1]);
    let obj = new Solution();
    console.log(obj.sumUnderModulo(a, b).toString());

    console.log('~');
  }
}

// } Driver Code Ends

//User function Template for javascript

/**
 * @param {BigInt} a
 * @param {BigInt} b
 * @returns {BigInt}
 */
class Solution {
  sumUnderModulo(a, b) {
    // code here
    const m = 1000000007n;
    return ((BigInt(a) % m) + (BigInt(b) % m)) % m;
  }
}

// Sources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
/*
BigInt values represent integer values which are too high or too low to be represented by the number primitive.

A BigInt value, also sometimes just called a BigInt, is a bigint primitive, created by appending n to the end of an integer literal, or by calling the BigInt() function (without the new operator) and giving it an integer value or string value.

const previouslyMaxSafeInteger = 9007199254740991n;
const alsoHuge = BigInt(9007199254740991);
// 9007199254740991n

const hugeString = BigInt("9007199254740991");
// 9007199254740991n

const hugeHex = BigInt("0x1fffffffffffff");
// 9007199254740991n

const hugeOctal = BigInt("0o377777777777777777");
// 9007199254740991n

const hugeBin = BigInt(
  "0b11111111111111111111111111111111111111111111111111111",
);
// 9007199254740991n

BigInt values are similar to Number values in some ways, but also differ in a few key matters: A BigInt value cannot be used with methods in the built-in Math object and cannot be mixed with a Number value in operations; they must be coerced to the same type. Be careful coercing values back and forth, however, as the precision of a BigInt value may be lost when it is coerced to a Number value.
*/

// Multiplication Under Modulo
/**
 * @param {BigInt} a
 * @param {BigInt} b
 * @returns {BigInt}
 */
class Solution {
  multiplicationUnderModulo(a, b) {
    // code here
    const mod = 1000000007n;
    return ((BigInt(a) % mod) * (BigInt(b) % mod)) % mod;
  }
}
