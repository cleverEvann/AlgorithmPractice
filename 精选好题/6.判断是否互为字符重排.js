/**
 * 给定两个由小写字母组成的字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。
 * 输入: s1 = "abc", s2 = "bca"
 * 输出: true 
 * 
 * 输入: s1 = "abc", s2 = "bad"
 * 输出: false
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function (s1, s2) {
    let map = new Map()
    for (let i = 0; i < s1.length; i++) {
        map.set(s1[i], map.get(s1[i]) + 1 || 1)
    }
    for (let i = 0; i < s2.length; i++) {
        if (map.has(s2[i])) {
            map.set(s2[i], map.get(s2[i]) - 1)
            if (map.get(s2[i]) === 0) {
                map.delete(s2[i])
            }
        } else {
            return false
        }
    }
    return map.size === 0
}

console.log(CheckPermutation("abc", "bca"))
