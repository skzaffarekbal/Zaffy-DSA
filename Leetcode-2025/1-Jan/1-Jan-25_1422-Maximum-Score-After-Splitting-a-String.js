/*
Link : https://leetcode.com/problems/maximum-score-after-splitting-a-string/description/?envType=daily-question&envId=2025-01-01
*/

/*
1422. Maximum Score After Splitting a String

Given a string s of zeros and ones, return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring).

The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.


Example 1:

Input: s = "011101"
Output: 5 
Explanation: 
All possible ways of splitting s into two non-empty substrings are:
left = "0" and right = "11101", score = 1 + 4 = 5 
left = "01" and right = "1101", score = 1 + 3 = 4 
left = "011" and right = "101", score = 1 + 2 = 3 
left = "0111" and right = "01", score = 1 + 1 = 2 
left = "01110" and right = "1", score = 2 + 1 = 3
Example 2:

Input: s = "00111"
Output: 5
Explanation: When left = "00" and right = "111", we get the maximum score = 2 + 3 = 5
Example 3:

Input: s = "1111"
Output: 3

Constraints:

2 <= s.length <= 500
The string s consists of characters '0' and '1' only.

Test Cases:

"00"
"01"
"11"
"010"
"01101"
"0010"
"1111000"
"010000000"
"00011010011111110010000100011111000000100010001010001100101010110101101110011111110100011010100100111100101111110110101011100111001101100111111010111100111010001000000011111000000000011001110111001011101101000000101001000010010101111111110001000111101001111010010010110011100001000001110011100101011010010110001110110001010111110100011011101000100000111111011100000001111100011101001101100111011111100101101101110011111110000001001111100011100001010000011010010100101100100001100111101011111110100010"
"01110111111111111010110011100011110101001111010011011001010000010001001010000110001110100010110001000110010000110111010011010000101110100010001010111111011110111010001001100100110111000010010000101011001110111011011011101100110001000011001111100101001001000011010101000100010000010001011111000010111100001110110010111111110100000100100101110111001001110100010001100111001000100000101101011001011010001101111101110001011111110011100010001010010111011001011110101110101111100110110101000100010111010011"
"0100"
"1011011"

*/

/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let sLength= s.length, totalOne = 0, countOne = 0, countZero = 0, max = 0;
    for(let i = 0; i < sLength; i++) totalOne += Number(s[i]);

    for(let i = 0; i < sLength - 1; i++){
        if(s[i] == '0') countZero++;
        else countOne++;

        if(max < (countZero + (totalOne - countOne)))
            max = countZero + (totalOne - countOne);
    }

    return max;
};

console.log("Result : ", maxScore('1011011'))