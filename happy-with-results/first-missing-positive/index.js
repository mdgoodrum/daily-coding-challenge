/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let smallestPositiveInteger = 1;
    let done = false;
    while(!done) {
        let updateHappened = false;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === smallestPositiveInteger) {
                smallestPositiveInteger++;
                updateHappened = true;
            }
        }
        if (!updateHappened) {
            done = true;
        }
    }
    return smallestPositiveInteger;
};


// https://leetcode.com/problems/first-missing-positive/