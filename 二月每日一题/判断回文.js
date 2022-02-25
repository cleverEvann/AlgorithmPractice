//给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
//回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

//这个有点思路，运用双指针，一个指前面一个指后面，相等就行
// var isPalindrome = function (x) {
//   if (typeof x !== "number") {
//     return
//   }
//   if (x < 10 & x >= 0) {
//     return true
//   }
//   let arr = [...x.toString()]
//   let left = 0, right = arr.length - 1;
//   while (left < right) {
//     if (arr[left] !== arr[right]) {
//       return false
//     }
//     left++;
//     right--;
//     if (left >= right) {
//       return true
//     }
//   }

// };

//2.官方解法
// var isPalindrome = function (x) {
//   if (x < 0 || (x % 10 === 0 && x !== 0)) {
//     return false;
//   }

//   let revertedNumber = 0;
//   while (x > revertedNumber) {
//     revertedNumber = revertedNumber * 10 + x % 10;
//     x = Math.floor(x / 10);
//   }
//   return x === revertedNumber || x === Math.floor(revertedNumber / 10);
// }

// 3.突发奇想
var isPalindrome = function (x) {
  let arr = [...x.toString()].join()
  let arr1 = [...x.toString()].reverse().join()
  if (arr == arr1) {
    return true
  }
  return false
}
console.log(isPalindrome(121));