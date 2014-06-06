var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage[JSON.stringify(item)] = item;
};

setPrototype.contains = function(item){
  if (this._storage.hasOwnProperty(JSON.stringify(item))) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item){
  delete this._storage[JSON.stringify(item)];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
