/**
 * 对于字符串 s 和 t，只有在 s = t + ... + t（t 自身连接 1 次或多次）时，我们才认定 “t 能除尽 s”。
 * 给定两个字符串 str1 和 str2 。返回 最长字符串 x，要求满足 x 能除尽 str1 且 x 能除尽 str2 。
 * 输入：str1 = "ABCABC", str2 = "ABC"
 * 输出："ABC"
 * @param {string} str1 
 * @param {string} str2 
 * @returns 
 */
//辗转相除法

var gcdOfStrings = function (str1, str2) {
    if (str1 + str2 !== str2 + str1) return ''
    const gcd = (a, b) => (0 === b ? a : gcd(b, a % b))
    return str1.substring(0, gcd(str1.length, str2.length))
  };
  
