//在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。
//你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。
//给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？

var maxValue = function(grid) {
    var dp = new Array(grid.length).fill(new Array(grid[0].length))
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++ ){
            if(i === 0 && j=== 0){
                dp[i][j] = grid[i][j]
            }else if(i === 0 && j !== 0){
                dp[i][j] = dp[i][j-1]+grid[i][j]
            }else if(i !== 0 && j === 0){
                dp[i][j] = dp[i-1][j]+grid[i][j]
            }else{
                dp[i][j] = Math.max(dp[i][j-1],dp[i-1][j])+grid[i][j]
            }
        }
    }
    return dp[dp.length-1][dp[0].length-1]
};