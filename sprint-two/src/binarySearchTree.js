var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  return to;
};


var BinarySearchTree = function(value) {
  let newTree = {};
  newTree.value = value;
  newTree.left = [];
  newTree.right = [];
  extend(newTree, binaryMethods);
  return newTree;
};

var binaryMethods = {
  insert: function(value) {
    var compareValue = function(current) {
      // -------------Search Left -------------
      if (current.value && current.value < value) {
        //compare current value to parent value;
        if (current.left.length > 0) {
          for (let i = 0; i < current.left.length; i++) {
            compareValue(current.left[i]);
          }
        } else {
          current.left.push(BinarySearchTree(value));
        }
        //if searchFunction(current.left) 
      } else if (current.value && current.value > value) {
        //searchRight
        if (current.right.length > 0) {
          for (let i = 0; i < current.right.length; i++) {
            compareValue(current.right[i]);
          }
        } else {
          current.right.push(BinarySearchTree(value));
        }       
      } 
      // else {
      //   current.right.push(BinarySearchTree(value));
      // }
      console.log(this);
    }.bind(this);
    compareValue(this);
  }, 
  contain: function(){
    
  },
  depthFirstLog: function(){
    
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
