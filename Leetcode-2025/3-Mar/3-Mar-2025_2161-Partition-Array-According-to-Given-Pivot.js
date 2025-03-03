// Source: https://leetcode.com/problems/partition-array-according-to-given-pivot/description/?envType=daily-question&envId=2025-03-03

/*
2161. Partition Array According to Given Pivot
Medium - 996

You are given a 0-indexed integer array nums and an integer pivot. Rearrange nums such that the following conditions are satisfied:

Every element less than pivot appears before every element greater than pivot.
Every element equal to pivot appears in between the elements less than and greater than pivot.
The relative order of the elements less than pivot and the elements greater than pivot is maintained.
More formally, consider every pi, pj where pi is the new position of the ith element and pj is the new position of the jth element. If i < j and both elements are smaller (or larger) than pivot, then pi < pj.
Return nums after the rearrangement.

Example 1:
Input: nums = [9,12,5,10,14,3,10], pivot = 10
Output: [9,5,3,10,10,12,14]

Explanation: 
The elements 9, 5, and 3 are less than the pivot so they are on the left side of the array.
The elements 12 and 14 are greater than the pivot so they are on the right side of the array.
The relative ordering of the elements less than and greater than pivot is also maintained. [9, 5, 3] and [12, 14] are the respective orderings.

Example 2:
Input: nums = [-3,4,3,2], pivot = 2
Output: [-3,2,4,3]

Explanation: 
The element -3 is less than the pivot so it is on the left side of the array.
The elements 4 and 3 are greater than the pivot so they are on the right side of the array.
The relative ordering of the elements less than and greater than pivot is also maintained. [-3] and [4, 3] are the respective orderings.

Constraints:
1 <= nums.length <= 105
-106 <= nums[i] <= 106
pivot equals to an element of nums.
*/

// RunTime: 38ms, Beats: 36.46%
/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
  let smaller = [],
    equal = [],
    larger = [];
  for (num of nums)
    num < pivot ? smaller.push(num) : num > pivot ? larger.push(num) : equal.push(num);
  return [...smaller, ...equal, ...larger];
};

// Optimized above one
// Runtime: 46ms, Beats: 24.86%
/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
  let smaller = [],
    equal = 0,
    larger = [];
  for (num of nums) num < pivot ? smaller.push(num) : num > pivot ? larger.push(num) : equal++;
  return [...smaller, ...Array(equal).fill(pivot), ...larger];
};

// One Line Solution
/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = (nums, pivot) => [
  ...nums.filter((n) => n < pivot),
  ...nums.filter((n) => n == pivot),
  ...nums.filter((n) => n > pivot),
];

// Two Pointer Method
// Runtime: 17ms, Beats: 86.74%
/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
  let result = new Array(nums.length).fill(0);
  let left = 0,
    right = nums.length - 1;

  for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
    if (nums[i] < pivot) result[left++] = nums[i];
    if (nums[j] > pivot) result[right--] = nums[j];
  }
  while (left <= right) result[left++] = pivot;
  return result;
};
