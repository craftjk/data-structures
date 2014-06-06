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
      list.tail.previous = currentTail;
    }

  };

  list.addToHead = function(value) {
    var node = makeNode(value);

    if (list.head === null) {
      list.tail = node;
      list.head = list.tail;
    } else {
      node.next = list.head;
      list.head.previous = node;
      list.head = node;
    }
  };

  list.removeTail = function() {
    var currentTail = list.tail.value;
    var newTail = list.tail.previous;
    list.tail.previous = null;
    list.tail = newTail;
    list.tail.next = null;

    return currentTail;
  };

  list.removeHead = function(){
    var currentHead = list.head.value;
    var newHead = list.head.next;
    list.head.next = null;
    list.head = newHead;
    if (list.head !== null) {
      list.head.previous = null;
    }

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
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
