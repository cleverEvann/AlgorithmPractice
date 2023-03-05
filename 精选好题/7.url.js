/**
 * URL化。编写一种方法，将字符串中的空格全部替换为%20。假定该字符串尾部有足够的空间存放新增字符，并且知道字符串的“真实”长度。（注：用Java实现的话，请使用字符数组实现，以便直接在数组上操作。）
 * 输入："Mr John Smith    ", 13
 * 输出："Mr%20John%20Smith"
 * 输入："               ", 5
 * 输出："%20%20%20%20%20"
 */

/**
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
var replaceSpaces = function (S, length) {
  let res = ''
  for (let i = 0; i < length; i++) {
    // console.log(S[i]);
    if (S[i] === ' ') res += '%20'
    else res += S[i]
  }
  return res
};
//j