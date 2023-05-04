/**
 * 请你编写并返回一个 计数器 函数，它接收一个整型参数 n 。这个 计数器 函数最初返回 n，每次调用它时返回前一个值加 1 的值 ( n ,  n + 1 ,  n + 2 ，等等)。
 * 输入：
 * n = 10 
 * ["call","call","call"]
 * 输出：[10,11,12]
 * 解释：
 * counter() = 10 // 第一次调用 counter()，返回 n。
 * counter() = 11 // 返回上次调用的值加 1。
 * counter() = 12 // 返回上次调用的值加 1。
 */

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    return function() {
        return n++
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */