/**
 * 给定一个字符串，编写一个函数判定其是否为某个回文串的排列之一。
 * 回文串是指正反两个方向都一样的单词或短语。排列是指字母的重新排列。
 * 回文串不一定是字典当中的单词。
 */

/**
 * @param {string} s
 * @return {boolean}
 */

var canPermutePalindrome = function(s) {
    let map = new Map()
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1)
        } else {
            map.set(s[i], 1)
        }
    }
    let count = 0
    for (let [key, value] of map) {
        if (value % 2 === 1) {
            count++
        }
    }
    return count <= 1
};
