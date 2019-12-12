var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  let someInstance = Object.create(stackMethods);

  someInstance.storage = {};
  someInstance.top = 0;

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

let newStack = Stack();

newStack.push("string");


