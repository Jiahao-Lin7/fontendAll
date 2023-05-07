var levelOrder = function(root) {
    if(!root){
        return []
    }
    var arr = [root]
    var res =[]
    while(arr.length !== 0){
        var ans = []
        let len = arr.length
        while(len){
            var node = arr.shift()
            ans.push(node.val)
            if(node.left) arr.push(node.left)
            if(node.right) arr.push(node.right)
            len--
        }
        res.push(ans)
    }
    return res
};