/*
2375. Construct Smallest Number From DI String
Medium - 1584

Companies : josh technology, Goldman Sachs

You are given a 0-indexed string pattern of length n consisting of the characters 'I' meaning increasing and 'D' meaning decreasing.

A 0-indexed string num of length n + 1 is created using the following conditions:

num consists of the digits '1' to '9', where each digit is used at most once.
If pattern[i] == 'I', then num[i] < num[i + 1].
If pattern[i] == 'D', then num[i] > num[i + 1].
Return the lexicographically smallest possible string num that meets the conditions.

Example 1:
Input: pattern = "IIIDIDDD"
Output: "123549876"
Explanation:
At indices 0, 1, 2, and 4 we must have that num[i] < num[i+1].
At indices 3, 5, 6, and 7 we must have that num[i] > num[i+1].
Some possible values of num are "245639871", "135749862", and "123849765".
It can be proven that "123549876" is the smallest possible num that meets the conditions.
Note that "123414321" is not possible because the digit '1' is used more than once.

Example 2:
Input: pattern = "DDD"
Output: "4321"
Explanation:
Some possible values of num are "9876", "7321", and "8742".
It can be proven that "4321" is the smallest possible num that meets the conditions.

Constraints:

1 <= pattern.length <= 8
pattern consists of only the letters 'I' and 'D'.
*/

/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function (pattern) {
  let patternLength = pattern.length;
  let result = '';
  let stack = [];

  // Iterate through the pattern, adding numbers from 1 to (n+1)
  for (let i = 0; i <= patternLength; i++) {
    stack.push(i + 1); // Push (i+1) into stack

    // If we reach an 'I' or the end of the pattern, pop all elements in stack
    if (i == patternLength || pattern[i] === 'I') {
      while (stack.length > 0) {
        result += stack.pop(); // Pop and append to result
      }
    }
  }

  return result;
};

// Test Case 1: pattern = "IIIDIDDD"
// Expected Output: "123549876"

console.log(smallestNumber('IIIDIDDD'));

/* 
Dry Run for "IIIDIDDD"

Step | i | pattern[i] | Stack         | Result
------------------------------------------------
  1  | 0 | 'I'        | [1]           | "" 
  2  | 0 | 'I'        | []            | "1"
------------------------------------------------
  3  | 1 | 'I'        | [2]           | "1" 
  4  | 1 | 'I'        | []            | "12"
------------------------------------------------
  5  | 2 | 'I'        | [3]           | "12" 
  6  | 2 | 'I'        | []            | "123"
------------------------------------------------
  7  | 3 | 'D'        | [4]           | "123"
  8  | 4 | 'I'        | [4, 5]        | "123"
  9  | 4 | 'I'        | []            | "12354"
------------------------------------------------
 10  | 5 | 'D'        | [6]           | "12354"
 11  | 6 | 'D'        | [6, 7]        | "12354"
 12  | 7 | 'D'        | [6, 7, 8]     | "12354"
 13  | 8 | END        | [6, 7, 8, 9]  | "12354"
 14  | 8 | END        | []            | "123549876"

Final Output: "123549876"
*/

// Test Case 2: pattern = "DDD"
// Expected Output: "4321"

console.log(smallestNumber('DDD'));

/* 
Dry Run for "DDD"

Step | i | pattern[i] | Stack         | Result
------------------------------------------------
  1  | 0 | 'D'        | [1]           | ""
  2  | 1 | 'D'        | [1, 2]        | ""
  3  | 2 | 'D'        | [1, 2, 3]     | ""
  4  | 3 | END        | [1, 2, 3, 4]  | ""
  5  | 3 | END        | []            | "4321"

Final Output: "4321"
*/
