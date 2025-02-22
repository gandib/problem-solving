/*
PW2.01.10 valid-parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 
Example 1:
Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

// Solution 5
function isValidParentheses(s) {
  const validParentheses = ["()", "{}", "[]"];
  for (let i = 0; i < s.length; i++) {
    const parenthese = s[i] + s[i + 1];

    if (validParentheses.includes(parenthese)) {
      i++;
    } else {
      return false;
    }
  }
  return true;
}

console.log(isValidParentheses("(){}[}"));
