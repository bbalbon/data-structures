var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.front = 1;
  this.end = 0;
  this.length = 0;

};

Queue.prototype.enqueue = function (value) {
  this.end ++;
  this.storage[this.end] = value;
  this.length ++;
}

Queue.prototype.dequeue = function () {
  if (this.length > 0) {
    let result = this.storage[this.front];
    delete this.storage[this.front];
    this.front ++;
    this.length --;
    return result;
  }
}

Queue.prototype.size = function () {
  return this.length;
}


