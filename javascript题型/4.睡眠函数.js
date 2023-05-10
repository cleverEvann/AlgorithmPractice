/**
 * 请你编写一个异步函数，它接收一个正整数参数 millis ，并休眠这么多毫秒。要求此函数可以解析任何值
 * 输入：millis = 100
 * 输出：100
 * 解释：
 * 在 100ms 后此异步函数执行完时返回一个 Promise 对象
 * let t = Date.now();
 * sleep(100).then(() => {
 * console.log(Date.now() - t); // 100
 * });
 */

/**
 * @param {number} millis
 */
async function sleep(millis) {
    await new Promise((s) => setTimeout(s,millis))
}


/** 
* let t = Date.now()
* sleep(100).then(() => console.log(Date.now() - t)) // 100
*/ 