var levelOrder = function(root) {
    if(!root){
        return []
    }
    var res = [root]
    var ans = []
    while(res.length !== 0){
        var n = res.length
        while(n){
            var node = res.shift()
            ans.push(node.val)
            if(node.left) res.push(node.left)
            if(node.right) res.push(node.right)
            n--
        }
    }
    return ans
};