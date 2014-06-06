var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var currentTail = list.tail;

    if (list.head === null) {
      list.tail = makeNode(value);
      list.head = list.tail;
    } else {
      list.tail = makeNode(value);
      currentTail.next = list.tail;
    }

  };

  list.removeHead = function(){
    var currentHead = list.head.value;
    list.head = list.head.next;

    return currentHead;
  };

  list.contains = function(target){
    var index = list.head;
    while (index !== list.tail && index.value !== target) {
      index = index.next;
    }
    return (index.value === target) ? true : false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
