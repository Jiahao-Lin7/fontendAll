/* 
给定一个数组 A[0,1,…,n-1]，请构建一个数组 B[0,1,…,n-1]，其中 B[i] 的值是数组 A 中除了下标 i 以外的元素的积, 
即 B[i]=A[0]×A[1]×…×A[i-1]×A[i+1]×…×A[n-1]。不能使用除法。

*/
var constructArr = function(a) {
    //节点前后分离计算
    if(a.length === 0) return []
    var res = [1]
    for(let i = 1; i < a.length; i++){
        res[i] = res[i-1]*a[i-1]
    }
    var temp = 1
    for(let i = a.length-2;i >= 0;i--){
        temp *= a[i+1]
        res[i] *= temp
    }
    return res
};