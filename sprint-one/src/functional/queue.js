var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function(){
    var result = storage[0];
    if (size > 0) {
      for (var i = 1; i < size; i++) {
        storage[i-1] = storage[i];
      }
      delete storage[size];
      size--;
    }
    return result;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
