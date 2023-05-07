var levelOrder = function(root) {
    if(!root){
        return []
    }
    var res = [root]
    var ans = []
    while(res.length !== 0){
        var arr = []
        var len = res.length
        if(level%2){
            while(len > 0){
                var node = res.shift()
                arr.push(node.val)
                if(node.right) res.push(node.right)
                if(node.left) res.push(node.left)
                len--
            }
        }else{
            while(len > 0){
                var node = res.pop()
                arr.push(node.val)
                if(node.left) res.unshift(node.left)
                if(node.right) res.unshift(node.right)
                len--
            }
        }
        ans.push(arr)
    }
    return ans
};