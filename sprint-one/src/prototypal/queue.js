var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let someInstance = Object.create(queueMethods);

  someInstance.storage = {};
  someInstance.end = 0;
  someInstance.front = 1
  someInstance.length = 0;

  return someInstance;

};

var queueMethods = {
  enqueue : function (value) {
    this.end ++;
    this.storage[this.end] = value;
    this.length ++;
  },
  dequeue : function () {
    if (this.length > 0) {
      let result = this.storage[this.front];
      delete this.storage[this.front];
      this.front ++;
      this.length --;
      return result;
    }
  },
  size : function () {
    return this.length;
  }
};


