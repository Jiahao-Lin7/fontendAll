//数字以0123456789101112131415…的格式序列化到一个字符序列中。在这个序列中，第5位（从下标0开始计数）是5，第13位是1，第19位是4，等等。

var findNthDigit = function(n) {
    if(n <= 9){
        return n
    }
    let digit = 1, start = 1,count = 10
    while(n > count){
        n -= count 
        digit += 1
        start *= 10
        count = 9*digit*start
    }
    var num = start + n/digit
    return num.toString()[(n)%digit]
};