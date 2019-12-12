var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let someInstance = {
    storage : {},
    top : 0,
  };

  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {
  push : function (value) {
    this.top ++;
    this.storage[this.top] = value;
  },
  pop : function () {
    if (this.top > 0) {
      let result = this.storage[this.top];
      delete this.storage[this.top];
      this.top --;
      return result;
    }
  },
  size : function () {
    return this.top;
  }
};


