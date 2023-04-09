/*Given the root of a binary tree and an integer targetSum, return the number
 of paths where the sum of the values along the path equals targetSum.

The path does not need to start or end at the root or a leaf, but it must go downwards 
(i.e., traveling only from parent nodes to child nodes). */

var pathSum = function (root, targetSum) {
  return root;
};

var searchLeft = function (root) {};

root = [10, 5, -3, 3, 2, null, 11, 3, -2, null, 1];
targetSum = 8;

console.log(pathSum(root, targetSum));
