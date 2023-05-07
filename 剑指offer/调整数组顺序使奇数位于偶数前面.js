/* 
输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。
*/

var exchange = function (nums) {
    //   let arr = [];
    //   for(let i = 0; i < nums.length; i++){
    //       if(nums[i] % 2){
    //           arr.push(nums[i]);
    //           nums.splice(i,1);
    //           i--;
    //       }
    //   };
    //   arr.splice(arr.length,0,...nums)
    //   return arr
    let l = 0,
        r = nums.length - 1
    //  let temp = null
    while (l < r) {
        if (nums[l] % 2 === 1) {
            l++
            continue
        }
        if (nums[r] % 2 === 0) {
            r--
            continue
        }
        //  temp = nums[l]
        //  nums[l] = nums[r]
        //  nums[r] = temp
        [nums[l], nums[r]] = [nums[r], nums[l]]
        l++
        r--
    }
    return nums
};