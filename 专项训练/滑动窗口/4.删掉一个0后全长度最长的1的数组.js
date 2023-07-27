/**
 * 给你一个二进制数组 nums ，你需要从中删掉一个元素。
 * 请你在删掉元素的结果数组中，返回最长的且只包含 1 的非空子数组的长度。
 * 如果不存在这样的子数组，请返回 0 。
 * 输入：nums = [1,1,0,1]
 * 输出：3
 * 解释：删掉位置 2 的数后，[1,1,1] 包含 3 个 1 。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let i = 0, j = 0 , n = nums.length;   //定义 i  和j
    let max = 0   //定义最大值
    let zero = 0  //定义有0的个数
    while (j < n) {
        if (nums[j] == 0) {
            zero++
        }
        while (zero > 1) {
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
    return max-1
};