var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  for (var key in treeMethods) {
    newTree[key] = treeMethods[key];
  }

  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  var node = makeTree(value);
  this.children.push(node);
};

treeMethods.contains = function(target){
  var result = false;
  var search = function(node) {
    if (node.value === target) {
      result = true;
      return;
    }
    for (var i = 0; i < node.children.length; i++) {
      search(node.children[i]);
      if (result === true) {
        break;
      }
    }
  };
  search(this);
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
