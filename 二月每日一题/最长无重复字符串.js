//给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

var lengthOfLongestSubstring = function (s) {
  //判断，如果不为空就跳出
  if (typeof s !== "string") {
    return
  }
  if (s.length === 0) {
    return 0;
  }
  //滑动窗口，定义
  let left = 0;
  let right = 1;
  //定义最长无重复的字符转串
  let max = 0;
  while (right <= s.length) {
    //lr 为当前判度胺的值
    let lr = s.slice(left, right);
    //判度截取的lr是否包含在判度中
    const index = lr.indexOf(s[right]);
    //如果存在，则重新划分，从判断包含的开始计数
    if (index > -1) {
      left = index + left + 1;
    } else {
      //不存在就继续切割，同时更新max值
      lr = s.slice(left, right + 1);
      max = Math.max(max, lr.length);
    }
    right++;
  }
  return max;
};
console.log(lengthOfLongestSubstring("abcabcbb"));

