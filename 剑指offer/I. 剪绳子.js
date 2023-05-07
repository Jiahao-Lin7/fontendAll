/* 
给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 k[0],k[1]...k[m-1] 。请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。
*/

var cuttingRope = function(n) {
    if(n < 3){
        return 1
    }else if(n == 3){
        return 2
    }else{
        var nums = Math.floor(n/3)
        var tail = n % 3
        var mul = Math.pow(3,nums)
        if(tail == 0){
            return mul
        }else if(tail == 1){
            return mul / 3 * 4
        }else if(tail == 2){
            return mul * 2
        }
    }
};