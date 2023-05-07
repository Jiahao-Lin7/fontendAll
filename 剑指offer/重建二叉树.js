/* 
输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点。

假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 */

var buildTree = function(preorder, inorder) {
    if(preorder.length === 0 || inorder.length === 0) return null
    let newTree = new TreeNode(preorder[0])
    let index = inorder.indexOf(preorder[0])
    newTree.left = buildTree(preorder.slice(1,index+1),inorder.slice(0,index))
    newTree.right = buildTree(preorder.slice(index+1),inorder.slice(index+1))
    return newTree
};