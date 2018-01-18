var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.firstValue = 0;
  this.storage = {};
  
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Queue.prototype.dequeue = function(value) {
  if (this.count > this.firstValue) {
    let oldestValue = this.storage[this.firstValue];
    delete this.storage[this.firstValue];
    this.firstValue++;
    return oldestValue;
  }
};

Queue.prototype.size = function() {
  return this.count - this.firstValue;
};
