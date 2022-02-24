//万万没有想到一道这么简单的算法题卡了我这么长时间，鉴于刚开始写算法题，也就没有优化性能，直接暴力循环解法，时间复杂度直接起飞

// var twoSum = function (nums, target) {
//   let newnum = []
//   for (let left = 0; left < nums.length; left++) {
//     for (let right = 1; right < nums.length; right++) {
//       if (nums[left] + nums[right] == target) {
//         if (newnum.indexOf(left) == -1 || newnum.indexOf(right) == -1) {
//             if(left!==right){
//                 newnum.push(left, right)
//             }
//         }
//       }
//     }
//   }
//   return newnum
// };
// console.log(twoSum([3, 2, 4], 6));

//将数字存在键值对中，并判断target - nums[i]的结果在键值对中是否存在，是则说明找到匹配数字
var twoSum = function (nums, target) {
  let keys = {};
  for (let i = 0, j = nums.length; i < j; i++) {
    let diff = target - nums[i]
    if (!isNaN(keys[diff])) {
      return [keys[diff], i]
    }
    keys[nums[i]] = i
  }
}
console.log(twoSum([3, 2, 4], 6));