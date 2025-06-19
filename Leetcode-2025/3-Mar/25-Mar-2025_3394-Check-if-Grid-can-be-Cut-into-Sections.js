/*
3394. Check if Grid can be Cut into Sections
Medium - 1905

Topics: Array, Sorting

You are given an integer n representing the dimensions of an n x n grid, with the origin at the bottom-left corner of the grid. You are also given a 2D array of coordinates rectangles, where rectangles[i] is in the form [startx, starty, endx, endy], representing a rectangle on the grid. Each rectangle is defined as follows:

(startx, starty): The bottom-left corner of the rectangle.
(endx, endy): The top-right corner of the rectangle.
Note that the rectangles do not overlap. Your task is to determine if it is possible to make either two horizontal or two vertical cuts on the grid such that:

Each of the three resulting sections formed by the cuts contains at least one rectangle.
Every rectangle belongs to exactly one section.
Return true if such cuts can be made; otherwise, return false.

Example 1:
Input: n = 5, rectangles = [[1,0,5,2],[0,2,2,4],[3,2,5,3],[0,4,4,5]]
Output: true
Explanation: The grid is shown in the diagram. We can make horizontal cuts at y = 2 and y = 4. Hence, output is true.

Example 2:
Input: n = 4, rectangles = [[0,0,1,1],[2,0,3,4],[0,2,2,3],[3,0,4,3]]
Output: true
Explanation: We can make vertical cuts at x = 2 and x = 3. Hence, output is true.

Example 3:
Input: n = 4, rectangles = [[0,2,2,4],[1,0,3,2],[2,2,3,4],[3,0,4,2],[3,2,4,4]]
Output: false
Explanation: We cannot make two horizontal or two vertical cuts that satisfy the conditions. Hence, output is false.

Constraints:
3 <= n <= 109
3 <= rectangles.length <= 105
0 <= rectangles[i][0] < rectangles[i][2] <= n
0 <= rectangles[i][1] < rectangles[i][3] <= n
*/

/**
 * @param {number} n
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var checkValidCuts = function (n, rectangles) {
  let x_interval = [],
    y_interval = [],
    x_axis = [],
    y_axis = [];

  for (let [x1, y1, x2, y2] of rectangles) {
    x_interval.push([x1, x2]);
    y_interval.push([y1, y2]);
  }

  x_interval.sort((a, b) => a[0] - b[0]);
  y_interval.sort((a, b) => a[0] - b[0]);

  for (x of x_interval) {
    if (x_axis.length === 0 || x[0] >= x_axis[x_axis.length - 1][1]) x_axis.push(x);
    else x_axis[x_axis.length - 1][1] = Math.max(x_axis[x_axis.length - 1][1], x[1]);
  }

  for (y of y_interval) {
    if (y_axis.length === 0 || y[0] >= y_axis[y_axis.length - 1][1]) y_axis.push(y);
    else y_axis[y_axis.length - 1][1] = Math.max(y_axis[y_axis.length - 1][1], y[1]);
  }

  return x_axis.length >= 3 || y_axis.length >= 3;
};
