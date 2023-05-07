/**
 * @param {number[]} postorder
 * @return {boolean}
 */
 var verifyPostorder = function(postorder) {
    if(!postorder){
        return true
    }
    return verify(postorder)
};

var verify = function(postorder) {
    if(postorder.length <= 1){
        return true
    }
    var index = 0
    var root = postorder[postorder.length-1]
    for(let i = 0; i < postorder.length; i++){
        if(postorder[i] >= postorder[postorder.length-1]){
            index = i
            break
        }
    }
    var arrLeft = index !== 0 ? postorder.slice(0, index):[]
    var arrRight = index < postorder.length - 2 ? postorder.slice(index,postorder.length-1):postorder.slice(index,postorder.length-1)
    // var maxLeft = arrLeft[0],minRight = arrRight[0]
    // for(let k of arrLeft){
    //     if(k > maxLeft) maxLeft = k
    // }
    // for(let k of arrRight){
    //     if(k < arrRight) arrRight = k
    // }
    // if(maxLeft < root && minRight > root){
    //     var left = verify(arrLeft)
    //     var right = verify(arrRight)
    // }else{
    //     return false
    // }
    // return left && right
    if(arrLeft.length >= 1){
        var maxLeft = arrLeft[0]
        for (let k of arrLeft) {
            if (k > maxLeft) maxLeft = k
        }
        if (maxLeft < root ) {
            var left = verify(arrLeft)
        } else {
            return false
        }
    }else{
        left = true
    }
    if(arrRight.length >= 1){
        var minRight = arrRight[0]
        for (let k of arrRight) {
            if (k < minRight) minRight = k}
            if (minRight > root ) {
                var right = verify(arrRight)
            } else {
                return false
            }
    }else{
        right = true
    }
    return left && right
};