/**
 * 给你一个整数数组 arr，请你帮忙统计数组中每个数的出现次数。
 * 如果每个数的出现次数都是独一无二的，就返回 true；否则返回 false。
 * 输入：arr = [1,2,2,1,1,3]
 * 输出：true
 * 解释：在该数组中，1 出现了 3 次，2 出现了 2 次，3 只出现了 1 次。没有两个数的出现次数相同。
 * @param {Array[Number]} arr 
 * @returns 
 */



var uniqueOccurrences = function (arr) {
    const occur = new Map();
    for (const x of arr) {
        if (occur.has(x)) {
            occur.set(x, occur.get(x) + 1);
        } else {
            occur.set(x, 1);
        }
    }
    const times = new Set();
    for (const [key, value] of occur) {
        times.add(value);
    }
    return times.size === occur.size;
};