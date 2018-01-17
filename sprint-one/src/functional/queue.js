var Queue = function() {
  var size = 0;
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below
  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };
  someInstance.dequeue = function() {
    if (size > 0) {
      size--;
      var bottomItem = storage[size];
      delete storage[size];
      return topItem;
    }
  };
  someInstance.size = function() {
    return size;
  };
  return someInstance;
};