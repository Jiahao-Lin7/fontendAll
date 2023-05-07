var isSubStructure = function(A, B) {
    if(!A || !B) return false
    return isSub(A,B) || isSubStructure(A.left,B) || isSubStructure(A.right,B)
};

var isSub = function(a,b){ 
    if(!b) return true
    if(!a) return false
    if(a.val === b.val){
        return isSub(a.left,b.left) && isSub(a.right,b.right)
    }else{
        return false
    }
}