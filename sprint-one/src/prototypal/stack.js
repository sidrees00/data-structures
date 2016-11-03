var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //Create our return obj linked to our stackMethods
  var someInstance = Object.create(stackMethods);

  // obj will contain storage object
  someInstance.storage = {};

  // obj will have a property of size with initial value of 0
  someInstance.stackSize = 0;

  // return object
  return someInstance;
};

var stackMethods = {};

//Stack method size

stackMethods.size = function() {
  return this.stackSize;
};

//Push

stackMethods.push = function(value) {
  this.storage[this.stackSize] = value;
  this.stackSize++;
};

//Pop

stackMethods.pop = function() {
  if (this.stackSize > 0) {
    this.stackSize--;
  }
  return this.storage[this.stackSize];

};


