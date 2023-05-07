//一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。

var singleNumbers = function(nums) {
    nums.sort((a,b) => a-b)
    var res = []
    if(nums[nums.length-1] !== nums[nums.length-2]){
        res.push(nums[nums.length-1])
    }
    for(let i = 0;i< nums.length-1;i += 2){
        if(nums[i] != nums[i+1]){
            res.push(nums[i])
            i--
        }       
    }
    return res
};