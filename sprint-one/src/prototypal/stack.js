var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.count = 0;
  instance.storage = {};
  return instance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  pop: function() {
    this.count--;
    var newestValue = this.storage[this.count];
    delete this.storage[this.count];
    return newestValue;
  }, 
  size: function() {
    if (this.count <= 0) {
      return 0;
    }
    return this.count;
  }
};


