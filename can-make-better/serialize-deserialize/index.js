function TreeNode(val){
  this.val = val;
  this.left = null;
  this.right = null;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (!root) {
        return null;
    }
    return "" + root.val + "," + serialize(root.left) + "," + serialize(root.right);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (!data || data === "null") return null;

    data = data.split(",");
    
    let root = new TreeNode(data.shift());
    var deserializer = function(node) {
        const left = data.shift();
        if (left === "null") {
            node.left = null;
        } else {
            node.left = new TreeNode(left);
            deserializer(node.left);
        }
        

        const right = data.shift();
        if (right === "null") {
            node.right = null;
        } else {
            node.right = new TreeNode(right);
            deserializer(node.right);
        }
    }
    
    deserializer(root);
    return root;
};

const bst = new TreeNode(2);
bst.left = new TreeNode(1);
bst.right = new TreeNode(3);

console.log(bst);
console.log(serialize(bst));

// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/