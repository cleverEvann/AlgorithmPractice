/**
 * 给你一个由正整数组成的整数数组 nums ，返回其中可被 3 整除的所有偶数的平均值。
 * 注意：n 个元素的平均值等于 n 个元素 求和 再除以 n ，结果 向下取整 到最接近的整数。
 * 输入：nums = [1,3,6,10,12,15]
 * 输出：9
 * 解释：6 和 12 是可以被 3 整除的偶数。(6 + 12) / 2 = 9 。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {	
    let sum = 0,n=0
    for (let i = 0; i < nums.length; i++) { 
        if (nums[i]%2==0) {
            if (nums[i] % 3 == 0) {
                sum += nums[i]
                n++
          }
        }
    }
    return Math.floor(sum / n) ||0;

};

averageValue([1,2,4,7,10])