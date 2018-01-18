var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.length = 0;

  list.addToTail = function(value) {  
    let temp = Node(value);
    console.log(temp)
    if (list.tail) {
      list.tail.next = temp;
      list.tail = temp;
    }
  };

  list.removeHead = function() {
    if (list.head) {
      let temp = list.head;
      if (list.head.next) {
        list.head = list.head.next;
      } else {
        list.head = null;
      }
      list.length--; 
      return temp;
    } else {
      list.tail = null;
    }
  };
  list.contains = function(target) {
    
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
