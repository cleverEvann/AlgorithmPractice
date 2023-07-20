/**
 * 给你字符串 s 和整数 k 。
 * 请返回字符串 s 中长度为 k 的单个子字符串中可能包含的最大元音字母数。
 * 英文中的 元音字母 为（a, e, i, o, u）。
 * 输入：s = "abciiidef", k = 3
 * 输出：3
 * 解释：子字符串 "iii" 包含 3 个元音字母。
 * 输入：s = "aeiou", k = 2
 * 输出：2
 * 解释：任意长度为 2 的子字符串都包含 2 个元音字母。
 */


var maxVowels = function(s, n) {
    //容易理解的js滑动窗口
    const letters = ['a','e','i','o','u'];
    const map = new Map();
    //将元音字母存储，用来快速判断是否为元音字母
    letters.forEach( val => map.set(val,true));
    //元音字母个数
    let  count = 0;
    //遍历从第一个数 到 第 n -1 个数，算出第一个窗口的count
    for(let i = 0 ;i < n ; i++){
        if(map.has(s[i])){
            count++;
        }
    }
    //将最大元音个数先存为第一个窗口，窗口右移不断更新最大值
    let max = count;
    // i 为窗口右边界下标 ,长度为n，左边界为 i - n
    //窗口每次右移 左边界+1,中间元素不考虑,右边界+1
    //[a,e,b,c] left = 0 , right =2, count = 2
    //[a,e,b,c] left = 1 , right =3, count = 1 
    //相当于移除了a 增加了c 
    //如果left 为元音字母 count --，right为元音字母count++
    for(let i = n  ; i< s.length ; i++){
        if(map.has(s[i])){
            count++
        }
        if(map.has(s[i-n])){
            count--;
        }
        max = Math.max(max,count)
    }
    return max
};  
