/**
 * 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。
 * 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
 * 注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。
 * 输入：x = 4
 * 输出：2
 * 解释：4 的算术平方根是 2 ，因
 */

/**
 * @param {number} x
 * @return {number}
 */

var mySqrt = function (x) {
    if (x == 0 || x == 1) {
        return x
    }
    for (let i = 1; i < x; i++){
        if (i * i <= x && (i + 1) * (i + 1) > x) { 
            return i
        }
    }
};
mySqrt(8)