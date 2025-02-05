// Source: https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/description/?envType=daily-question&envId=2025-02-03

/*
3105. Longest Strictly Increasing or Strictly Decreasing Subarray
You are given an array of integers nums. Return the length of the longest 
subarray of nums which is either strictly increasing or strictly decreasing.


Example 1:

Input: nums = [1,4,3,3,2]

Output: 2

Explanation:

The strictly increasing subarrays of nums are [1], [2], [3], [3], [4], and [1,4].

The strictly decreasing subarrays of nums are [1], [2], [3], [3], [4], [3,2], and [4,3].

Hence, we return 2.

Example 2:

Input: nums = [3,3,3,3]

Output: 1

Explanation:

The strictly increasing subarrays of nums are [3], [3], [3], and [3].

The strictly decreasing subarrays of nums are [3], [3], [3], and [3].

Hence, we return 1.

Example 3:

Input: nums = [3,2,1]

Output: 3

Explanation:

The strictly increasing subarrays of nums are [3], [2], and [1].

The strictly decreasing subarrays of nums are [3], [2], [1], [3,2], [2,1], and [3,2,1].

Hence, we return 3.

Constraints:

1 <= nums.length <= 50
1 <= nums[i] <= 50
*/

// Approach 1
// Brute Force
// Time Complexity O(n^2)
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
  let subInc = [],
    subDec = [],
    length = nums.length,
    maxSub = 1;
  for (let i = 0; i < length; i++) {
    let curSubInc = [],
      curSubDec = [];
    curSubInc.push(nums[i]);
    curSubDec.push(nums[i]);
    subInc.push([...curSubInc]);
    subDec.push([...curSubDec]);
    if (nums[i] < nums[i + 1]) {
      curSubInc.push(nums[i + 1]);
      subInc.push([...curSubInc]);
      for (let j = i + 1; j < length; j++) {
        if (nums[j] < nums[j + 1]) {
          curSubInc.push(nums[j + 1]);
          subInc.push([...curSubInc]);
        } else break;
      }
    }

    if (nums[i] > nums[i + 1]) {
      curSubDec.push(nums[i + 1]);
      subDec.push([...curSubDec]);
      for (let j = i + 1; j < length; j++) {
        if (nums[j] > nums[j + 1]) {
          curSubDec.push(nums[j + 1]);
          subDec.push([...curSubDec]);
        } else break;
      }
    }
  }

  for (value of subInc) {
    if (value.length > maxSub) maxSub = value.length;
  }

  for (value of subDec) {
    if (value.length > maxSub) maxSub = value.length;
  }

  return maxSub;
};

// Approach 2
// Time Complexity O(n)

/*
-> Issues in Above Code
Unnecessary Storage of Subarrays: Above approach stores every possible strictly increasing and strictly decreasing subarray, which increases time complexity and memory usage unnecessarily.

-> Correct Approach (O(n) Time Complexity)
Instead of storing all subarrays, we track only the longest increasing and decreasing subarrays dynamically.

Algorithm

1. Initialize variables:
- inc = 1 → Tracks the current length of the strictly increasing subarray.
- dec = 1 → Tracks the current length of the strictly decreasing subarray.
- maxLength = 1 → Stores the maximum length found.

2. Iterate through the array from 1 to n-1:
- If nums[i] > nums[i - 1] → Increase inc, reset dec = 1.
- If nums[i] < nums[i - 1] → Increase dec, reset inc = 1.
- If nums[i] == nums[i - 1] → Reset both inc and dec to 1.
- Update maxLength = max(maxLength, inc, dec).

3. Return maxLength.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
  let length = nums.length,
    subInc = 1,
    subDec = 1,
    maxSub = 1;
  for (let i = 1; i < length; i++) {
    if (nums[i] > nums[i - 1]) {
      subInc++;
      subDec = 1;
    } else if (nums[i] < nums[i - 1]) {
      subDec++;
      subInc = 1;
    } else {
      subInc = 1;
      subDec = 1;
    }
    maxSub = Math.max(maxSub, subInc, subDec);
  }

  return maxSub;
};
