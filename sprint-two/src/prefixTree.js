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
  var strArr = word.split('');
  var index = 1;
  var nodes = [this];

  var build = function(node) {
    while (nodes.length) {
      var checked = nodes.shift();
      if (word.substring(0,index) !== checked._value) {
        nodes.splice(nodes.indexOf(checked),1);
        if (checked._value) {
          index--;
        }
      }
      else {
        nodes = checked._children.concat(nodes);
        index++;
      }
      if (checked._value === word) {
        checked._isWord = true;
        return;
      }
      else if (nodes.length === 0) {
        var newNode = checked.addChild(strArr[index-1]);
        nodes.push(newNode);
        index++;
      }
    }
  };

  build(this);
};

prefixTree.prototype.depthFirstLog = function(callback) {
  var nodes = [this];

  while (nodes.length > 0) {
    callback(nodes[0]._value);
    var checked = nodes.shift();
    if (checked._children.length !== null) {
      nodes = checked._children.concat(nodes);
    }
  }
};

prefixTree.prototype.breadthFirstlog = function(callback) {
  var nodes = [this];
  while (nodes.length > 0) {
    callback(nodes[0]._value);
    var checked = nodes.shift();
    if (checked._children.length !== null) {
      nodes.concat(checked._children);
    }
  }
};
