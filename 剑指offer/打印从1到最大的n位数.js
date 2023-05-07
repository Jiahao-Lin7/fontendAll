var printNumbers = function(n) {
    let end = 0
    let res = []
    // for(let i = 0; i < n; i++){
    //     end += 9 * Math.pow(10, i)
    // }
    end = Math.pow(10,n) - 1
    for(let i = 1; i <= end; i++){
        res.push(i)
    }
    return res
};