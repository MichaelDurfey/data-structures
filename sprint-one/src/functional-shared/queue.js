var Queue = function() {
  let instance = {};
  instance.end = 0;
  instance.start = 0;
  instance.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  _.extend(instance, queueMethods);
  return instance;
};

var queueMethods = {

  enqueue: function(value) {
    this.storage[this.end++] = value;
  },

  dequeue: function() {
    if ( this.size() ) {
      let result = this.storage[this.start];
      delete this.storage[this.start];
      this.start++;
      return result;
    }

  },

  size: function() {
    return this.end - this.start;
  }

};
