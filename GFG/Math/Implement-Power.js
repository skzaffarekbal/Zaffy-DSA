// Source: https://www.geeksforgeeks.org/problems/powx-n/1

/*
Implement Pow
Implement the function power(b, e), which calculates b raised to the power of e (i.e. be).

Examples:
Input: b = 3.00000, e = 5
Output: 243.00000
Input: b = 0.55000, e = 3
Output: 0.16638
Input: b = -0.67000, e = -7
Output: -16.49971

Constraints:
-100.0 < b < 100.0
-109 <= e <= 109
Either b is not zero or e > 0.
-104 <= be <= 104

Expected Complexities
Time Complexity: O(log n)
Auxiliary Space: O(log n)
*/

//{ Driver Code Starts
// Initial Template for javascript

// Position this line where user code will be pasted.

// Function to handle input and output
function main() {
  const readline = require('readline');

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  let tokens = [];

  rl.on('line', (line) => {
    // Split the input line into tokens separated by whitespace
    tokens = tokens.concat(line.trim().split(/\s+/));
  }).on('close', () => {
    let idx = 0;
    const t = parseInt(tokens[idx++], 10); // Number of test cases
    const sol = new Solution();

    for (let i = 0; i < t; i++) {
      // Parse base and exponent for each test case
      const b = parseFloat(tokens[idx++]);
      const e = parseInt(tokens[idx++], 10);

      // Compute the power and format the output to 5 decimal places
      const result = sol.power(b, e).toFixed(5);
      console.log(result);
      console.log('~');
    }

    process.exit(0);
  });
}

// Invoke the main function to start the program
main();

// } Driver Code Ends

// Time Complexity: O(n)
// Space Complexity: O(1)
class Solution {
  /**
   * Computes b raised to the power e recursively.
   * @param {number} b - The base.
   * @param {number} e - The exponent.
   * @returns {number} - The result of b^e.
   */
  power(b, e) {
    // Code here
    let pow = 1;

    // Multiply b for e times
    for (let i = 0; i < Math.abs(e); i++) pow = pow * b;

    if (e < 0) return 1 / pow;

    return pow;
  }
}

// User function Template for javascript
// Time Complexity: O(log n)
class Solution {
  /**
   * Computes b raised to the power e recursively.
   * @param {number} b - The base.
   * @param {number} e - The exponent.
   * @returns {number} - The result of b^e.
   */
  power(b, e) {
    // Code here
    if (e === 0) return 1;
    if (e < 0) return 1 / this.power(b, -e);

    let temp = this.power(b, parseInt(e / 2));

    if (e % 2 === 0) return temp * temp;
    else return b * temp * temp;
  }
}

/**
 * Recursive Power Function - Dry Run
 *
 * Function: Computes b raised to the power e recursively.
 *
 * Algorithm Explanation:
 * 1️⃣ Base Case: If e == 0, return 1 (Any number to power 0 is 1).
 * 2️⃣ If exponent (e) is negative, convert it to positive and compute 1 / power(b, -e).
 * 3️⃣ Recursively compute power(b, e/2) and store it in temp.
 * 4️⃣ If e is even, return temp * temp.
 * 5️⃣ If e is odd, return b * temp * temp.
 *
 * The recursion reduces the exponent by half in each step, making it efficient.
 */

// ✅ Test Case 1: b = 3.00000, e = 5
// Expected Output: 243.00000
console.log(new Solution().power(3.0, 5));

/**
 * Dry Run for b = 3.00000, e = 5
 * -----------------------------------
 * power(3, 5) → Odd, calls power(3, 2)
 *   power(3, 2) → Even, calls power(3, 1)
 *     power(3, 1) → Odd, calls power(3, 0)
 *       power(3, 0) = 1 ✅ (Base case)
 *     power(3, 1) = 3 * 1 * 1 = 3 ✅
 *   power(3, 2) = 3 * 3 = 9 ✅
 * power(3, 5) = 3 * 9 * 9 = 243 ✅
 *
 * Result: 243.00000
 */

// ✅ Test Case 2: b = 0.55000, e = 3
// Expected Output: 0.16638
console.log(new Solution().power(0.55, 3));

/**
 * Dry Run for b = 0.55000, e = 3
 * -----------------------------------
 * power(0.55, 3) → Odd, calls power(0.55, 1)
 *   power(0.55, 1) → Odd, calls power(0.55, 0)
 *     power(0.55, 0) = 1 ✅ (Base case)
 *   power(0.55, 1) = 0.55 * 1 * 1 = 0.55 ✅
 * power(0.55, 3) = 0.55 * 0.55 * 0.55 = 0.16638 ✅
 *
 * Result: 0.16638
 */

// ✅ Test Case 3: b = -0.67000, e = -7
// Expected Output: -16.49971
console.log(new Solution().power(-0.67, -7));

/**
 * Dry Run for b = -0.67000, e = -7
 * -----------------------------------
 * power(-0.67, -7) → Calls power(-0.67, 7) and returns 1 / result.
 * power(-0.67, 7) → Odd, calls power(-0.67, 3)
 *   power(-0.67, 3) → Odd, calls power(-0.67, 1)
 *     power(-0.67, 1) → Odd, calls power(-0.67, 0)
 *       power(-0.67, 0) = 1 ✅ (Base case)
 *     power(-0.67, 1) = -0.67 * 1 * 1 = -0.67 ✅
 *   power(-0.67, 3) = -0.67 * (-0.67 * -0.67) = -0.30076 ✅
 * power(-0.67, 7) = -0.67 * (-0.30076 * -0.30076) = -0.06061 ✅
 * power(-0.67, -7) = 1 / -0.06061 = -16.49971 ✅
 *
 * Result: -16.49971
 */
