
var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  
  // properties
  someInstance.storage = {};
  someInstance.stackSize = 0;
  _.extend(someInstance, stackMethods);
  
  // Methods
  // someInstance.push = stackMethods.push;
  // someInstance.pop = stackMethods.pop;
  // someInstance.size = stackMethods.size;


  return someInstance;

};


var stackMethods = {};

stackMethods.size = function() {
  return this.stackSize;
};

stackMethods.push = function(value) {
  //We want to add the value into our storage object using the property stackSize as our key.
  this.storage[this.stackSize] = value;
  //Then we want to increment our stackSize by one.
  this.stackSize++;
};

stackMethods.pop = function() {
  
  //We want to check if the stack size is greater than zero
  if (this.stackSize > 0) {
    //If it is we want to decrement the stack size by one to get to the current element that we want to return.
    this.stackSize--;
  }

  //return the value contained in the storage object that has the key of stackSize;
  return this.storage[this.stackSize];
};



