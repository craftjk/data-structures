var prefixTree = function(value) {
  this._children = [];
  this._value = value;
  this._isWord = false;
};

prefixTree.prototype.addChild = function(val) {
  var node = new prefixTree(this._value + val);
  this._children.push(node);
  return node;
};

prefixTree.prototype.parse = function(word) {
  var currentNode = this;
  while (currentNode._value !== word) {
    var checkedAllChildren = true;
    // if target is in children
    for (var i = 0; i < currentNode._children.length; i++) {
      if (word.indexOf(currentNode._children[i]._value) === 0) {
        currentNode = currentNode._children[i];
        checkedAllChildren = false;
        break;
      }
    }

    // if current node has no children
    if (!currentNode._children.length)  {
      currentNode.addChild(word[currentNode._value.length]);
      if (currentNode._children[currentNode._children.length -1]._value === word) {
        currentNode._children[currentNode._children.length - 1]._isWord = true;
        return;
      }
    }
    // if current node has children but not target
    else if (checkedAllChildren) {
      currentNode.addChild(word[currentNode._value.length]);
      currentNode = currentNode._children[currentNode._children.length - 1];
    }

  }

  if (currentNode._value === word) {
    currentNode._isWord = true;
    return;
  }

};

prefixTree.prototype.find = function(word) {
  var currentNode = this;
  while (currentNode._value !== word) {
    var checkedAllChildren = true;
    // if target is in children
    for (var i = 0; i < currentNode._children.length; i++) {
      if (word.indexOf(currentNode._children[i]._value) === 0) {
        currentNode = currentNode._children[i];
        checkedAllChildren = false;
        break;
      }
    }

    // if current node has no children
    if (!currentNode._children.length)  {
      currentNode.addChild(word[currentNode._value.length]);
      if (currentNode._children[currentNode._children.length -1]._value === word) {
        currentNode._children[currentNode._children.length - 1]._isWord = true;
        break;
      }
    }
    // if current node has children but not target
    else if (checkedAllChildren) {
      currentNode.addChild(word[currentNode._value.length]);
      currentNode = currentNode._children[currentNode._children.length - 1];
    }

  }

  if (currentNode._value === word) {
    currentNode._isWord = true;
    return currentNode;
  } else {
    return null;
  }
};

prefixTree.prototype.depthFirstLog = function(callback) {
  var nodes = [];
  if (arguments[1] !== undefined) {
    nodes.push(arguments[1]);
  }
  else {
    nodes.push(this);
  }



  while (nodes.length > 0) {
    callback(nodes[0]);
    var checked = nodes.shift();
    if (checked._children.length !== 0) {
      nodes = checked._children.concat(nodes);
    }
  }
};

prefixTree.prototype.breadthFirstlog = function(callback) {
  var nodes = [this];
  while (nodes.length > 0) {
    callback(nodes[0]);
    var checked = nodes.shift();
    if (checked._children.length !== null) {
      nodes.concat(checked._children);
    }
  }
};


prefixTree.prototype.predict = function(word) {
  // find node who's value is word
  var topNode = this.find(word);
  var predictions = [];
  if (topNode !== null) {
    this.depthFirstLog(function(node) {
      if (node._isWord) {
        predictions.push(node._value);
      }
    }, topNode);
  }

  // return all isWords below that node
  return predictions;
};
