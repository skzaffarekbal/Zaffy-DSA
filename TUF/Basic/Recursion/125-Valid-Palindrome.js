// Sources: https://leetcode.com/problems/valid-palindrome/description/
/*
125. Valid Palindrome
Easy - 750

Companies
Zenefits, EPAM Systems, Yandex, Spotify, Wipro, SAP, American Express, Capgemini, Accenture, Wayfair, ServiceNow, Infosys, Turing, PayPal, TikTok, Cisco

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let sList = [];
  for (let char of s) {
    let asciiValue = char.charCodeAt(0);
    if (
      (asciiValue >= 48 && asciiValue <= 57) ||
      (asciiValue >= 65 && asciiValue <= 90) ||
      (asciiValue >= 97 && asciiValue <= 122)
    )
      asciiValue >= 65 && asciiValue <= 90
        ? sList.push(String.fromCharCode(asciiValue + 32))
        : sList.push(char);
  }
  return sList.length === 0 || sList.join('') === sList.reverse().join('');
};

// ✅ Test Case 1: "A man, a plan, a canal: Panama"
/*
Initial state:
s = "A man, a plan, a canal: Panama"
sList = []

Iteration 1: 'A' → Convert to lowercase → 'a' → Add to sList
Iteration 2: 'm' → Add to sList
Iteration 3: 'a' → Add to sList
Iteration 4: 'n' → Add to sList
Iteration 5: ',' → Skip (not alphanumeric)
Iteration 6: ' ' → Skip
Iteration 7: 'a' → Add to sList
Iteration 8: 'p' → Add to sList
Iteration 9: 'l' → Add to sList
Iteration 10: 'a' → Add to sList
Iteration 11: 'n' → Add to sList
Iteration 12: ',' → Skip
Iteration 13: ' ' → Skip
Iteration 14: 'a' → Add to sList
Iteration 15: 'c' → Add to sList
Iteration 16: 'a' → Add to sList
Iteration 17: 'n' → Add to sList
Iteration 18: 'a' → Add to sList
Iteration 19: 'l' → Add to sList
Iteration 20: ':' → Skip
Iteration 21: ' ' → Skip
Iteration 22: 'P' → Convert to lowercase → 'p' → Add to sList
Iteration 23: 'a' → Add to sList
Iteration 24: 'n' → Add to sList
Iteration 25: 'a' → Add to sList
Iteration 26: 'm' → Add to sList
Iteration 27: 'a' → Add to sList

Final sList: ['a', 'm', 'a', 'n', 'a', 'p', 'l', 'a', 'n', 'a', 'c', 'a', 'n', 'a', 'l', 'p', 'a', 'n', 'a', 'm', 'a']

Check palindrome: sList === sList.reverse()
'amanaplanacanalpanama' === 'amanaplanacanalpanama' ✅
Return: **true**
*/

// ✅ Test Case 2: "race a car"
/*
Initial state:
s = "race a car"
sList = []

Iteration 1: 'r' → Add to sList
Iteration 2: 'a' → Add to sList
Iteration 3: 'c' → Add to sList
Iteration 4: 'e' → Add to sList
Iteration 5: ' ' → Skip
Iteration 6: 'a' → Add to sList
Iteration 7: 'c' → Add to sList
Iteration 8: 'a' → Add to sList
Iteration 9: 'r' → Add to sList

Final sList: ['r', 'a', 'c', 'e', 'a', 'c', 'a', 'r']

Check palindrome: sList === sList.reverse()
'raceacar' !== 'racacear' ❌
Return: **false**
*/

// ✅ Test Case 3: " " (Empty String)

/*
Initial state:
s = " "
sList = []

Only space, no characters added to sList

Check palindrome: sList.length === 0 ✅
Return: **true**
*/

// ✅ Test Case 4: ".a"

/*
Initial state:
s = ".a"
sList = []

Iteration 1: '.' → Skip
Iteration 2: 'a' → Add to sList

Final sList: ['a']

Check palindrome: sList === sList.reverse()
'a' === 'a' ✅
Return: **true**
*/

// ✅ Test Case 5: "0P"

/*
Initial state:
s = "0P"
sList = []

Iteration 1: '0' → Add to sList
Iteration 2: 'P' → Convert to lowercase → 'p' → Add to sList

Final sList: ['0', 'p']

Check palindrome: sList === sList.reverse()
'0p' !== 'p0' ❌
Return: **false**
*/

// 100% Acceptance Approach.
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let i = 0,
    j = str.length - 1;

  while (i < j) {
    if (str.charAt(i) === str.charAt(j)) {
      i++;
      j--;
    } else return false;
  }
  return true;
};

// ✅ Test Case 1: "A man, a plan, a canal: Panama"

/*
Input: "A man, a plan, a canal: Panama"

Step 1: Remove non-alphanumeric characters and convert to lowercase
"amanaplanacanalpanama"

Step 2: Initialize pointers
i = 0, j = 20

Iteration 1: str[0] = 'a', str[20] = 'a' ✅  (i++, j--)
Iteration 2: str[1] = 'm', str[19] = 'm' ✅  (i++, j--)
Iteration 3: str[2] = 'a', str[18] = 'a' ✅  (i++, j--)
Iteration 4: str[3] = 'n', str[17] = 'n' ✅  (i++, j--)
Iteration 5: str[4] = 'a', str[16] = 'a' ✅  (i++, j--)
Iteration 6: str[5] = 'p', str[15] = 'p' ✅  (i++, j--)
Iteration 7: str[6] = 'l', str[14] = 'l' ✅  (i++, j--)
Iteration 8: str[7] = 'a', str[13] = 'a' ✅  (i++, j--)
Iteration 9: str[8] = 'n', str[12] = 'n' ✅  (i++, j--)
Iteration 10: str[9] = 'a', str[11] = 'a' ✅  (i++, j--)
Iteration 11: i = 10, j = 10 (Middle character)

No mismatches found, return **true**
*/

// ✅ Test Case 2: "race a car"

/*
Input: "race a car"

Step 1: Remove non-alphanumeric characters and convert to lowercase
"raceacar"

Step 2: Initialize pointers
i = 0, j = 7

Iteration 1: str[0] = 'r', str[7] = 'r' ✅ (i++, j--)
Iteration 2: str[1] = 'a', str[6] = 'a' ✅ (i++, j--)
Iteration 3: str[2] = 'c', str[5] = 'c' ✅ (i++, j--)
Iteration 4: str[3] = 'e', str[4] = 'a' ❌ (Mismatch)

Mismatch found, return **false**
*/

// ✅ Test Case 3: " " (Empty String)

/*
Input: " "

Step 1: Remove non-alphanumeric characters and convert to lowercase
""

Step 2: Initialize pointers
i = 0, j = -1 (empty string)

Since i >= j, return **true**
*/

// ✅ Test Case 4: ".a"

/*
Input: ".a"

Step 1: Remove non-alphanumeric characters and convert to lowercase
"a"

Step 2: Initialize pointers
i = 0, j = 0 (single character)

Since i >= j, return **true**
*/

// ✅ Test Case 5: "0P"

/*
Input: "0P"

Step 1: Remove non-alphanumeric characters and convert to lowercase
"0p"

Step 2: Initialize pointers
i = 0, j = 1

Iteration 1: str[0] = '0', str[1] = 'p' ❌ (Mismatch)
*/
