var Stack = function() {
  var end = 0;
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below
  someInstance.push = function(value) {
    storage[end++] = value;
  };
  someInstance.pop = function() {
    if (someInstance.size()) {
      end--;
      var result = storage[end];
      delete storage[end];
      return result;
    }
  };
  someInstance.size = function() {
    return end;
  };
  return someInstance;
};
