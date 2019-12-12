class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.top = 0;
  }

  push (value) {
    this.top ++;
    this.storage[this.top] = value;
  }

  pop () {
    if (this.top > 0) {
      let result = this.storage[this.top];
      delete this.storage[this.top];
      this.top --;
      return result;
    }
  }

  size () {
    return this.top;
  }

}