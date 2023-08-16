/**
 * 如果可以使用以下操作从一个字符串得到另一个字符串，则认为两个字符串 接近 ：
 * 操作 1：交换任意两个 现有 字符。
 * 例如，abcde -> aecdb
 * 操作 2：将一个 现有 字符的每次出现转换为另一个 现有 字符，并对另一个字符执行相同的操作。
 * 例如，aacabb -> bbcbaa（所有 a 转化为 b ，而所有的 b 转换为 a ）
 * 你可以根据需要对任意一个字符串多次使用这两种操作。
 * 给你两个字符串，word1 和 word2 。如果 word1 和 word2 接近 ，就返回 true ；否则，返回 false 。
 * 输入：word1 = "abc", word2 = "bca"
 * 输出：true
 * 解释：2 次操作从 word1 获得 word2 。
 * 执行操作 1："abc" -> "acb"
 * 执行操作 1："acb" -> "bca"
 * 
 * 输入：word1 = "a", word2 = "aa"
 * 输出：false
 * 解释：不管执行多少次操作，都无法从 word1 得到 word2 ，反之亦然。
 * 
 * 
 * 输入：word1 = "cabbba", word2 = "abbccc"
 * 输出：true
 * 解释：3 次操作从 word1 获得 word2 。
 * 执行操作 1："cabbba" -> "caabbb"
 * 执行操作 2："caabbb" -> "baaccc"
 * 执行操作 2："baaccc" -> "abbccc"
 * 
 */


/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    let mp1 = {}, mp2 = {}
    // 初始化哈希表
    for(let s of word1) {
        if(!mp1[s]) {
            mp1[s] = 1
        } else {
            mp1[s]++
        }
    }
    for(let s of word2) {
        if(!mp2[s]) {
            mp2[s] = 1
        } else {
            mp2[s]++
        }
    }
    // 长度一致
    if(word1.length != word2.length) {
        return false
    }
    // 字母种类一致
    for(let s in mp1) {
        if(!(mp1[s] && mp2[s])) {
            return false
        }
    }
    // 频次一致
    let val1 = Object.values(mp1).sort((a, b) => a - b), val2 = Object.values(mp2).sort((a, b) => a - b)
    for(let i = 0; i < val1.length; i++) {
        if(val1[i] != val2[i]) {
            return false
        }
    }
    return true
};