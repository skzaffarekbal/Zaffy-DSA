// Source: https://www.geeksforgeeks.org/problems/lcm-and-gcd4516/1
/*
LCM And GCD
Difficulty: BasicAccuracy: 37.02%Submissions: 195K+Points: 1
Given two integers a and b, write a function lcmAndGcd() to compute their LCM and GCD. The function inputs two integers a and b and returns a list containing their LCM and GCD.

Examples:

Input: a = 5 , b = 10
Output: [10, 5]
Explanation: LCM of 5 and 10 is 10, while their GCD is 5.

Input: a = 14 , b = 8
Output: [56, 2]
Explanation: LCM of 14 and 8 is 56, while their GCD is 2.

Input: a = 1 , b = 1
Output: [1, 1]
Explanation: LCM of 1 and 1 is 1, while their GCD is 1.

Expected Time Complexity: O(log(min(a, b))
Expected Auxiliary Space: O(1)

Constraints:
1 <= a, b <= 109
*/

//{ Driver Code Starts
// Initial Template for javascript

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
    let a = parseInt(readLine());

    let b = parseInt(readLine());

    let obj = new Solution();
    let res = obj.lcmAndGcd(a, b);

    let S_res = '';
    for (let i = 0; i < res.length; i++) {
      S_res += res[i];
      S_res += ' ';
    }
    console.log(S_res);
    console.log('~');
  }
}

// Position this line where user code will be pasted.

// } Driver Code Ends

class Solution {
  /**
    * @param number a
    * @param number b

    * @returns number[]
    */
  lcmAndGcd(a, b) {
    // code here
    return [(a * b) / this.gcd(a, b), this.gcd(a, b)];
  }

  gcd(a, b) {
    if (b === 0) return a;
    return this.gcd(b, a % b);
  }
}
