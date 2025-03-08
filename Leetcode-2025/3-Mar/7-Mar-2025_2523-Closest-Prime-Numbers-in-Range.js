// https://leetcode.com/problems/closest-prime-numbers-in-range/description/?envType=daily-question&envId=2025-03-07

/*
2523. Closest Prime Numbers in Range
Medium - 1591
Companies: Google
Related Topics: Math
Given two positive integers left and right, find the two integers num1 and num2 such that:

left <= num1 < num2 <= right .
Both num1 and num2 are prime numbers.
num2 - num1 is the minimum amongst all other pairs satisfying the above conditions.
Return the positive integer array ans = [num1, num2]. If there are multiple pairs satisfying these conditions, return the one with the smallest num1 value. If no such numbers exist, return [-1, -1].

Example 1:
Input: left = 10, right = 19
Output: [11,13]
Explanation: The prime numbers between 10 and 19 are 11, 13, 17, and 19.
The closest gap between any pair is 2, which can be achieved by [11,13] or [17,19].
Since 11 is smaller than 17, we return the first pair.

Example 2:
Input: left = 4, right = 6
Output: [-1,-1]
Explanation: There exists only one prime number in the given range, so the conditions cannot be satisfied.

Constraints:

1 <= left <= right <= 106
*/

// Approach: Sieve of Eratosthenes
// 1. Create an array primeCheck of size right + 1 and fill it with true.
// 2. Initialize primeCheck[0] and primeCheck[1] as false.
// 3. Traverse from 2 to square root of right and check if the number is prime.
// 4. If the number is prime, then mark all the multiples of that number as false.
// 5. Create an array primes and add all the prime numbers between left and right.
// 6. If the number of prime numbers is less than 2, return [-1, -1].
// 7. If the number of prime numbers is 2, return the prime numbers.
// 8. Initialize minGap as primes[1] - primes[0] and result as [primes[0], primes[1]].
// 9. Traverse through the prime numbers and find the minimum gap between any two prime numbers.
// 10. Return the result array.
// Time Complexity: O(n * log(log(n)))
// Space Complexity: O(n)   

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function (left, right) {
  let primeCheck = new Array(right + 1).fill(true);
  primeCheck[0] = primeCheck[1] = false;
  for (let i = 2; i * i <= right; i++) {
    if (primeCheck[i]) {
      for (let j = i * i; j <= right; j += i) {
        primeCheck[j] = false;
      }
    }
  }

  let primes = [];
  for (let i = left; i <= right; i++) {
    if (primeCheck[i]) {
      primes.push(i);
    }
  }

  if (primes.length < 2) return [-1, -1];
  if (primes.length == 2) return primes;

  let minGap = primes[1] - primes[0];
  let result = [primes[0], primes[1]];

  for (let i = 2; i < primes.length; i++) {
    let gap = primes[i] - primes[i - 1];
    if (gap < minGap) {
      minGap = gap;
      result = [primes[i - 1], primes[i]];
    }
  }

  return result;
};
