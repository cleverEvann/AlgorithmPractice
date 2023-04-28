/**
 * 请你编写一段代码实现一个数组方法，使任何数组都可以调用 array.last() 方法，这个方法将返回数组最后一个元素。如果数组中没有元素，则返回 -1 。
 * 输入：nums = [1,2,3]
 * 输出：3
 * 解释：调用 nums.last() 后返回最后一个元素： 3。
 */
Array.prototype.last = function() {
    // 使用合并操作符：？？，当左边是null或者undefined时，返回右边边
    // 防止左边是0时，也返回右边
    return this[this.length - 1] ?? -1
};