/**
 * 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
 * 输入：s = "abaccdeff"
 * 输出：'b'
 * 输入：s = "" 
 * 输出：' '
 */

/**
 * @param {string} s
 * @return {character}
 */
//第一种 不用哈希表  就两个循环  执行用时快，内存消耗多
var firstUniqChar = function (s) {
    const map = {};
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            map[s[i]] += 1;
        } else {
            map[s[i]] = 1;
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) {
            return s[i];
        }
    }
    return ""
}
//第二种 哈希表    执行用时慢，内存消耗少
var firstUniqChar = function(s) {
    const map=new Map();
    for(let i of s)
        map.set(i,(map.get(i)||0)+1);
    for(let [key,value] of map)
        if(value===1) return key;
    return " "
};
