var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // Create Node
    toAdd = Node(value);

    if (!list.tail && !list.head) {
      list.head = toAdd;
      list.tail = toAdd;
    }

    // add node to list
    list[value] = toAdd;
    // set current tail node.next to point to new node we're adding
    list.tail.next = toAdd;
    // set new tail to be value added
    list.tail = toAdd;
  };

  list.removeHead = function() {
    //if result.next is null
      //delete
      //head = null
      //tail = null
      //return result.value
    //if head is null
      //return null;

      //result variable to store current head
    var result = list.head;

    if (!result) {
      return null;
    } else if (result.next === null) {
      delete list[result.value];
      list.head = null;
      list.tail = null;
      return result.value;
    } else {
      delete list[result.value];
      list.head = result.next;
      return result.value;
    }
  };

  list.contains = function(target) {


    const recurse = (node) => {
      if (node.value === target) {
        return true;
      } else if (!node.next) {
        return false;
      } else {
        return recurse(node.next);
      }

    };

    return recurse(list.head);

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
addToTail - constant

removeHead - constant

contains - linear
 */

