/**
 * 给你两个整数，被除数 dividend 和除数 divisor。将两数相除，要求 不使用 乘法、除法和取余运算。
 * 整数除法应该向零截断，也就是截去（truncate）其小数部分。例如，8.345 将被截断为 8 ，-2.7335 将被截断至 -2 。
 * 返回被除数 dividend 除以除数 divisor 得到的 商 。
 * 输入: dividend = 10, divisor = 3
 * 输出: 3
 * 解释: 10/3 = 3.33333.. ，向零截断后得到 3 。
 * 输入: dividend = 7, divisor = -3
 * 输出: -2
 * 解释: 7/-3 = -2.33333.. ，向零截断后得到 -2 。
 */

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const MAX = 2147483647, MIN = -2147483648;
var divide = function(dividend, divisor) {
    if(dividend == MIN && divisor == -1)
        return MAX;
    let a = Math.abs(dividend), b = Math.abs(divisor), res = 0;
    for(let i=31;i>=0;i--){
        if((a>>>i)>=b){
            // 1<<31 = -2147483648，需特殊处理
            if(i==31){
                a -= MAX;
                a -= 1;
                res -= MIN;
            } else{
                a -= b<<i;
                res += 1<<i;
            }
        }
    }
    return (dividend > 0) == (divisor > 0) ? res : -res;
};