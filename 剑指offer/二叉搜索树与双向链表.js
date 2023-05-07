var treeToDoublyList = function(root) {
    if(!root){
        return null
    }
    let pre = null, head
    var df = function(root,pre){
        if(!root) return
        if(root.left){
            pre = df(root.left,pre)
        }
        root.left = pre
        if(pre !== null){
            pre.right = root
        }else{
            head = root
        }
        pre = root
        if(root.right){
            pre = df(root.right,pre)
        }
        return pre
    }
    pre = df(root,pre)
    pre.right = head
    head.left = pre
    return head
};