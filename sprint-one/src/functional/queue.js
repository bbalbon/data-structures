var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  let end = 0;
  let front = 1;
  let length = 0;

  someInstance.enqueue = function(value) {
    end ++;
    storage[end] = value;
    length ++;
  };

  someInstance.dequeue = function() {
    if (length > 0) {
      let result = storage[front];
      delete storage[front];
      front ++;
      length --;
      return result;
    }
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
