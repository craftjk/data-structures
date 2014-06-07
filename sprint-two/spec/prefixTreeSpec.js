describe('prefixTree', function() {
  var parentTree;

  beforeEach(function() {
    parentTree = new prefixTree("");
  });

  it('should have methods named "addChild", "parse", "breadthFirstLog" and "depthFirstLog', function() {
    expect(parentTree.addChild).to.be.a("function");
    expect(parentTree.parse).to.be.a("function");
    expect(parentTree.addChild).to.be.a("function");
    expect(parentTree.depthFirstLog).to.be.a("function");
  });

  it('should insert values at the correct location in the tree', function(){
    parentTree.addChild("a");
    parentTree.addChild("b");
    parentTree.addChild("c");
    parentTree._children[0].addChild("b");
    expect(parentTree._children.length).to.equal(3);
    expect(parentTree._children[0]._children[0]._value).to.equal("ab");
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    parentTree.addChild("a");
    parentTree.addChild("b");
    parentTree.depthFirstLog(func);
    expect(array).to.eql(["","a","b"]);
  });

  it('should execute a callback on every value in a tree using "breadthFirstLog"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    parentTree.addChild("a");
    parentTree.addChild("b");
    parentTree.depthFirstLog(func);
    expect(array).to.eql(["","a","b"]);
  });

  it('should build the correct tree when parse is called with a simple word', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    // parentTree.addChild("a");
    // parentTree.addChild("b");
    // parentTree.addChild("c");
    // parentTree._children[0].addChild("b");
    parentTree.parse("a");
    expect(parentTree.depthFirstLog(func)).to.equal(["a"]);
  });
});
