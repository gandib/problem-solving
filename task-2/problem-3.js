/*
PW2.01.13 number-of-good-pairs

Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

Example 1:
Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.

Example 3:
Input: nums = [1,2,3]
Output: 0
 
Constraints:
1 <= nums.length <= 100
1 <= nums[i] <= 100
*/

// Solution 3
function goodPair(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (i < j && nums[i] === nums[j]) {
        count++;
      }
    }
  }
  return count;
}

console.log(goodPair([1, 2, 3, 1, 1, 3]));
