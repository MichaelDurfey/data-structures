var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.length = 0;

  list.addToTail = function(value) {  
    let temp = Node(value);
    if (list.length > 0) {
      list.tail.next = temp;
      list.tail = temp;
    } else {
      list.head = temp;
      list.tail = temp;
    }
    list.length++;
  };

  list.removeHead = function() {
    let temp = list.head.value;
    // if (list.length > 1){
    // temp = list.head.next;
    list.length--;
    list.head = list.head.next;
    return temp;
  };
  //   list.length--; 
  //   return list.head;
  //   // list.length--;
  // };
  
  list.contains = function(target) {
    let i = 0;
    var temp = list;
    var flag = false;
    
    while (temp) {
      if ('head' in temp) {
        temp = list.head;
      }
      if (temp.value === target) {
        flag = true;
      }
      temp = temp.next;
      i++;
    }
    return flag;
  };
 
  //Linear time complexity because it touches each node in list to insert something.
  list.insert = function(value, target) {
    if (target >= list.length) {
      list.addToTail(value);
    }
    var value = Node(value);
    let i = 0;
    var temp = list;
    var prev; 
        
    while (temp) {
      //check if head property has been evaluated
      if (temp.hasOwnProperty('head')) {
        prev = list.head;
        temp = list.head;
      }
      //check if index === target
      if (i === target) {
        if (target === 0) {
          value.next = list.head.next;   
          list.head = value;
          break;
        }
        value.next = temp;
        prev.next = value;
        break;
      }
      //set previous to current temp value;
      prev = temp;
      //set temp to next property of current item
      temp = temp.next;
      //increment i
      i++;
    }
    return list;
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
