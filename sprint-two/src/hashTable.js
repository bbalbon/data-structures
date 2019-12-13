

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) { // insert('Stephen', 'Tyler');
  var index = getIndexBelowMaxForKey(k, this._limit);
  //bucket variable to get bucket at index
  var bucket = this._storage.get(index);
  //if bucket is available
  if (bucket !== undefined) {
    bucket.push([k, v]);
  } else {
    this._storage.set(index, [[k, v]]);
  }
  //push [k,v] into bucket
  //else make new bucket [[k ,v]]
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


