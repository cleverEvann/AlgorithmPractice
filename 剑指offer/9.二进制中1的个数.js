/**
 * 编写一个函数，输入是一个无符号整数（以二进制串的形式），返回其二进制表达式中数字位数为 '1' 的个数（也被称为 汉明重量).）。
 * 输入：n = 11 (控制台输入 00000000000000000000000000001011)
 * 输出：3
 * 解释：输入的二进制串 00000000000000000000000000001011 中，共有三位为 '1'。
 */

//按位与运算，都一为一，  全部转为二进制运算
var hammingWeight = function(n) {
    let count = 0;
    while(n != 0) {
        n = n&(n-1);
        count++;
    }
    return count;
};
hammingWeight(00000000000000000000000000001011)