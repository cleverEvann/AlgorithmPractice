/**
 * 输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。
 * 输入: n = 1
 * 输出: [1,2,3,4,5,6,7,8,9]
 */

/**
 * @param {number} n
 * @return {number[]}
 */

var printNumbers = function (n) {
    let num = '9',j=''
    for (let i = 1; i <= n; i++) {
        j+=num
    }
    let arr = new Array(Number(j)).fill(0)
    for (let i = 0; i < arr.length; i++){
        arr[i] = i+1
    }
    console.log(arr);
    return arr
};
printNumbers(2)
