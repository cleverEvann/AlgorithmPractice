/**
 * 输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点
 * 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 * 示例1:
 * Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
 * Output: [3,9,20,null,null,15,7]
 * 示例2:
 * Input: preorder = [-1], inorder = [-1]
 * Output: [-1]
 * 
 * 解题思路：
 * 前序遍历第一个数肯定是这个树的根节点，这个数在中序遍历中的位置，他的左边为左子树，右边为右子树
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
let buildTree = function(preorder, inorder) {
    if (preorder.length == 0 ||inorder.length==0) {
        return null
    }
    const sum =  inorder.findIndex(item => item === preorder[0])
    let left = inorder.slice(0, sum)
    let right = inorder.slice(sum+1)
    return {
        val: preorder[0],
        left: buildTree(preorder.slice(1, sum + 1), left),
        right: buildTree(preorder.slice(sum + 1),right)
    }
};
buildTree([3,9,20,15,7],[9,3,15,20,7])