//给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
//有效字符串需满足：
//左括号必须用相同类型的右括号闭合。
//左括号必须以正确的顺序闭合。


//本题思路：运用es6键值对的形式尽可能的收集左括号，当出现右括号时直接拿出最后一个左括号进行比对，成功则继续比对，失败则为false

const isValid = (s) => {
  const length = s.length;
  if (length % 2 !== 0) return false;
  const Array = [];
  const Map = {
    '{': '}',
    '(': ')',
    '[': ']'
  }
  for (let i = 0; i < length; i++) {
    const el = s[i];
    if (Map[el]) {
      Array.push(el);
    } else {
      const l = Array.pop();
      if (Map[l] !== el) return false;
    }
  };
  return !Array.length;
};
