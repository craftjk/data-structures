var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._inUse = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._inUse++;
  if (!Array.isArray(this._storage.get(i))) {
    this._storage.set(i, []);
  }

  var bucket = this._storage.get(i);

  for (var j = 0; j < bucket.length; j++) {
    if (bucket[j][0] === k) {
      bucket[j] = [k,v];
      return;
    }
  }

  bucket.push([k,v]);

  if (this._inUse >= Math.floor(0.75 * this._limit)) {
    var all = [];
    this._storage.each(function(value) {
      if  (value !== undefined) {
        for (var i = 0; i < value.length; i++) {
          all.push(value[i]);
        }
      }
    });

    this._limit *= 2;
    this._storage = makeLimitedArray(this._limit);
    this._inUse = 0;
    for (var i=0; i < all.length; i++) {
      this.insert(all[i][0],all[i][1]);
    }
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if (bucket !== undefined) {
    for (var j = 0; j < bucket.length; j++) {
      if (bucket[j][0] === k) {
        return bucket[j][1];
      }
    }
  }

  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for (var j = 0; j < bucket.length; j++) {
    if (bucket[j][0] === k) {
      bucket.splice(j,1);
      this._inUse--;
    }
  }
  if (this._inUse < Math.floor(0.25 * this._limit)) {
    var all = [];
    this._storage.each(function(value) {
      if  (value !== undefined) {
        for (var i = 0; i < value.length; i++) {
          all.push(value[i]);
        }
      }
    });
    this._limit = Math.floor(this._limit/2);
    this._storage = makeLimitedArray(this._limit);
    this._inUse = 0;
    for (var i=0; i < all.length; i++) {
      this.insert(all[i][0],all[i][1]);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
