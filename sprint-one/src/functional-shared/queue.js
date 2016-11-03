var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.queueValues = {};
  someInstance.queueSize = 0;
  _.extend(someInstance, queueMethods);

  return someInstance;

};




var queueMethods = {};

queueMethods.size = function() {
  return this.queueSize;

};

queueMethods.enqueue = function(value) {
  this.queueValues[this.queueSize] = value;
  this.queueSize++;
};

queueMethods.dequeue = function() {
  if (this.queueSize > 0) {
    this.queueSize--;
  }
  var returnItem = this.queueValues[0];

  for (var i = 0; i < this.queueSize; i++) {
    this.queueValues[i] = this.queueValues[i + 1];
  }

  return returnItem;
};
