/**
 * 给你两个字符串 word1 和 word2 。请你从 word1 开始，通过交替添加字母来合并字符串。如果一个字符串比另一个字符串长，就将多出来的字母追加到合并后字符串的末尾。
 * 返回 合并后的字符串 。
 * 输入：word1 = "abc", word2 = "pqr"
 * 输出："apbqcr"
 * 解释：字符串合并情况如下所示：
 * word1：  a   b   c
 * word2：    p   q   r
 * 合并后：  a p b q c r
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
//暴力破解
var mergeAlternately = function (word1, word2) {
    let max =word1.length>word2.length?word1:word2;
    let arr = []
    for (let i = 0, j = 2; i < max.length; i++){
        if (j % 2 == 0) {
            if (word1.length > i) {
                arr.push(word1[i])
                i--
            } else {
                arr.push(word2[i])
            }
        } else {
            if (word2.length > i) {
                arr.push(word2[i])
            } else {
                i++
                arr.push(word1[i])
            }
        }
        j++
        
    }
    return arr.join('')
};
mergeAlternately("ab", "pqrs")


//双指针
var mergeAlternately = function(word1, word2) {
    const m = word1.length, n = word2.length;
    let i = 0, j = 0;

    const ans = [];
    while (i < m || j < n) {
        if (i < m) {
            ans.push(word1[i]);
            ++i;
        }
        if (j < n) {
            ans.push(word2[j]);
            ++j;
        }
    }
    return ans.join('');
};
