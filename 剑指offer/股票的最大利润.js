var maxProfit = function(prices) {
    let maxProfit = 0
    let minPrice = prices[0]
    for(let k of prices){
        maxProfit = Math.max(maxProfit,k-minPrice)
        if(k < minPrice){
            minPrice = k
        }
    }
    return maxProfit
};