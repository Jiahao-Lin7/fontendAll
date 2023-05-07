var lowestCommonAncestor = function(root, p, q) {
    if(!root) return null
    function cal(root,p,q){
        if(!root) return false
        let left = cal(root.left,p,q)
        let right = cal(root.right,p,q)
        if((left && right) || ((left || right) && (root.val === p.val || root.val === q.val))){
            return root
        }
        return left || right || (root.val == p.val || root.val === q.val)
    }
    return cal(root,p,q)
};