"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Base Case:
 *  If length of any one string is 0, return 0.
 *
 * Initialize a 2d array, with number of rows equal to the length
 * of first string and columns equal to the length of second
 * string.
 *
 * Make a nested loop over provided strings.
 *  If characters at current index are equal, update the 2d array such that
 *  the element at i, j = element at i-1, j-1 + 1
 *
 *  Also update the max variable.
 *
 *  Else set the element to zero
 */
const DEFAULT_VALUE = 0;
const run = (stringNo1, stringNo2) => {
    // Base case
    if (stringNo1.length === 0 || stringNo2.length === 0)
        return 0;
    let longestSubStrLen = 0;
    // Initialize DP Table with zeros
    const dpTable = new Array(stringNo1.length)
        .fill(0)
        .map(() => new Array(stringNo2.length).fill(0));
    for (let i = 0; i < stringNo1.length; i += 1) {
        for (let j = 0; j < stringNo2.length; j += 1) {
            if (stringNo1.charAt(i) === stringNo2.charAt(j)) {
                dpTable[i][j] =
                    ((dpTable[i - 1] && dpTable[i - 1][j - 1]) ||
                        DEFAULT_VALUE) + 1;
                longestSubStrLen = Math.max(longestSubStrLen, dpTable[i][j]);
            }
        }
    }
    return longestSubStrLen;
};
exports.default = run;
