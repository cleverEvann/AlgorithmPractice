/**
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果
 * 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
 * 假设环境不允许存储 64 位整数（有符号或无符号）。
 * 输入：x = 123
 * 输出：321
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let result = 0;
  while (x !== 0) {
    result = result * 10 + x % 10;
    x = (x / 10) | 0;
  }
  return (result | 0) === result ? result : 0;
};
