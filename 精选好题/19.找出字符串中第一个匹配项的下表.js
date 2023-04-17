/**
 * 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。如果 needle 不是 haystack 的一部分，则返回  -1 。
 * 示例 1：
 * 输入：haystack = "sadbutsad", needle = "sad"
 * 输出：0
 * 解释："sad" 在下标 0 和 6 处匹配。
 * 第一个匹配项的下标是 0 ，所以返回 0 。
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function(haystack, needle) {
    let m = haystack.length;
    let n = needle.length;
    if (n === 0) {
      return 0;
    }
    let lps = computeLPS(needle);
    let i = 0, j = 0;
    while (i < m) {
      if (haystack[i] === needle[j]) {
        i++;
        j++;
      } else {
        if (j !== 0) {
          j = lps[j - 1];
        } else {
          i++;
        }
      }
      if (j === n) {
        return i - j;
      }
    }
    return -1; 
};
function computeLPS(needle) {
    let n = needle.length;
    let lps = new Array(n).fill(0);
    let len = 0;
    let i = 1;
    while (i < n) {
      if (needle[i] === needle[len]) {
        len++;
        lps[i] = len;
        i++;
      } else {
        if (len !== 0) {
          len = lps[len - 1];
        } else {
          lps[i] = 0;
          i++;
        }
      }
    }
    return lps;
}
let haystack = "hello world";
let needle = "world";
let index = strStr(haystack, needle);
console.log(index); // 输出 6

