/* 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

*/

var findContinuousSequence = function(target) {
    let res = []
    let queue = []
    let sum = 0
    for(let i = 1; i<target;i++){
        queue.push(i)
        sum += i
        while(sum > target){
            sum -= queue.shift()
        }
        if(sum === target){
            res.push([...queue])
        }
    }
    return res
};