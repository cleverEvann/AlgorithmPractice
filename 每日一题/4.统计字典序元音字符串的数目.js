/**
 * 给你一个整数 n，请返回长度为 n 、仅由元音 (a, e, i, o, u) 组成且按 字典序排列 的字符串数量。
 * 字符串 s 按 字典序排列 需要满足：对于所有有效的 i，s[i] 在字母表中的位置总是与 s[i+1] 相同或在 s[i+1] 之前。
 * 示例 1：
 * 输出：5
 * 解释：仅由元音组成的 5 个字典序字符串为 ["a","e","i","o","u"]
 * 示例 2：
 * 输入：n = 2
 * 输出：15
 * 解释：仅由元音组成的 15 个字典序字符串为
 * ["aa","ae","ai","ao","au","ee","ei","eo","eu","ii","io","iu","oo","ou","uu"]
 */


/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
    a = e = i = o = u = 1;
    for(let k = 1;k<n;k++){
        a = a + e + i + o + u;
        e = e + i + o + u;
        i = i + o + u;
        o = o + u;
    }
    return a + e + i + o + u;
};
    