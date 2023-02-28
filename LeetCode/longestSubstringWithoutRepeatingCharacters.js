
/*

Given a string s, find the length of the longest 
substring
 without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 
Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.

*/

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    
    if(s.length === 1)
        return 1;

    let charactersMap = new Map();
    let initIndex = 0;
    let maxLength = 0;
    let actualLength = 0;

    s.split('').forEach((element, index) => {

        if((charactersMap.has(element)) && (charactersMap.get(element) >= initIndex)) {
            if(actualLength > maxLength)
                maxLength = actualLength;
            
            initIndex = charactersMap.get(element) + 1;
            actualLength = index - initIndex;
        }
            
        charactersMap.set(element, index);

        actualLength++;
    })

    if(actualLength > maxLength)
         return actualLength;

    return maxLength;
};

const s = "dvdp";

console.log(lengthOfLongestSubstring(s));