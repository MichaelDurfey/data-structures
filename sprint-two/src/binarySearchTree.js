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
      if (current.value && current.value > value) {
        //compare current value to parent value;
        if (!current.isEmpty(current.left)) {
          compareValue(current.left);
        } else {
          current.left = BinarySearchTree(value);
        }
        //if searchFunction(current.left) 
      } else if (current.value && current.value < value) {
        //searchRight
        if (!current.isEmpty(current.right)) {
          compareValue(current.right);
        } else {
          current.right = BinarySearchTree(value);
        }       
      }
    };
    compareValue(this);
  }, 
  
  contains: function(value) {
    return function searchValue(current) {
      if (current.value === value) {
        return true;
      } else if (current.value && current.value > value) {
        if (searchValue(current.left)) {
          return true;
        }
      } else if (current.value && current.value < value) {
        if (searchValue(current.right)) {
          return true;
        }
      }
      return false;
    }(this);
  }, 
  
  depthFirstLog: function(func) {
    (function depthValue(current) {
      if (current.value) {
        func(current.value);
      }
      if (!current.isEmpty(current.left)) {
        depthValue(current.left);
      }
      if (!current.isEmpty(current.right)) {
        depthValue(current.right);
      }
    }(this));
  } // END DEPTH LOG
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
