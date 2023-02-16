/**
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。不得使用库函数，同时不需要考虑大数问题。
 * 输入：x = 2.00000, n = 10
 * 输出：1024.00000
 * 
 * 输入：x = 2.10000, n = 3
 * 输出：9.26100
 */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

//这种方法能解决问题，但运行速度太慢
let myPow = function (x, n) {
    let sum = x
    if (x == 0) {
        return 0
    }
    if (n == 0) {
        return 1
    }
    if (n < 0) {
        //小于0的时候就变成为 sum的倒数的平方
        sum = 1 / sum
        for (let i = -1; i > n; i--){
            sum*=1/x
        }
    } else if (n > 0) {
        //大于0的话循环乘就好了。  (ps:速度太慢了)
        for (let i = 1; i < n; i++){
            sum*=x
        }
    } 
    return sum
};

// 简单的写法 思路为位运算   1>>1=2  2>>1=4 意思就是每向又移一位就是一个数的平方
let myPows = function (x, n) {
    if (n === 0) {
        return 1;
      }
      if (n === 1) {
        return x;
      }
      if (n === -1) return 1 / x;
      // 用右移代替除以2
      let result = myPows(x, n >> 1);
      result *= result;
      // 用位与运算代替求余运算符来判断一个数是不是奇数还是偶数
      // 因为位运算 8，4，2，1   如果是奇数的话右移一位就少了一次乘法  所以要补回来
      if ((n & 1) == 1) {
        result *= x;
      }
      return result;
};
myPows(3.00000,3)
