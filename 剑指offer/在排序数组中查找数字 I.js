//统计一个数字在排序数组中出现的次数。

var search = function(nums, target){
    let left = 0, right = nums.length-1
    while(left <= right){
        let mid = parseInt((left+right)/2)
        if(nums[mid] > target){
            right = mid-1
        }else if(nums[mid] < target){
            left = mid+1
        }else{
            if(nums[left] === target && nums[right] === target){
                return right-left+1
            }
            if(nums[left] < target){
                left++
            }
            if(nums[right] > target){
                right--
            }
        }
    }
    return 0
}