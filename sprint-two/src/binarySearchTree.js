var makeBinarySearchTree = function(value){
  var bstree = Object.create(makeBinarySearchTree.methods);
  bstree.value = value;
  bstree.left = null;
  bstree.right = null;
  return bstree;
};

var funcs = makeBinarySearchTree.methods = {};

funcs.insert = function(val) {
  if (this.value > val) {
    if (this.left) {
      this.left.insert(val);
    } else {
      this.left = makeBinarySearchTree(val);
    }
  } else {
    if (this.right) {
      this.right.insert(val);
    } else {
      this.right = makeBinarySearchTree(val);
    }
  }
};

funcs.contains = function(val) {
  var result = false;
  var search = function(node) {
    if (node.value === val) {
      result = true;
    } else {
      if (node.left) {
        search(node.left);
      }
      if (node.right) {
        search(node.right);
      }
    }
  };

  search(this);
  return result;
};

funcs.depthFirstLog = function(callback) {
  var nodes = [this];

  while (nodes.length > 0) {
    callback(nodes[0].value);
    var checked = nodes.shift();
    if (checked.right !== null) {
      nodes.unshift(checked.right);
    }
    if (checked.left !== null) {
      nodes.unshift(checked.left);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
