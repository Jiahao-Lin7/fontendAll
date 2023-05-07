/* 
0,1,···,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字（删除后从下一个数字开始计数）。求出这个圆圈里剩下的最后一个数字。

例如，0、1、2、3、4这5个数字组成一个圆圈，从数字0开始每次删除第3个数字，则删除的前4个数字依次是2、0、4、1，因此最后剩下的数字是3。

*/

var lastRemaining = function(n,m){
    function cal(n,m){
        if(n === 1){
            return 0
        }
        let res = cal(n-1,m)
        return (res+m%n)%n
    }
    return cal(n,m)
    // var arr = []
    // for(let i = 0; i < n ; i++){
    //     arr[i] = i
    // }
    // let count = 0
    // let resNum = 0
    // let curIndex = 0
    // while(resNum < n-1){
    //     if(arr[curIndex] !== n) count++
    //     if(count === m){
    //         arr[curIndex] = n
    //         count = 0
    //         resNum++
    //     }
    //     curIndex++
    //     if(curIndex === n) curIndex = 0
    // }
    // for(let i = 0; i < n; i++){
    //     if(arr[i] !== n){
    //         return arr[i]
    //     }
    // }
}