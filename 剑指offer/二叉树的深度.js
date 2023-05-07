var maxDepth = function(root) {
    if(!root){
        return 0
    }
    var left = maxDepth(root.left)
    var right = maxDepth(root.right)
    var de = Math.max(left, right) + 1
    return de
};