//输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。
var minNumber = function(nums) {
    nums.sort((a,b) => {
        var s1 = a + '' + b
        var s2 = b + '' + a
        for(let i = 0; i < s1.length; i++){
            if(s1.charAt(i) < s2.charAt(i)){
                return -1
            }else if(s1.charAt(i) > s2.charAt(i)){
                return 1
            }
        }
        return 1
    })
    return nums.join('')
}