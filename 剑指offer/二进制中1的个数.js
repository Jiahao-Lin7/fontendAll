var hammingWeight = function(n) {
    let sum = 0
    n = n.toString(2)
    for(let k of n){
        if(k == '1'){
            sum++
        }
    }
    return sum
};