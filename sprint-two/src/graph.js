var Graph = function(){
  this._nodes = [];
  this._edges = [];

};

Graph.prototype.addNode = function(newNode, toNode){
  if (toNode) {
    this._edges[toNode] = [];
    this._edges[newNode] = [];

    this._edges[toNode][newNode] = true;
    this._edges[newNode][toNode] = true;
  }
  else {
    if (this._nodes.length === 1) {
      this._edges[newNode] = [];
      this._edges[this._nodes[0]] = [];

      this._edges[newNode][this._nodes[0]] = true;
      this._edges[this._nodes[0]][newNode] = true;
    }
  }
  this._nodes.push(newNode);
};

Graph.prototype.contains = function(node){
  return this._nodes.indexOf(node) > -1;
};

Graph.prototype.removeNode = function(node){
  var index = this._nodes.indexOf(node);
  if (index !== -1) {
    this._nodes.splice(index, 1);
  }

  delete this._edges[node];
  for (var key in this._edges) {
    delete this._edges[key][node];
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
  if (this._nodes.indexOf(fromNode) !== -1 &&
      this._nodes.indexOf(toNode) !== -1) {
    return (this._edges[fromNode][toNode] ? true : false);
  }
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if (this._nodes.indexOf(fromNode) !== -1 &&
      this._nodes.indexOf(toNode) !== -1) {
    this._edges[fromNode][toNode] = true;
    this._edges[toNode][fromNode] = true;
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){

  if (this._nodes.indexOf(fromNode) !== -1 &&
      this._nodes.indexOf(toNode) !== -1) {
    delete this._edges[fromNode][toNode];
    delete this._edges[toNode][fromNode];
  }
  var that = this;
  var checkNode = function(node, edges) {
    var edgeExist = false;
    for (var edge in edges[node]) {
      edgeExist = true;
    }

    if (!edgeExist) {
      that.removeNode(node);
    }
  };

  checkNode(toNode, this._edges);
  checkNode(fromNode, this._edges);
};

Graph.prototype.forEachNode = function(callback) {
  for (var i = 0; i < this._nodes.length; i++) {
    callback(this._nodes[i]);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
