//最长公共前缀
var longestCommonPrefix = function (strs) {
  if (!(strs instanceof Array)) {
    return
  }
  if (strs.length == 0) {
    return "";
  }
  //既然是公共前缀，那就直接拿到第一个值，让之后所有字符串都和第一个比
  let ans = strs[0]
  for (let i = 1, j = strs.length - 1; i <= j; i++) {
    let r = 0
    for (; r < ans.length && r < strs[i].length; r++) {
      if (ans[r] != strs[i][r]) {
        break;
      }
    }
    ans = ans.substr(0, r);
    if (ans === "")
      return ans;
  }
  return ans
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
