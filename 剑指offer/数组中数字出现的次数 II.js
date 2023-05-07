//在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。
var singleNumber = function(nums) {
    nums.sort((a,b) => a-b)
    if(nums[nums.length-1] != nums[nums.length-2]){
        return nums[nums.length-1]
    }
    for(let i = 0; i < nums.length; i += 3){
        if(nums[i] != nums[i+1]){
            return nums[i]
        }
    }
};