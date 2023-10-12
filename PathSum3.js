/*Given the root of a binary tree and an integer targetSum, return the number
 of paths where the sum of the values along the path equals targetSum.

The path does not need to start or end at the root or a leaf, but it must go downwards 
(i.e., traveling only from parent nodes to child nodes). */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var pathSum = function (root, targetSum) {
  let count = 0;

  function dfs(node, sum) {
    if (!node) {
      return;
    }
    sum += node.val;
    if (sum === targetSum) {
      count++;
    }
    dfs(node.left, sum);
    dfs(node.right, sum);
  }

  function traverse(node) {
    if (!node) {
      return;
    }
    dfs(node, 0);
    traverse(node.left);
    traverse(node.right);
  }

  traverse(root);
  return count;
};

// recursive(root.left, targetSum, sum + root.val)

function createTreeFromArray(arr) {
  if (arr.length === 0) {
    return null;
  }
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;
  while (i < arr.length) {
    const current = queue.shift();
    if (arr[i] !== null) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left);
    }
    i++;
    if (i < arr.length && arr[i] !== null) {
      current.right = new TreeNode(arr[i]);
      queue.push(current.right);
    }
    i++;
  }
  return root;
}

const arr = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1];
const root = createTreeFromArray(arr);
targetSum = 22;

console.log(pathSum(root, targetSum));
