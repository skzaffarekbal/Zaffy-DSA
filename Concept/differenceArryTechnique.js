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

/* Difference Array Technique For Subtraction */

function applyDifferenceArray(arr, queries) {
  let n = arr.length;
  let diff = new Array(n + 1).fill(0);

  // Step 1: Build the Difference Array for Subtraction
  queries.forEach(([l, r, value]) => {
    diff[l] -= value; // Start subtracting
    if (r + 1 < n) diff[r + 1] += value; // Stop subtracting
  });

  // Step 2: Build the Final Array Using Prefix Sum
  let result = [...arr]; // Copy the original array
  let currentSum = 0;

  for (let i = 0; i < n; i++) {
    currentSum += diff[i];
    result[i] += currentSum;
  }

  return result;
}

// Example Usage
let arr = [10, 10, 10, 10, 10];
let queries = [
  [1, 3, 2], // Subtract 2 from range [1, 3]
  [2, 4, 3], // Subtract 3 from range [2, 4]
  [0, 2, 1], // Subtract 1 from range [0, 2]
];

console.log(applyDifferenceArray(arr, queries));
