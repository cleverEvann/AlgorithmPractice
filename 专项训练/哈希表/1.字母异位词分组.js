/**
 * 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
 * 字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。
 * 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
 * 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * 
 * 输入: strs = [""]
 * 输出: [[""]]
 * 
 * 输入: strs = ["a"]
 * 输出: [["a"]]
 */

/**
 * @param {string[]} strs 字符串数组 必须包含一个元素的字符串列表或单个字符
 * @returns {string[]} 字符串数组，其中每个元素都是不同的。 字母异位词的
 */

var groupAnagrams = function(strs) {
    const map = new Map()
    for (let i = 0; i < strs.length; i++){
        const str = strs[i]
        const sortedStr = str.split('').sort().join('');
        if (map.has(sortedStr)) {
            map.get(sortedStr).push(str);
        } else {
            map.set(sortedStr, [str]);
        }
    }
    return Array.from(map.values());
    
};