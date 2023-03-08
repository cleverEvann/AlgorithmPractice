/**
 * 字符串有三种编辑操作:插入一个英文字符、删除一个英文字符或者替换一个英文字符。 给定两个字符串，编写一个函数判定它们是否只需要一次(或者零次)编辑。
 * 输入:
 * first = "pale"
 * second = "ple"
 * 输出: True
 * 
 * 输入: 
 * first = "pales"
 * second = "pal"
 * 输出: False
 */

/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function (first, second) {
    const m = first.length, n = second.length
    if(Math.abs(m - n) > 1) {
        return false
    }
    for(let i = 0, j = 0, used = false; i < m && j < n; ) {
        if(first.charCodeAt(i) === second.charCodeAt(j)) {
            i++
            j++
        } else if (used) {
            return false
        } else {
            [i, j] = m > n ? [i + 1, j] : m < n ? [i, j + 1] : [i + 1, j + 1]
            used = true
        }
    }
    return true

};
oneEditAway("intention","execution")