/* 
输入一个字符串，打印出该字符串中字符的所有排列。

你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。
 */

var permutation = function(s) { 
    let res = []
    let visited = []
    const arr = s.split('')
    const temp = []
    arr.sort()
    function Fn(i,n,visited){
        if(i === n){
            res.push(temp.join(''))
        }
        for(let j = 0; j < n; j++){
            if(visited[j] || (j > 0 && !visited[j-1] && arr[j] === arr[j-1])){
                continue
            }
            visited[j] = true
            temp.push(arr[j])
            Fn(i+1,n,visited)
            temp.pop()
            visited[j] = false
        }
    }
    Fn(0,arr.length,visited)
    return res
};