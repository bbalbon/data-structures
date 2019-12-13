var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //new variable to create new tree (value)
  var addTree = Tree(value);
  //push the new tree into this.child array
  this.children.push(addTree);
};

treeMethods.contains = function(target) {

  var isTrue = false;

  const recurse = (node) => {
    if (node.value === target) {
      isTrue = true;
    }
    if (node.children.length > 0) {
      for (let i = 0; i < node.children.length; i++) {
        recurse(node.children[i]);
      }
    }
  };

  recurse(this);

  return isTrue;
};

/*
const recurse = (node) => {
  if (node.value === target) {
    return true;
  } else {
    for (let i = 0; i < )
  }
}
return recurse(this)

*/



/*
 * Complexity: What is the time complexity of the above functions?
 */
