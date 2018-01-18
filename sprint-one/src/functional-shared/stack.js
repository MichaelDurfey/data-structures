var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let instance = {};
  instance.count = 0;
  instance.firstValue = 0;
  instance.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  extend(instance, stackMethods);
  return instance;
};

var stackMethods = {

  push: function(value) {
    // console.log(this)
    this.storage[this.count] = value;
    this.count += 1;
  },

  pop: function() {
    this.count--;
    // console.log("storage", this.storage);
    let oldestValue = this.storage[this.count];
    delete this.storage[this.count];
    
    return oldestValue;
  },

  size: function() {
    if (this.count <= 0) {
      return 0;
    }
    return this.count;
  }

};

// var stackmethods = {};
