/* 
请定义一个队列并实现函数 max_value 得到队列里的最大值，要求函数max_value、push_back 和 pop_front 的均摊时间复杂度都是O(1)。

若队列为空，pop_front 和 max_value 需要返回 -1
*/
var MaxQueue = function() {
    this.queue = []
    this.maxQueue = []
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    if(this.queue.length !== 0){
        return this.maxQueue[0]
    }else{
        return -1
    }
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    while(this.maxQueue.length !== 0 && this.maxQueue[this.maxQueue.length-1] < value){
        this.maxQueue.pop()
    }
    this.maxQueue.push(value)
    this.queue.push(value)
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    if(this.queue.length !== 0){
        if(this.queue[0] === this.maxQueue[0]){
            this.maxQueue.shift()
        }
        return this.queue.shift()
    }else{
        return -1
    }
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */