/**
 * 稀疏数组搜索。有个排好序的字符串数组，其中散布着一些空字符串，编写一种方法，找出给定字符串的位置。
 *  输入: words = ["at", "", "", "", "ball", "", "", "car", "", "","dad", "", ""], s = "ta"
 * 输出：-1
 *  说明: 不存在返回-1。
 */

/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var findString = function(words, s) {
    const n = words.length
    for (let i = 0; i < n; i++) {
        if (words[i] === '') continue
        else {
            if (words[i] === s) {
                return i
            }
        }
    }
    return -1
};