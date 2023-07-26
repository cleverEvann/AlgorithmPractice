/**
 * 给定一个二进制数组 nums 和一个整数 k，如果可以翻转最多 k 个 0 ，则返回 数组中连续 1 的最大个数 。
 * 输入：nums = [1,1,1,0,0,0,1,1,1,1,0], K = 2
 * 输出：6
 * 解释：[1,1,1,0,0,1,1,1,1,1,1]
 * 粗体数字从 0 翻转到 1，最长的子数组长度为 6。
 * 输入：nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3
 * 输出：10
 * 解释：[0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
 * 粗体数字从 0 翻转到 1，最长的子数组长度为 10。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let i = 0, j = 0 , n = nums.length;   //定义 i  和j
    let max = 0   //定义最大值
    let zero = 0  //定义有0的个数
    while (j < n) {
        if (nums[j] == 0) {
            zero++
        }
        while (zero > k) {
            if (nums[i] == 0) {
                zero--;
            }
            i++
        }
        j++
        if (j - i > max) {
            max=j-i
        }
    }
    return max
};
console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0],2));
