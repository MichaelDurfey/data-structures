var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage = {};

};

Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Stack.prototype.pop = function() {
  this.count--;
  let newestValue = this.storage[this.count];
  delete this.storage[this.count];
  return newestValue;
};

Stack.prototype.size = function() {
  if (this.count <= 0) {
    return 0;
  }
  return this.count;
};
