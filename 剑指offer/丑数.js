//我们把只包含质因子 2、3 和 5 的数称作丑数（Ugly Number）。求按从小到大的顺序的第 n 个丑数。

var nthUglyNumber = function(n) {
    if(n === 0) return 0
    var ugly = [1]
    var para2 = 0, para3 = 0, para5 = 0
    for(let i = 1; i < n; i++){
        ugly[i] = Math.min(ugly[para2]*2,ugly[para3]*3,ugly[para5]*5)
        if(ugly[i] === ugly[para2]*2) para2++
        if(ugly[i] === ugly[para3]*3) para3++
        if(ugly[i] === ugly[para5]*5) para5++
    }
    return ugly[n-1]
};