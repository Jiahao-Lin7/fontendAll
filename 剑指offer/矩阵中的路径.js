/* 
给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

 

例如，在下面的 3×4 的矩阵中包含单词 "ABCCED"（单词中的字母已标出）
*/

var exist = function(board, word) {
    if(board.length === 0 || board[0].length === 0) return false
    let visited = new Array(board.length).fill(false)
    for(let i = 0; i < visited.length; i++){
        visited[i] = new Array(board[0].length).fill(false)
    }
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            if(find(i,j,0,board,word,visited)){
                return true
            }
        }
    }
    return false
};

var find = function(i,j,k,board,word,visited){
    if(k === word.length) return true
    if(i < 0 || j < 0 || i >= board.length || j >= board[0].length || visited[i][j] || board[i][j] !== word[k]) return false
    visited[i][j] = true
    let res = find(i+1,j,k+1,board,word,visited) || find(i-1,j,k+1,board,word,visited) || find(i,j+1,k+1,board,word,visited) || find(i,j-1,k+1,board,word,visited)
    visited[i][j] = false
    return res
}