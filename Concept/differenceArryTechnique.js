/* Difference Array Technique  */

/*
Input:

array = [0, 0, 0, 0, 0, 0, 0]
queries = [[0, 2, 5], [1, 3, 6], [2, 6, 1]]
each query contain index from 'start' to 'end' and 'value' to add.

Output:
array = [5, 11, 12, 7, 1, 1, 1]
*/

/* Approach - 1 (Linear) => O(n^2) */
var linearApproach = function (array, queries) {
  for (let i = 0; i < queries.length; i++) {
    for (let j = queries[i][0]; j <= queries[i][1]; j++) {
      array[j] = array[j] + queries[i][2];
    }
  }
  return array;
};

/* Approach - 2 (Difference Array Technique) => O(n+m) */
var diffArrayTechnique = function (array, queries) {
  for (let i = 0; i < queries.length; i++) {
    array[queries[i][0]] = array[queries[i][0]] + queries[i][2];
    if (queries[i][1] + 1 < array.length) {
      array[queries[i][1] + 1] = array[queries[i][1] + 1] - queries[i][2];
    }
  }

  // Prefix Sum
  for (let i = 0; i < array.length; i++) {
    if (i > 0) array[i] = array[i] + array[i - 1];
  }
  return array;
};

console.log(
  linearApproach(
    [0, 0, 0, 0, 0, 0, 0],
    [
      [0, 2, 5],
      [1, 3, 6],
      [2, 6, 1],
    ]
  )
);

console.log(
  diffArrayTechnique(
    [0, 0, 0, 0, 0, 0, 0],
    [
      [0, 2, 5],
      [1, 3, 6],
      [2, 6, 1],
    ]
  )
);
