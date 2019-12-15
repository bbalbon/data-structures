class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.front = 1;
    this.end = 0;
    this.storage = {};
    this.length = 0;
  }

  enqueue (value) {
    this.end ++;
    this.storage[this.end] = value;
    this.length ++;
  }

  dequeue () {
    if (this.length > 0) {
      let result = this.storage[this.front];
      delete this.storage[this.front];
      this.front ++;
      this.length --;
      return result;
    }
  }

  size () {
    return this.length;
  }

}
