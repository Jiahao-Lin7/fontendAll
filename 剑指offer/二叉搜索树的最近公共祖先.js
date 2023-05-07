var lowestCommonAncestor = function(root, p, q) {
    // var s
    // if(p.val > q.val){
    //     var temp = p
    //     p = q
    //     q = temp
    // }
    // function find(root,p,q,s){
    //     if(root.val > p.val && root.val < q.val){
    //         return root
    //     }
    //     if(root.val === p.val || root.val === q.val){
    //         return root
    //     }
    //     if(root.val < p.val) {
    //         s = find(root.right,p,q,s)
    //     }
    //     if(root.val > q.val){
    //         s = find(root.left,p,q,s)
    //     }
    //     return s
    // }
    // return find(root,p,q,s)
    let node = root
  // 二叉搜索树的特性本身就是这样，所以简单
    while(node) {
    // 比如 p = 3、 q = 5，而 root.val=6，大于 p 和 q，那么缩小范围，去 root.left 继续比较
        if (node.val > p.val && node.val > q.val) {
            node = node.left
        } else if (node.val < p.val && node.val < q.val) {
            node = node.right
        } else {
            return node
        }
    }
};