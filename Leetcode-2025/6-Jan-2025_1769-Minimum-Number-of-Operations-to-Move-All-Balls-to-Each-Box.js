/*
Link :- https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/description/?envType=daily-question&envId=2025-01-06
*/

/*
1769. Minimum Number of Operations to Move All Balls to Each Box

You have n boxes. You are given a binary string boxes of length n, where boxes[i] is '0' if the ith box is empty, and '1' if it contains one ball.

In one operation, you can move one ball from a box to an adjacent box. Box i is adjacent to box j if abs(i - j) == 1. Note that after doing so, there may be more than one ball in some boxes.

Return an array answer of size n, where answer[i] is the minimum number of operations needed to move all the balls to the ith box.

Each answer[i] is calculated considering the initial state of the boxes.

Example 1:

Input: boxes = "110"
Output: [1,1,3]
Explanation: The answer for each box is as follows:
1) First box: you will have to move one ball from the second box to the first box in one operation.
2) Second box: you will have to move one ball from the first box to the second box in one operation.
3) Third box: you will have to move one ball from the first box to the third box in two operations, and move one ball from the second box to the third box in one operation.
Example 2:

Input: boxes = "001011"
Output: [11,8,5,4,3,4]

Constraints:

n == boxes.length
1 <= n <= 2000
boxes[i] is either '0' or '1'.
*/

/* Approach (Linear) O(n^2)*/
/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  let length = boxes.length,
    result = Array(boxes.length).fill(0),
    indexPos = [],
    oneCount = 0;
  for (let i = 0; i < length; i++) {
    if (boxes[i] == '1') {
      indexPos.push(i);
      oneCount++;
    }
  }

  for (let i = 0; i < oneCount; i++) {
    for (let j = 0; j < length; j++) {
      result[j] += Math.abs(indexPos[i] - j);
    }
  }

  return result;
};

/* Approach - 2 (PrefixSum) O(n) */
/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  let length = boxes.length,
    result = Array(boxes.length).fill(0);
  let indexPositionSum = 0,
    rightBalls = 0,
    leftBall = 0;
  for (let i = 0; i < length; i++) {
    if (boxes[i] == '1') {
      indexPositionSum += i;
      rightBalls++;
    }
  }

  let prefixSum = 0;
  for (let i = 0; i < length; i++) {
    result[i] = indexPositionSum + prefixSum;
    if (boxes[i] == '1') {
      leftBall++;
      rightBalls--;
    }
    indexPositionSum -= rightBalls;
    prefixSum += leftBall;
  }

  return result;
};
