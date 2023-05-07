var pathSum = function(root, target) {
    var res = []
    if(!root){
        return res
    }
    var dfs = function(root,cur,path){
        cur += root.val
        path.push(root.val)
        if(cur == target && root.left == null && root.right == null){
            res.push([...path])
        }
        if(root.left){
            dfs(root.left,cur,path)
        }
        if(root.right){
            dfs(root.right,cur,path)
        }
        path.pop()
    }
    dfs(root,0,[])
    return res
};