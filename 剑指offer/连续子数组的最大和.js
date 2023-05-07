var maxSubArray = function(nums) {
    var pre = 0
    var ans = nums[0]
    nums.forEach((item) => {
        pre = Math.max(item,pre+item)
        if(pre > ans){
            ans = pre
        }
    })
    return ans
};