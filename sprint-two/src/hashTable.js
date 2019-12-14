

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //this.counter = 0;
};

HashTable.prototype.insert = function(k, v) { // insert('Stephen', 'Tyler');
  var index = getIndexBelowMaxForKey(k, this._limit);

  //bucket variable to get bucket at index
  var bucket = this._storage.get(index);
  //if bucket is available
  if (bucket === undefined) {
    this._storage.set(index, [[k, v]]);
  } else {
    for (let i = 0; i < bucket.length; i ++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
        return;
      }
    }
    bucket.push([k, v]);
  }

  //this.counter ++
  // if (counter > 0.75 * (this._limit))
    // this._limit *= 2;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  const bucket = this._storage.get(index);
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //const bucket
  const bucket = this._storage.get(index);
  //if bucket is defined
  if (bucket) {
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket.splice(i, 1);
      }
    }
  }
  //for loop through bucket
  //if k is available, splice
};



/*
 * Complexity: What is the time complexity of the above functions?

 insert - Constant time

 retrieve - Constant time

 remove - Constant time

 */


