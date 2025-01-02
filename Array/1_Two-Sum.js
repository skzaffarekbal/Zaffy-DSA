/* Date: 01/01/2025 */ 

/*
Link : https://leetcode.com/problems/two-sum/description/
*/

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/

/*
First Solution
Time complexity - O(n2)

In this solution Just running loop over array then running another loop from n+1 index if our condition satisfy then return the pair

nums = [2, 7, 4, 8, 3, 5], target = 8

    2 | 7 | 4 | 8 | 3 | 5
2   * | + | + | + | + | +
7   * | * | + | + | + | +
4   * | * | * | + | + | +
8   * | * | * | * | + | +
3   * | * | * | * | * | 8
5   * | * | * | * | * | *
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numLength = nums.length;
    for(let i = 0; i < numLength; i++){
        for(let j = i + 1; j < numLength; j++){
            if(nums[i] + nums[j] === target) return [i, j];
        }
    }
    return [-1, -1];
};

/*
Second Solution
Time complexity - O(n)

In this Solution, maintain a memory in key value pair where store each checked value and its index in that array. For each value in the array subtract with target and check memory if that wanting value on the memory then it return both index otherwise save value and index on memory.

nums = [2, 7, 4, 8, 3, 5], target = 8

index   value   wanting     memory
0       2       6           {2: 0}
1       7       1           {2: 0, 7: 1}
2       4       4           {2: 0, 7: 1, 4: 2}
3       8       0           {2: 0, 7: 1, 4: 2, 8: 3}
4       3       5           {2: 0, 7: 1, 4: 2, 8: 3, 3: 4}
5       5       3           {2: 0, 7: 1, 4: 2, 8: 3, 3: 4} => return [4, 5] 
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let memory = {};
    let numLength = nums.length;
    for(let i = 0; i < numLength; i++){
        let wanting = target - nums[i];
        if(memory.hasOwnProperty(wanting)) return [memory[wanting], i]
        else memory[nums[i]] = i;
    }
};