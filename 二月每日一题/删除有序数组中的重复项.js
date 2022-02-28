// 给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。
//也是特别简单的一道题，不需要说啥
// var removeDuplicates = function (nums) {
//   let newnums = [...new Set(nums)]
//   return newnums
// };
var removeDuplicates = function (nums) {
  let slow = 0, fast = 0, len = nums.length;
  while (fast < len) {
    if (nums[slow] === nums[fast]) {
      fast++;
    } else {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  return slow + 1;
};
removeDuplicates([1, 1, 2])