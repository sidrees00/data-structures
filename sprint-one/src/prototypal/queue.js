var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //Create object that will be returned upon invocation of Queue and is linked to queueMethods via its prototypal chain
  var newObj = Object.create(queueMethods);
  
  // Add properties to the object
  newObj.stackSize = 0;
  newObj.storage = {};

  // return the newly created object
  return newObj;
};

// create object that contains methods
var queueMethods = {};

// add methods
queueMethods.size = function() {
  return this.stackSize;
};

// method to add value to storage object
queueMethods.enqueue = function(value) {
  this.storage[this.stackSize] = value;
  this.stackSize ++;
};

queueMethods.dequeue = function() {
  if (this.stackSize > 0) {
    this.stackSize --;
  }

  var toReturn = this.storage[0];

  for (var i = 0; i < this.stackSize; i++) {
    this.storage[i] = this.storage[i + 1];
  }

  return toReturn;
};



