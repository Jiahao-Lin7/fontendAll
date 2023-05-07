/* 
从若干副扑克牌中随机抽 5 张牌，判断是不是一个顺子，即这5张牌是不是连续的。
2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。
*/

var isStraight = function(nums) {
    var res = new Map()
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            nums.splice(i,1)
            i--
        }else if(res.has(nums[i])){
            return false
        }else{
            res.set(nums[i],true)
        }
    }
    var sum = 0
    nums.sort((a,b) => a-b)
    for(let i = 0; i < nums.length-1;i++){
        sum += nums[i+1]-nums[i]
    }
    return sum <= 4 ? true:false
};