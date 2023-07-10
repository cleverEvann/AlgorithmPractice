/**
 * 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。
 * 返回这三个数的和。
 * 假定每组输入只存在恰好一个解。
 * 输入：nums = [-1,2,1,-4], target = 1
 * 输出：2
 * 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
 * 
 * 输入：nums = [0,0,0], target = 1
 * 输出：0
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let min = Infinity
    let minX
    for (let i = 0; i < nums.length-2; i++) {
       for (let j = i+1; j < nums.length-1; j++) {
           for (let l = j + 1; l < nums.length; l++) {
               let num = Math.abs(target - (nums[i] + nums[j] + nums[l]))
               if (min > num) {
                   min = num
                   minX = nums[i] + nums[j] + nums[l]
               }
            
         }
       }
        
    }
    return minX
};
console.log(threeSumClosest([-1,2,1,-4],1));
