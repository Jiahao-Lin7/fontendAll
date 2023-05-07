var strToInt = function(str) {
    str = str.trim()
    let num = str.match(/^[-+]?\d+/)
    if(!num){
        return 0
    }else{
        num = num[0]
    }
    const min = -Math.pow(2,31)
    const max = Math.pow(2,31)-1
    return num < min ? min : num > max ? max : num
};