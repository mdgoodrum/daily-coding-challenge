/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let finalOutput = '';
    let dict = {
        1: [s.charAt(0)]
    };
    let flip = false;
    let counter = 2;
    for (let i = 1; i < s.length; i++) {
        if (dict[counter]) {
            dict[counter].push(s.charAt(i));    
        } else {
            dict[counter] = [s.charAt(i)];
        }
        if (counter === 1) {
            flip = false;
        } else if (counter === numRows) {
            flip = true;
        }
        if (flip) {
            --counter;
        } else {
            ++counter;
        }
    }
    for (let k = 1; k <= Object.keys(dict).length; k++) {
        if (dict[k]) {
            const str = dict[k].join("");
            finalOutput += str;
        }
    }
    return finalOutput;
};

// https://leetcode.com/problems/zigzag-conversion/submissions/