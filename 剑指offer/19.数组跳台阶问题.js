/**
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
 * 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
 * 输入：n = 2
 * 输出：2
 * 输入：n = 7
 * 输出：21
 */

/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  const result = [1, 1];
  for (let j = 2; j < n + 1; j++)
    result[j] = (result[j - 1] + result[j - 2]) % (Math.pow(10, 9) + 7);
  return result[n];
};