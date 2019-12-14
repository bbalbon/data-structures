var BinarySearchTree = function(value) {

  //.left property, a binary search tree (BST) where all values are lower than the current value.
  this.left = null;

  //.right property, a BST where all values are higher than the current value.
  this.right = null;

  this.value = value;


};



//.insert method, which accepts a value and places it in the tree in the correct position.
BinarySearchTree.prototype.insert = function (k) {
  const obj = new BinarySearchTree(k);

  const recurse = (parent) => {
    if (parent.value < k) {
      if (!parent.right) {
        parent.right = obj;
      } else {
        recurse(parent.right);
      }
    } else {
      if (!parent.left) {
        parent.left = obj;
      } else {
        recurse(parent.left);
      }
    }
  };

  recurse(this);

};
//.contains method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
BinarySearchTree.prototype.contains = function (k) {
  let isTrue = false;
  const recurse = (parent) => {
    if (parent.value === k) {
      isTrue = true;
    } else if (parent.right && parent.right.value <= k) {
      recurse(parent.right);
    } else if (parent.left && parent.left.value >= k) {
      recurse(parent.left);
    }
  };
  recurse(this)

  return isTrue;
};
//.depthFirstLog method, which accepts a callback and executes it on every value contained in the tree.
BinarySearchTree.prototype.depthFirstLog = function (callback) {

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
