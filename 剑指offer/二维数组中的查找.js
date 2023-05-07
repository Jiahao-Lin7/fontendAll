/* 
在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，
每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

*/

var findNumberIn2DArray = function(matrix, target) {
    let rows = matrix.length - 1
    for(let i = rows,j = 0; i >=0 && j < matrix[0].length;){
        if(matrix[i][j] === target){
            return true
        }else if(matrix[i][j] > target){
            i--
            continue
        }else{
            j++ 
            continue
        }
    }
    return false
};