var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  let top = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    top ++;
    storage[top] = value;
  };

  someInstance.pop = function() {
    if (top > 0) {
      let result = storage[top];
      delete storage[top];
      top --;
      return result;
    }
  };

  someInstance.size = function() {
    return top;
  };

  return someInstance;
};

let newStack = Stack();

newStack.push("string");
