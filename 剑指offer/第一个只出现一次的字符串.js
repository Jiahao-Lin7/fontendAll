//在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

var firstUniqChar = function(s){
    if(!s) return ' '
    var map = new Map()
    let res = ' '
    for(let k of s){
        if(map.has(k)){
            map.set(k,map.get(k)+1)
        }else{
            map.set(k,1)
        }
    }
    // try{
    //     map.forEach((value,key) => {
    //         if(value == 1){
    //             res = key
    //             throw Error()
    //         }
    //     })
    // }catch(error){}
    for(let item of map.keys()){
        if(map.get(item) == 1){
            return item
        }
    }
    return ' '
    // return res
}