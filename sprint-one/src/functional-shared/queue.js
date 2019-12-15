var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage : {},
    front : 1,
    end : 0,
    length : 0
  };

  _.extend(someInstance, queueMethods);


  return someInstance;
};


const queueMethods = {
  enqueue : function (value) {
    this.end ++;
    this.storage[this.end] = value;
    this.length++;
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





