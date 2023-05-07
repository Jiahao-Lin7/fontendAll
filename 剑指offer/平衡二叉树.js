var isBalanced = function(root) {
    if(!root){
        return true
    }
    return cal(root)
};

function cal(root){
    if(!root){
        return 0
    }
    let left = cal(root.left)
    let right = cal(root.right)
    if(left === false || right === false){
        return false
    }
    if(Math.abs(left-right) > 1){
        return false
    }
    return Math.max(left,right)+1
}