var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  return to;
};


var BinarySearchTree = function(value) {
  let newTree = {};
  newTree.value = value;
  newTree.left = {};
  newTree.right = {};
  extend(newTree, binaryMethods);
  return newTree;
};

var binaryMethods = {
  isEmpty: function(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return true;
  },
  
  insert: function(value) {
    var compareValue = function(current) {
      // -------------Search Left -------------
      if (current.value && current.value < value) {
        //compare current value to parent value;
        if (!this.isEmpty(current.left)) {
          for (let i in current.left) {
            compareValue(current.left[i]);
          }
        } else {
          current.left = BinarySearchTree(value);
        }
        //if searchFunction(current.left) 
      } else if (current.value && current.value > value) {
        //searchRight
        if (!this.isEmpty(current.right)) {
          for (let i in current.right) {
            compareValue(current.right[i]);
          }
        } else {
          current.right = BinarySearchTree(value);
        }       
      } 
      console.log(this);
    }.bind(this);
    compareValue(this);
  }, 
  contain: function() {
    
  },
  depthFirstLog: function() {
    
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
