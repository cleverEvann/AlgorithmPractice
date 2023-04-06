/**
 * 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
 * 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。
 * 示例 1：
 * 输入：nums = [1,2,0]
 * 输出：3
 * 示例 2：
 * 输入：nums = [3,4,-1,1]
 * 输出：2
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    nums.sort((a,b)=>a-b)
let num=1
 for(let i=0;i<nums.length;i++){
     if(nums[i]===num){
         num++
     }
 }
 return num
};