var kthLargest = function(root, k) {
    if(!root){
        return null
    }
    var res = []
    // arrSet(root,res)
    function arrSet(root){
        if(root){
            if(root.left) arrSet(root.left)
            res.push(root.val)
            if(root.right) arrSet(root.right)
        }
    }
    arrSet(root)
    // res.sort( (a,b)=> a-b)
    if(k === 1){
        return res.slice(-k)
    }else{
        return res.slice(-k,-k+1)
    }
};