/**
 * 给你一个整数数组 ranks 和一个字符数组 suit 。你有 5 张扑克牌，第 i 张牌大小为 ranks[i] ，花色为 suits[i] 。
 * 下述是从好到坏你可能持有的 手牌类型 ：
 * 1."Flush"：同花，五张相同花色的扑克牌。
 * 2."Three of a Kind"：三条，有 3 张大小相同的扑克牌。
 * 3."Pair"：对子，两张大小一样的扑克牌。
 * 4."High Card"：高牌，五张大小互不相同的扑克牌。
 * 请你返回一个字符串，表示给定的 5 张牌中，你能组成的 最好手牌类型 。
 * 注意：返回的字符串 大小写 需与题目描述相同。
 * 
 * 输入：ranks = [13,2,3,1,9], suits = ["a","a","a","a","a"]
 * 输出："Flush"
 * 解释：5 张扑克牌的花色相同，所以返回 "Flush" 。
 * 
 * 输入：ranks = [4,4,2,4,4], suits = ["d","a","a","b","c"]
 * 输出："Three of a Kind"
 * 解释：第一、二和四张牌组成三张相同大小的扑克牌，所以得到 "Three of a Kind" 。
 * 注意我们也可以得到 "Pair" ，但是 "Three of a Kind" 是更好的手牌类型。
 * 有其他的 3 张牌也可以组成 "Three of a Kind" 手牌类型。
 */
//自己的写法，用哈希表一个一个判断
function bestHand(ranks, suits) {
    let num1=1,num2,num3;
    let sum = suits[0];
    for (let i = 1; i < suits.length; i++) {
        if (suits[i] !== sum) {
            num1 = 0
            break
        }
    }
    let map = new Map();
    for (let i = 0; i < ranks.length; i++) {
        map.has(ranks[i])? map.set(ranks[i], map.get(ranks[i]) + 1) : map.set(ranks[i],1)
    }
    for (const item of map) {
        if (item[1] >= 3) {
            num2 = 1
        } else if (item[1] == 2) {
            num3 = 1
        } 
    }
    if (num1) {
        return "Flush"
    }
    if (num2) {
        return "Three of a Kind"
    }
    if (num3) {
        return "Pair"
    }
    return 'High Card'
};
console.log(bestHand([2,1,2,1,1],["d","b","a","a","d"]));
