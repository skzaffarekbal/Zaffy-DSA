/*
2342. Max Sum of a Pair With Equal Sum of Digits
Medium - 1129

You are given a 0-indexed array nums consisting of positive integers. You can choose two indices i and j, such that i != j, and the sum of digits of the number nums[i] is equal to that of nums[j].

Return the maximum value of nums[i] + nums[j] that you can obtain over all possible indices i and j that satisfy the conditions.

Example 1:
Input: nums = [18,43,36,13,7]
Output: 54
Explanation: The pairs (i, j) that satisfy the conditions are:
- (0, 2), both numbers have a sum of digits equal to 9, and their sum is 18 + 36 = 54.
- (1, 4), both numbers have a sum of digits equal to 7, and their sum is 43 + 7 = 50.
So the maximum sum that we can obtain is 54.

Example 2:
Input: nums = [10,12,19,14]
Output: -1
Explanation: There are no two numbers that satisfy the conditions, so we return -1.

Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
  let sumMap = new Map(),
    maxOfTotal = -1;
  for (let num of nums) {
    let n = num,
      numDigitSum = 0;

    // Compute sum of digits
    for (; n != 0; n = Math.floor(n / 10)) numDigitSum += n % 10;

    // Get the existing max and maxSum for this digit sum
    if (sumMap.has(numDigitSum)) {
      let { max, maxSum } = sumMap.get(numDigitSum);

      // Update maxSum and max value
      maxSum = Math.max(maxSum, num + max);
      max = Math.max(max, num);

      sumMap.set(numDigitSum, { maxSum, max });
      maxOfTotal = Math.max(maxOfTotal, maxSum);
    } else {
      sumMap.set(numDigitSum, { maxSum: num, max: num });
    }
  }
  return maxOfTotal;
};

// Space & time Complexity optimized one

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
  let sumMap = new Map(),
    maxOfTotal = -1;
  for (let num of nums) {
    let n = num,
      numDigitSum = 0;

    // Compute sum of digits
    for (; n != 0; n = Math.floor(n / 10)) numDigitSum += n % 10;

    // Get the existing max for this digit sum
    if (sumMap.has(numDigitSum)) {
      // Update maxOfTotal & existing max for this digit sum
      maxOfTotal = Math.max(maxOfTotal, sumMap.get(numDigitSum) + num);
      sumMap.set(numDigitSum, Math.max(sumMap.get(numDigitSum), num));
    } else {
      sumMap.set(numDigitSum, num);
    }
  }
  return maxOfTotal;
};

// ✅ Dry run of the code with the input [18,43,36,13,7]
/*
Initial state:
nums = [18, 43, 36, 13, 7]
sumMap = new Map()
maxOfTotal = -1

Iteration 1: num = 18
Sum of digits: 1 + 8 = 9
sumMap = { 9 → 18 }

Iteration 2: num = 43
Sum of digits: 4 + 3 = 7
sumMap = { 9 → 18, 7 → 43 }

Iteration 3: num = 36
Sum of digits: 3 + 6 = 9
Found existing sum 9 → 18
maxOfTotal = max(-1, 18 + 36) = 54
Update sumMap: { 9 → 36, 7 → 43 }

Iteration 4: num = 13
Sum of digits: 1 + 3 = 4
sumMap = { 9 → 36, 7 → 43, 4 → 13 }

Iteration 5: num = 7
Sum of digits: 7
sumMap = { 9 → 36, 7 → 43, 4 → 13, 7 → 43 } (unchanged)

Final Output: **54**
*/

// ✅ Dry run of the code with the input [18, 43, 36, 13, 70, 63, 7]
/* 
Initial state:
nums = [18, 43, 36, 13, 70, 63, 7]
sumMap = new Map()
maxOfTotal = -1

Iteration 1: num = 18
Sum of digits: 1 + 8 = 9
sumMap = { 9 → 18 }

Iteration 2: num = 43
Sum of digits: 4 + 3 = 7
sumMap = { 9 → 18, 7 → 43 }

Iteration 3: num = 36
Sum of digits: 3 + 6 = 9
Found existing sum 9 → 18
maxOfTotal = max(-1, 18 + 36) = 54
Update sumMap: { 9 → 36, 7 → 43 }

Iteration 4: num = 13
Sum of digits: 1 + 3 = 4
sumMap = { 9 → 36, 7 → 43, 4 → 13 }

Iteration 5: num = 70
Sum of digits: 7 + 0 = 7
Found existing sum 7 → 43
maxOfTotal = max(54, 43 + 70) = 113
Update sumMap: { 9 → 36, 7 → 70, 4 → 13 }

Iteration 6: num = 63
Sum of digits: 6 + 3 = 9
Found existing sum 9 → 36
maxOfTotal = max(113, 36 + 63) = 113
Update sumMap: { 9 → 63, 7 → 70, 4 → 13 }

Iteration 7: num = 7
Sum of digits: 7
sumMap = { 9 → 63, 7 → 70, 4 → 13 } (unchanged)

Final Output: **113**
*/

// ✅ Dry run of the code with the input [10, 12, 19, 14]
/* 
Initial state:
nums = [10, 12, 19, 14]
sumMap = new Map()
maxOfTotal = -1

Iteration 1: num = 10
Sum of digits: 1 + 0 = 1
sumMap = { 1 → 10 }

Iteration 2: num = 12
Sum of digits: 1 + 2 = 3
sumMap = { 1 → 10, 3 → 12 }

Iteration 3: num = 19
Sum of digits: 1 + 9 = 10
sumMap = { 1 → 10, 3 → 12, 10 → 19 }

Iteration 4: num = 14
Sum of digits: 1 + 4 = 5
sumMap = { 1 → 10, 3 → 12, 10 → 19, 5 → 14 }

No two numbers share the same digit sum, so `maxOfTotal = -1`

Final Output: **-1**
*/
