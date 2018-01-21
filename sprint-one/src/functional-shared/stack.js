
var Stack = function() {
  let instance = {};
  instance.end = 0;
  instance.storage = {};
  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {

  push: function(value) {
    this.storage[++this.end] = value;
  },

  pop: function() {
    if ( this.size() ) {
      let result = this.storage[this.end];
      delete this.storage[this.end];
      this.end--;
      return result;
    }
  },

  size: function() {
    return this.end;
  }

};

// var stackmethods = {};
