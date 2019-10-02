/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const result = [];

    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] => 0) {
            result[nums[i]] = true;
        }
    }

    for (let i = 1; i <= result.length; ++i) {
        if (result[i] === undefined) {
            return i;
        }
    }

    return 1;
};


// https://leetcode.com/problems/first-missing-positive/