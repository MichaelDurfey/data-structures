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
    var temp = list.head;
    var flag = false;
    
    while (i <= list.length) {
      if (!temp) {
        break;
      }
      if (temp.value === target) {
        flag = true;
      }
      temp = list.head.next;
      i++;
    }
    return flag;
  };
 
  // list.insert = function(value, target) {
    
  //   let i = 0;
  //   var temp = list.head;
  //   var flag = false;
    
  //   while (i <= list.length) {
  //     if (!temp) {
  //       break;
  //     }
  //     if (i === target) {
  //       if (list.length > 2) {
  //         value.next = temp.next;
  //         temp.next = value;
  //       } else {
          
  //       }
  //     }
  //     console.log(temp);
  //     temp = list.head.next;
  //     i++;
  //   }
  //   return list;
  // };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
*/
/*
 * Complexity: What is the time complexity of the above functions?
 */
