// 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
// 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
// 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
//个人感觉用js写起来最简单的一道题，，，
//直接一个for循环搞定。
var removeElement = function (nums, val) {
  for (let i = 0, j = nums.length - 1; i <= j; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1)
      i--
    }
  }
};
