// Sources : https://leetcode.com/problems/bitwise-xor-of-all-pairings/description/?envType=daily-question&envId=2025-01-16
/*
2425. Bitwise XOR of All Pairings

You are given two 0-indexed arrays, nums1 and nums2, consisting of non-negative integers. There exists another array, nums3, which contains the bitwise XOR of all pairings of integers between nums1 and nums2 (every integer in nums1 is paired with every integer in nums2 exactly once).

Return the bitwise XOR of all integers in nums3.

Example 1:

Input: nums1 = [2,1,3], nums2 = [10,2,5,0]
Output: 13
Explanation:
A possible nums3 array is [8,0,7,2,11,3,4,1,9,1,6,3].
The bitwise XOR of all these numbers is 13, so we return 13.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 0
Explanation:
All possible pairs of bitwise XORs are nums1[0] ^ nums2[0], nums1[0] ^ nums2[1], nums1[1] ^ nums2[0],
and nums1[1] ^ nums2[1].
Thus, one possible nums3 array is [2,5,1,6].
2 ^ 5 ^ 1 ^ 6 = 0, so we return 0.

Constraints:

1 <= nums1.length, nums2.length <= 105
0 <= nums1[i], nums2[j] <= 109
*/

/*
Hint 1 - Think how the count of each individual integer affects the final answer.
Hint 2 - If the length of nums1 is m and the length of nums2 is n, then each number in nums1 is repeated n times and each number in nums2 is repeated m times.
*/

// Approach: 1 (Brute force approach)
/* 1. Create an empty array nums3
2. Loop through nums1 and nums2 and push the XOR of each pair into nums3
3. Return the XOR of all the elements in nums3
Time complexity: O(n*m) Space complexity: O(n*m)
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function (nums1, nums2) {
  let nums3 = [],
    result = 0;
  for (let n of nums1) {
    for (let m of nums2) {
      nums3.push(n ^ m);
    }
  }
  for (let n of nums3) {
    result ^= n;
  }
  return result;
};

// Approach: 2 (Optimized approach)
/*
nums1 = [a, b]
nums2 = [x, y]
pair = [a^x, a^y,  b^x, b^y]
result = (a^x) ^ (a^y) ^ (b^x) ^ (b^y)
result = (a ^ b) ^ (a ^ b)   ^   (x ^ y) ^ (x ^ y) = 0 ^ 0 = 0

nums1 = [a, b, c]
nums2 = [x, y]
pair = [a^x, a^y,  b^x, b^y,  c^x, c^y]
result = (a^x) ^ (a^y) ^ (b^x) ^ (b^y) ^ (c^x) ^ (c^y)
result = (a ^ b ^ c) ^ (a ^ b ^ c)   ^   (x ^ y) ^ (x ^ y) ^ (x ^ y) 
    = 0 ^ 0 ^ (x ^ y) = (x ^ y)

nums1 = [a, b, c]
nums2 = [x, y, z]
pair = [a^x, a^y, a^z, b^x, b^y, b^z, c^x, c^y, c^z]
result = (a^x) ^ (a^y) ^ (a^z) ^ (b^x) ^ (b^y) ^ (b^z) ^ (c^x) ^ (c^y) ^ (c^z)
result = (a ^ b ^ c) ^ (a ^ b ^ c) ^ (a ^ b ^ c)  ^  (x ^ y ^ z) ^ (x ^ y ^ z) ^ (x ^ y ^ z) 
    = (a ^ b ^ c)  ^  (x ^ y ^ z)

XOR
n ^ n = 0
n ^ 0 = n
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function (nums1, nums2) {
  let length1 = nums1.length,
    length2 = nums2.length,
    result = 0;
  if (length1 % 2 == 0 && length2 % 2 == 0) return result;

  if (length1 % 2 == 1) for (let n of nums2) result ^= n;

  if (length2 % 2 == 1) for (let n of nums1) result ^= n;

  return result;
};
