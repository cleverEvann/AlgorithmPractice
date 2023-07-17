/**
 * 给你一个由 n 个元素组成的整数数组 nums 和一个整数 k 。
 * 请你找出平均数最大且 长度为 k 的连续子数组，并输出该最大平均数。
 * 任何误差小于 10-5 的答案都将被视为正确答案。
 * 输入：nums = [1,12,-5,-6,50,3], k = 4
 * 输出：12.75
 * 解释：最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
 */


var findMaxAverage = function(nums, k) {
    let sum=0;
    for(let i=0;i<k;i++){
        sum += nums[i];
    }
    let max=sum;
    for(let i=k;i<nums.length;i++){
        sum += nums[i]-nums[i-k];
        max = Math.max(max,sum);
    }
    return max/k;
};
