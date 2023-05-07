/* 
给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 k[0],k[1]...k[m - 1] 。请问 k[0]*k[1]*...*k[m - 1] 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
*/

var cuttingRope = function(n) {
    if(n <= 3){
        return n-1
    }else{
        const MOD = 1e9+7
        let quotient = Math.floor(n/3)
        let reminder = n % 3
        let res = 1
        for(let i = 0; i < quotient-1; i++){
            res = res * 3 % MOD 
        }
        if(reminder === 0) return res * 3 % MOD
        if(reminder === 1) return res * 4 % MOD
        if(reminder === 2) return res * 6 % MOD
    }
};