var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  return to;
};

var Tree = function(value) {
  let newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = []; 
  extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {
  addChild: function(value) {
    this.children.push(Tree(value));
  },
  
  contains: function(target) {
    var flag = false;
    var searchChild = function(children) {
    // children = children || this;
      if (children.value === target) {
        flag = true;
      }
      if (children.children) {
        for (var i = 0; i < children.children.length; i++) {
          if (searchChild(children.children[i])) {
            flag = true;
          }
        }
      }
    }
    searchChild(this);
    return flag;
  } //END CONTAINS;
};
/*
tree.addChild(5);
tree.addChild(6);
tree.children[0].addChild(7);
tree.children[1].addChild(8);
expect(tree.contains(7)).to.equal(true);
expect(tree.contains(8)).to.equal(true);
*/

/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
var searchChildren = function(children) {
      if (children.value === target) {
        return true;
      }
      if (children.length > 0) {
        
        children.forEach(function(item) {
         if (item.value === target) {
            flag = true;
          }
        });
      }
      return flag;
    };
    
    if (this.value === target) {
      return true;
    }
*/