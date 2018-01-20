var Queue = function() {
  var end = 0;
  var start = 0;
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below
  someInstance.enqueue = function(value) {
    storage[end++] = value;
  };
  someInstance.dequeue = function() {
    var result = storage[start];
    if (end > start) {
      delete storage[start];
      start++;
      return result;
    }
  };
  someInstance.size = function() {
    if (end <= 0) {
      return 0;
    }
    return end - start;
  };
  return someInstance;
};