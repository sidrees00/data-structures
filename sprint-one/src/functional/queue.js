var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below
  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    var retValue = storage[0];

    for (var i = 1; i < size; i++) {
      storage[i - 1] = storage[i];
    }
    delete storage[size];
    if (size > 0) {
      size--;

    }

    return retValue;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
