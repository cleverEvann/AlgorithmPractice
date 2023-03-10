/**
 * 字符串轮转。给定两个字符串s1和s2，请编写代码检查s2是否为s1旋转而成（比如，waterbottle是erbottlewat旋转后的字符串）。
 * 输入：s1 = "waterbottle", s2 = "erbottlewat"
 * 输出：True
 * 
 * 输入：s1 = "aa", s2 = "aba"
 * 输出：False
 */

var isFlipedString = function (s1, s2) {
    if (s1.length === 0 && s2.length === 0) {
        return true;
    }
    if (s1.length !== s2.length) {
        return false;
    }

    return (s2 + s2).indexOf(s1) >= 0 ? true : false;
};
