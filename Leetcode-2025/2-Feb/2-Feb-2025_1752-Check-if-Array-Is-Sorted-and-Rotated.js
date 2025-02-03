/*
1752. Check if Array Is Sorted and Rotated

Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.

There may be duplicates in the original array.

Note: An array A rotated by x positions results in an array B of the same length such that A[i] == B[(i+x) % A.length], where % is the modulo operation.


Example 1:

Input: nums = [3,4,5,1,2]
Output: true
Explanation: [1,2,3,4,5] is the original sorted array.
You can rotate the array by x = 3 positions to begin on the the element of value 3: [3,4,5,1,2].
Example 2:

Input: nums = [2,1,3,4]
Output: false
Explanation: There is no sorted array once rotated that can make nums.
Example 3:

Input: nums = [1,2,3]
Output: true
Explanation: [1,2,3] is the original sorted array.
You can rotate the array by x = 0 positions (i.e. no rotation) to make nums.

Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100
*/

// Approach 1
// Time Complexity O(n^3)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  let length = nums.length;
  let temp = Array(length).fill(0);

  // Time Complexity O(n^3)
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      temp[j] = nums[(j + i) % length];
    }
    if (arraySortedOrNot(temp, length)) return true;
  }
  return false;
};

var arraySortedOrNot = function (arr, n) {
  if (n === 0 || n === 1) return true;
  for (let i = 0; i < n; i++) if (arr[i - 1] > arr[i]) return false;
  return true;
};

// Approach 2
// Time Complexity O(n)
/*
Optimized Algorithm for Checking Rotated Sorted Array

Algorithm:
1. Initialize a counter (count) to track the number of times the array is not in sorted order.
2. Iterate through the array from index 0 to n-1.
- Compare nums[i] with nums[(i + 1) % n] (circular comparison).
- If nums[i] > nums[(i + 1) % n], increment count.
3. Check the count value:
- If count is at most 1, return true (indicating a rotated sorted array).
- If count > 1, return false (not a rotated sorted array).

Understanding the Algorithm:
- A sorted rotated array can only have one break point where a larger number appears before a smaller one.
- The circular comparison nums[(i + 1) % n] ensures that the last element is compared with the first one.
- If more than one such break point exists, the array cannot be a rotated sorted array.

Example Walkthrough:

Example 1: nums = [3, 4, 5, 1, 2]
Comparisons:
3 < 4 ✅
4 < 5 ✅
5 > 1 ❌ → (Break Point 1)
1 < 2 ✅
2 < 3 ✅ (Circular check)
One break point → Return true ✅

Example 2: nums = [2, 1, 3, 4]
Comparisons:
2 > 1 ❌ → (Break Point 1)
1 < 3 ✅
3 < 4 ✅
4 < 2 ❌ (Circular check) → (Break Point 2)
Two break points → Return false ❌
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  let length = nums.length;
  let count = 0;

  // Time Complexity O(n)
  for (let i = 0; i < length; i++) if (nums[i] > nums[(i + 1) % length]) count++;

  return count <= 1;
};
