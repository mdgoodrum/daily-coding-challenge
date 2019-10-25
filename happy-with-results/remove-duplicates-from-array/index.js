/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] !== undefined) {
            if (nums[i] === nums[i + 1]) {
                nums.splice(i, 1);
                i = i - 1;
            }
        }
    }
    return nums.length;
};

// https://leetcode.com/problems/remove-duplicates-from-sorted-array/