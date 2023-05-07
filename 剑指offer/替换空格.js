/* 
请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 */
var replaceSpace = function(s) {
    let arr = s.split(' ')
    return arr.join('%20')
};