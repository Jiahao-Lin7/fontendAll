//给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。
//一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。


var translateNum = function(num) {
    var p = 0, q = 1, r = 1
    var s = num.toString()
    for(let i = 1; i < s.length; i++){
        p = q
        q = r
        var pre = s.split('').slice(i-1,i+1).join('')
        if(pre >= '10' && pre <= '25'){
            r += p
        }
    }
    return r
};