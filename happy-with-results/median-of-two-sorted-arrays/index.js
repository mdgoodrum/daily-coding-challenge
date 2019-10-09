/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const sortedArr = mergeSort(nums1, nums2);
    if (sortedArr.length % 2 === 0) {
        return (sortedArr[(sortedArr.length/2) - 1] 
                + sortedArr[(sortedArr.length/2)]) / 2;
    }
    return sortedArr[(sortedArr.length - 1) / 2];
};

var mergeSort = function(arr1, arr2) {
    let output = [];
    while(arr1.length > 0 || arr2.length > 0) {
        if (arr1.length === 0) {
            output = [...output, ...arr2];
            arr2 = [];
        } else if (arr2.length === 0) {
            output = [...output, ...arr1];
            arr1 = [];
        } else {
            const smallest = (arr1[0] < arr2[0]) ? arr1[0] : arr2[0];
            output.push(smallest);
            (arr1[0] < arr2[0]) ? arr1.shift() : arr2.shift();
        }
    }
    return output;
}

// https://leetcode.com/problems/median-of-two-sorted-arrays/