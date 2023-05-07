/* 
地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。
请问该机器人能够到达多少个格子？ */

var movingCount = function(m, n, k) {
    let visited = new Array(m).fill(false)
    for(let i = 0; i < m ;i++){
        visited[i] = new Array(n).fill(false)
    }
    return dfCount(0,0,m,n,k,visited)
    
};

var dfCount = function(i,j,m,n,k,visited){
    let count = 0
    if(i >= 0 && j >= 0 && i < m && j < n && !visited[i][j] && getVal(i,j) <= k){
        visited[i][j] = true
        count = 1 + dfCount(i+1,j,m,n,k,visited) + dfCount(i-1,j,m,n,k,visited)
        + dfCount(i,j+1,m,n,k,visited) + dfCount(i,j-1,m,n,k,visited)
    }
    return count
}

var getVal = function(m,n){
    var m1 = m % 10 + Math.floor(m / 10)
    var n1 = n % 10 + Math.floor(n / 10)
    return m1 + n1  
}