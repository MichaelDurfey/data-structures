var Queue = function() {
  var size = 0;
  var firstItem = 0;
  var someInstance = {};
  var firstItem = 0;
  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below
  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };
  someInstance.dequeue = function() {
    if (size > firstItem) {
      var topItem = storage[firstItem];
      delete storage[firstItem];
      firstItem++
      return topItem;
    }
  };
  someInstance.size = function() {
    if (size <= 0) {
      return 0;
    }
    return size - firstItem;
  };
  return someInstance;
};