/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    if (nums.length > 2) {
        const newArr = nums.map(value => {
            const smallerArr = nums.filter((_, i) => i !== nums.indexOf(value));
            return smallerArr.reduce((a, b) => a * b);
        });
        return newArr;
    }
    return nums.reverse();
};