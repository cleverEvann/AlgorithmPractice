/**
 * 实现一个算法，确定一个字符串 s 的所有字符是否全都不同。
 * 输入: s = "leetcode"
 * 输出: false 
 */

/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function(astr) {
    let map = new Map();
    for (let i = 0; i < astr.length; i++) {
        if (map.has(astr[i])) {
            return false;
        } else {
            map.set(astr[i], 1);
        }
    }
    return true;
};