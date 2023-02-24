/**
 * 给定一组非负整数 nums，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。
 * 注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数
 * 输入：nums = [10,2]
 * 输出："210"
 * 输入：nums = [3,30,34,5,9]
 * 输出："9534330"
 */

/**
 * @param {number[]} nums
 * @return {string}
 */

var largestNumber = function (nums) {
    let arr = []
    let max = "0",maxi = 0
    while (nums.length>0) {
        for (let i = 0; i < nums.length; i++) {
            if (String(nums[i]) > max) {
                max = String(nums[i])
                maxi=i
            }
        }
        max='0'
        arr.push(nums.splice(maxi,1))
    }
    
    console.log(arr);
}
largestNumber([3,30,34,5,9])
