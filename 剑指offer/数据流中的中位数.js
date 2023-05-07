var MedianFinder = function() {
    this.numArr = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.numArr.push(num)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    var arr = this.numArr
    arr.sort((a,b) => a-b)
    if(arr.length % 2 === 1){
        return arr[(arr.length-1) / 2]
    }else{
        return (arr[arr.length/2] + arr[arr.length/2-1])/2
    }
};