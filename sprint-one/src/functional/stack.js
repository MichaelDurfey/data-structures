var Stack = function() {
  var size = 0;
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
    size++;
  };
  someInstance.pop = function() {
    if (size > 0) {
      size--;
      var topItem = storage[size];
      delete storage[size];
      return topItem;
    }
  };
  someInstance.size = function() {
    return size;
  };
  return someInstance;
};
