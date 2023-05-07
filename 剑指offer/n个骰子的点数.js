/* 
把n个骰子扔在地上，所有骰子朝上一面的点数之和为s。输入n，打印出s的所有可能的值出现的概率。

你需要用一个浮点数数组返回答案，其中第 i 个元素代表这 n 个骰子所能掷出的点数集合中第 i 小的那个的概率。
*/

var dicesProbability = function(n) {
    if(n === 0) return []
    var dp = new Array(6).fill(1/6) //初始化一个骰子的概率结果
    if(n === 1) return dp
    for(let i = 2; i < n+1; i++){ //每增加一个骰子后的结果计算
        var temp = new Array(5*i+1).fill(0) //增加一个骰子后新的可能结果数量数组
        for(let j = 0; j < dp.length;j++){ //遍历原结果中的每一个值
            for(let k = 0; k < 6; k++){ //新加入骰子结果的遍历 原结果中的每一个值能够为6个新结果值增加概率，增加的概率为原结果中值的 1/6
                temp[j+k] += dp[j] / 6
            }
        }
        dp = temp //保存更新后结果
    }
    return dp
};