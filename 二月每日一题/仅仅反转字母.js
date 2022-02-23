//运用双指针的原理
//设置Left，rigth值，符合条件的依次替换掉
var reverseOnlyLetters = function (s) {
  ///^[a-zA-Z]+$/
  if (typeof s !== "string") {
    return
  }
  let arr = [...s]
  let left = 0, right = arr.length - 1
  while (true) {
    while (left < right && !(/^[a-zA-Z]+$/).test(arr[left])) {
      left++
    }
    while (left < right && !(/^[a-zA-Z]+$/).test(arr[right])) {
      right--
    }
    if (left > right) {
      break
    }
    swrp(arr, left, right)
    left++;
    right--

  }
  return arr.join('');
};
function swrp (arr, left, right) {
  let newarr = arr[left];
  arr[left] = arr[right];
  arr[right] = newarr;
}
console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));