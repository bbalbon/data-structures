var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  let top = 0;
  let size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    top ++;
    storage[top] = value;
    size ++;
  };

  someInstance.pop = function() {
    if (size > 0) {
      let result = storage[top];
      delete storage[top];
      top --;
      size--;
      return result;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
