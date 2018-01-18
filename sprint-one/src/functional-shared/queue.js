var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var Queue = function() {
  let instance = {};
  instance.count = 0;
  instance.firstValue = 0;
  instance.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  extend(instance, queueMethods);
  return instance;
};

var queueMethods = {

  enqueue: function(value) {
console.log(this)
    this.storage[this.count] = value;
    this.count += 1;
  },

  dequeue: function() {
    if (this.count > this.firstValue) {

      console.log("storage", this.storage);
      let oldestValue = this.storage[this.firstValue];
      delete this.storage[this.firstValue];
      this.firstValue++;
      return oldestValue;
    }
  

  },

  size: function() {
    return this.count - this.firstValue;
  }

};
