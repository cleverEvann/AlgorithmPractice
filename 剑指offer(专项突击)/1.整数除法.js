/**
 * 给定两个整数 a 和 b ，求它们的除法的商 a/b ，要求不得使用乘号 '*'、除号 '/' 以及求余符号 '%' 。
 * 示例：
 *  输入：a = 15, b = 2 输出：7 解释：15/2 = truncate(7.5) = 7
 *  输入：a = 7, b = -3 输出：-2 解释：7/-3 = truncate(-2.33333..) = -2
 *  输入：a = 0, b = 1 输出：0
 *  输入：a = 1, b = 1 输出：1
 * 提示：
 *   -2^31 <= a, b <= 2^31 - 1
 *   b != 0
 */
//这是一种自己的减法  通俗易懂 就是执行用时长，内存消耗短
let divide = (a, b) => { 
    let res = 0
    const MAX_VALUE = Math.pow(2, 31) - 1;
    const MIN_VALUE = -Math.pow(2, 31);
    if (a === MIN_VALUE) {
        if (b === 1) {
            return MIN_VALUE;
        }
        if (b === -1) {
            return MAX_VALUE;
        }
    }
    if (a === 0) {
        return 0;
    }
     if(b==1){
            return a
        }
    if(b==-1){
            return -a
        }
    if (a < 0 && b>0 ||a > 0 && b<0 ) {
       
        while (Math.abs(a) >= Math.abs(b)) { 
            a += b;
            res--;
        }
    } else {
        while (Math.abs(a) >= Math.abs(b)) {
            a -= b;
            res++;
        }
    }
   
    return res; 
}
divide(-2147483648, -3)



//一个博主二分查找
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
let divides = function(dividend, divisor) {
    const MAX_VALUE = Math.pow(2, 31) - 1;
    const MIN_VALUE = -Math.pow(2, 31);
    // 考虑被除数为最小值的情况
    if (dividend === MIN_VALUE) {
        if (divisor === 1) {
            return MIN_VALUE;
        }
        if (divisor === -1) {
            return MAX_VALUE;
        }
    }
    // 考虑除数为最小值的情况
    if (divisor === MIN_VALUE) {
        return dividend === MIN_VALUE ? 1 : 0;
    }
    // 考虑被除数为 0 的情况
    if (dividend === 0) {
        return 0;
    }

    // 一般情况，使用类二分查找
    // 将所有的正数取相反数，这样就只需要考虑一种情况
    let res = 0;
    let flag = '';
    if (dividend < 0 && divisor > 0 || dividend > 0 && divisor < 0) {
        flag = '-';
    }
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    
    while (dividend >= divisor) {
        let temp = divisor, m = 1;
        while (temp <= (dividend >> 1)) { // 位运算模拟乘法，撑到最大。防止溢出
            temp <<= 1;
            m <<= 1;
        }
        dividend -= temp;
        res += m;
    }

    return parseInt(flag + res);
};
