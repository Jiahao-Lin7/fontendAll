var isSymmetric = function(root) {
    if(!root){
        return true
    }
    return Sym(root.left,root.right)
};

var Sym = function(left,right){
    if(left == null) return right == null
    if(right == null) return left == null
    if(left.val == right.val){
        return Sym(left.left,right.right) && Sym(left.right,right.left) 
    }else{
        return false
    }
}