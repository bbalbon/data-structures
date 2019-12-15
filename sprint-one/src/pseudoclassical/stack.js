var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.top = 0;
};

Stack.prototype.push = function (value) {
  this.top ++;
  this.storage[this.top] = value;
}

Stack.prototype.pop = function () {
  if (this.top > 0) {
    let result = this.storage[this.top];
    delete this.storage[this.top];
    this.top --;
    return result;
  }
}

Stack.prototype.size = function () {
  return this.top;
}


