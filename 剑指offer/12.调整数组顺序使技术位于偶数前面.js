/**
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。
 * 输入：nums = [1,2,3,4]
 * 输出：[1,3,2,4] 
 * 注：[3,1,2,4] 也是正确的答案之一。
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
//这个题很简单  双指针就好
var exchange = function(nums) {
    if (nums.length == 0) {
        return []
    }
    let i = 0,j=nums.length-1,r
    while (i < j) {
        if (nums[i] % 2) {
            i++
        } else {
            r = nums[i]
            nums[i] = nums[j]
            nums[j] = r
            j--
        }
    }
    return nums

};

exchange([2,16,3,5,13,1,16,1,12,18,11,8,11,11,5,1])