var Queue = function() {
  var instance = Object.create(queueMethods);
  instance.count = 0;
  instance.storage = {};
  instance.firstValue = 0;
  return instance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.count] = value;
    this.count += 1;
  },
  dequeue: function() {
    if (this.count > this.firstValue) {
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


