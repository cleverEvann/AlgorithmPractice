/**
 * 给你一个字符串 s ，仅反转字符串中的所有元音字母，并返回结果字符串。
 * 元音字母包括 'a'、'e'、'i'、'o'、'u'，且可能以大小写两种形式出现不止一次。
 * 输入：s = "hello"
 * 输出："holle"
 */
//双指针

var reverseVowels = function(s) {
    let vowels = ['a','e','i','o','u','A','E','I','O','U']
    let i = 0
    let j = s.length - 1
    let arr = s.split('')
    while(i<j){
        if(vowels.includes(arr[i])){
            if(vowels.includes(arr[j])){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
                i++
                j--
            }else{
                j--
            }
        }else{
            i++
        }
    }
    return arr.join('')
};
