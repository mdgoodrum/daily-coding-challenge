const twoSum = (nums, target) => {
    const result = [];
    for (let i = 0; i < nums.length - 1; i++) {
        for (let k = i + 1; k < nums.length; k++) {
            console.log(i, k);
            if (nums[i] + nums[k] === target) {
                console.log('added: ', i, k);
                result.push(i);
                result.push(k);
            }
        }
    }
    return result;
};

const arr = [2,5,5,11];
const k = 10;
const start = new Date(); 
console.log(twoSum(arr, k));
const end =  new Date();
console.log(end - start);

// https://leetcode.com/problems/two-sum/

