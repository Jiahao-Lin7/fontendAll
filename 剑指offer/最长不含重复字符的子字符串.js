//请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。

var lengthOfLongestSubstring = function(s) {
    if(s.length === 0){
        return 0
    }
    var arr = s.split('')
    var start = 0
    var sum = 1
    for(let i = 1; i < arr.length; i++){
        var arr_sub = arr.slice(start,i)
        if(arr_sub.indexOf(arr[i]) != -1){
            start = i - arr_sub.length + arr_sub.indexOf(arr[i]) + 1
        }else{
            sum = Math.max(i-start+1,sum)
        }
    }
    return sum
};