// Sources: https://leetcode.com/problems/maximum-candies-allocated-to-k-children/description/?envType=daily-question&envId=2025-03-14
/*
2226. Maximum Candies Allocated to K Children

Topics: Array, Binary Search
Medium - 1604

You are given a 0-indexed integer array candies. Each element in the array denotes a pile of candies of size candies[i]. You can divide each pile into any number of sub piles, but you cannot merge two piles together.

You are also given an integer k. You should allocate piles of candies to k children such that each child gets the same number of candies. Each child can be allocated candies from only one pile of candies and some piles of candies may go unused.

Return the maximum number of candies each child can get.

Example 1:
Input: candies = [5,8,6], k = 3
Output: 5
Explanation: We can divide candies[1] into 2 piles of size 5 and 3, and candies[2] into 2 piles of size 5 and 1. We now have five piles of candies of sizes 5, 5, 3, 5, and 1. We can allocate the 3 piles of size 5 to 3 children. It can be proven that each child cannot receive more than 5 candies.

Example 2:
Input: candies = [2,5], k = 11
Output: 0
Explanation: There are 11 children but only 7 candies in total, so it is impossible to ensure each child receives at least one candy. Thus, each child gets no candy and the answer is 0.

Constraints:
1 <= candies.length <= 105
1 <= candies[i] <= 107
1 <= k <= 1012
*/

/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function (candies, k) {
  let totalCandies = candies.reduce((acc, cur) => acc + cur, 0);
  if (totalCandies < k) return 0;
  if (totalCandies == k) return 1;

  // Find the maximum number of candies in any pile
  let maxCandiesInPile = Math.max(...candies);

  // Set the initial search range for binary search
  let left = 0;
  let right = maxCandiesInPile;

  // Binary search to find the maximum number of candies each child can get
  while (left < right) {
    // Calculate the middle value of the current range
    let middle = Math.floor((left + right + 1) / 2);

    // Check if it's possible to allocate candies so that each child gets 'middle' candies
    if (canAllocateCandies(candies, k, middle)) {
      // If possible, move to the upper half to search for a larger number
      left = middle;
    } else {
      // Otherwise, move to the lower half
      right = middle - 1;
    }
  }

  return left;
};

function canAllocateCandies(candies, k, numOfCandies) {
  // Initialize the total number of children that can be served
  let maxNumOfChildren = 0;

  for (let pile of candies) {
    maxNumOfChildren += Math.floor(pile / numOfCandies);
  }

  return maxNumOfChildren >= k;
}
