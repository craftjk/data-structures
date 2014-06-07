var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  newTree.children = [];

  for (var key in treeMethods) {
    newTree[key] = treeMethods[key];
  }

  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  var node = makeTree(value);
  node.parent = this;
  this.children.push(node);
};

treeMethods.removeFromParent = function() {
  var parent = this.parent;
  parent.children.splice(parent.children.indexOf(this),1);
  this.parent = null;
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

treeMethods.traverse = function(callback) {
  var travel = function(node) {
    for (var i = 0; i < node.children.length; i++) {
      travel(node.children[i]);
    }
    callback(node);
  };

  travel(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
