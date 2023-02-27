/**
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 * 输入：n = 1
 * 输出：["()"]
 */
/**
 * @param {number} n
 * @return {string[]}
 */
//剪枝策略，把这个问题想象成一个二叉树
var generateParenthesis = function(n) {
    const res = []
    if (n <= 0) return res

    const dfs = (path, open, close) => {
        if (open > n || close > open) return
        if (path.length == 2 * n) {
            res.push(path)
            return
        }
        dfs(path + "(", open + 1, close)
        dfs(path + ")", open, close + 1)
    }

    dfs("", 0, 0)
    return res
};