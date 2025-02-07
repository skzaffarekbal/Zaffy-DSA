// Source: https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls/

/*
3160. Find the Number of Distinct Colors Among the Balls

You are given an integer limit and a 2D array queries of size n x 2.

There are limit + 1 balls with distinct labels in the range [0, limit]. Initially, all balls are uncolored. For every query in queries that is of the form [x, y], you mark ball x with the color y. After each query, you need to find the number of distinct colors among the balls.

Return an array result of length n, where result[i] denotes the number of distinct colors after ith query.

Note that when answering a query, lack of a color will not be considered as a color.

Example 1:

Input: limit = 4, queries = [[1,4],[2,5],[1,3],[3,4]]
Output: [1,2,2,3]

Explanation:
After query 0, ball 1 has color 4.
After query 1, ball 1 has color 4, and ball 2 has color 5.
After query 2, ball 1 has color 3, and ball 2 has color 5.
After query 3, ball 1 has color 3, ball 2 has color 5, and ball 3 has color 4.


Example 2:

Input: limit = 4, queries = [[0,1],[1,2],[2,2],[3,4],[4,5]]
Output: [1,2,2,3,4]

Explanation:
After query 0, ball 0 has color 1.
After query 1, ball 0 has color 1, and ball 1 has color 2.
After query 2, ball 0 has color 1, and balls 1 and 2 have color 2.
After query 3, ball 0 has color 1, balls 1 and 2 have color 2, and ball 3 has color 4.
After query 4, ball 0 has color 1, balls 1 and 2 have color 2, ball 3 has color 4, and ball 4 has color 5.

Constraints:

1 <= limit <= 109
1 <= n == queries.length <= 105
queries[i].length == 2
0 <= queries[i][0] <= limit
1 <= queries[i][1] <= 109
*/

// Solution 1: Using Map
// Leetcode failled to run this solution for TLE
/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function (limit, queries) {
  let color = new Map(),
    ball = new Map(),
    length = queries.length;
  let result = [];
  for (let i = 0; i < length; i++) {
    let query = queries[i];

    if (ball.has(query[0])) {
      let colorNumber = ball.get(query[0]);
      let colorBalls = color.get(colorNumber);
      if (colorBalls.length === 1) {
        color.delete(colorNumber);
      } else {
        color.set(
          colorNumber,
          colorBalls.filter((ball) => ball !== query[0])
        );
      }
    }

    ball.set(query[0], query[1]);

    if (color.has(query[1])) {
      let balls = color.get(query[1]);
      balls = [...balls, query[0]];
      color.set(query[1], balls);
    } else {
      color.set(query[1], [query[0]]);
    }

    result.push(color.size);
  }

  return result;
};

// Solution 2: Using removing the color ball array and using count of color balls
var queryResults = function (limit, queries) {
  let color = new Map(),
    ball = new Map(),
    length = queries.length;
  let result = [];
  for (let i = 0; i < length; i++) {
    let query = queries[i];

    if (ball.has(query[0])) {
      let colorNumber = ball.get(query[0]);
      let colorBalls = color.get(colorNumber);
      // if (colorBalls.length === 1) {
      if (colorBalls === 1) {
        color.delete(colorNumber);
      } else {
        color.set(colorNumber, colorBalls - 1);
      }
    }

    ball.set(query[0], query[1]);

    if (color.has(query[1])) {
      let balls = color.get(query[1]);
      // balls = [...balls, query[0]];
      color.set(query[1], balls + 1);
    } else {
      // color.set(query[1], [query[0]]);
      color.set(query[1], 1);
    }

    result.push(color.size);
  }

  return result;
};

// Optimized above solution
/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function (limit, queries) {
  let color = new Map(),
    ball = new Map();

  return queries.map(([ballNumber, colorNumber]) => {
    if (ball.has(ballNumber)) {
      let prevColor = ball.get(ballNumber);
      color.set(prevColor, color.get(prevColor) ? color.get(prevColor) - 1 : 0);
      if (color.get(prevColor) === 0) color.delete(prevColor);
    }

    ball.set(ballNumber, colorNumber);
    color.set(colorNumber, (color.get(colorNumber) || 0) + 1);

    return color.size;
  });
};

// Test Cases
/*
2
[[0,1],[1,2],[2,3]]
1
[[0,1],[0,4],[0,4],[0,1],[1,2]]
1
[[0,2],[1,10],[0,10],[0,3],[1,5]]
5
[[1,1],[2,1],[3,2],[4,3],[5,4]]
10
[[1,5],[2,5],[1,5],[3,7],[4,8]]
6
[[1,3],[2,3],[3,4],[4,5],[5,6],[0,3]]
1000000000
[[500000000,1],[600000000,1]]
30448
[[21364,240766080],[3639,849423187],[22679,515800713],[5380,599544533],[16705,405453064],[9903,272362238],[91,110564765],[18078,384426512],[16927,85019053],[16750,18013573],[7701,544527527],[23462,902209596],[2279,214701875],[10287,255934382],[26040,608064271],[29948,804699287],[23617,324996467],[1189,965452724],[9451,712927360],[18919,65737311],[1993,724234699],[14682,625754722],[7641,982592243],[21063,145346429],[21341,807430664],[21136,749932148],[18209,66024730],[22974,593655630],[3461,117690992],[15782,858599132],[14425,580363509],[2795,66658868]]
*/
