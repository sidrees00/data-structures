var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //We want to create an object that will be returned at the end.
  var someInstance = {};  
  //We want to create an object to hold our storage to be contained in our return object.
  someInstance.storage = {};
  //We want to create the property queueSize for the return object.
  someInstance.queueSize = 0;
  
  //We want to create a reference to our methods created in queueMethods.
  someInstance.size = queueMethods.size;
  someInstance.enqueue = queueMethods.enqueue;
  someInstance.dequeue = queueMethods.dequeue;

  //return object.
  return someInstance;
};


var queueMethods = {};

queueMethods.size = function() {
  //We want our function to return this.queueSize.
  return this.queueSize;
};


queueMethods.enqueue = function(value) {
  //Push our value into our storage object using the queueSize as a key
  this.storage[this.queueSize] = value;

  //Increment our queueSize by 1
  this.queueSize ++;
};

queueMethods.dequeue = function() {
  // Check if queueSize is greater than 0
  if (this.queueSize > 0) {
    // decrement the queueSize
    this.queueSize --;
  }

  // store the value that has a key of 0 in storage object in a variable
  var dequeueValue = this.storage[0]; 

  // A for loop going from 0 to queueSize
  for (var i = 0; i < this.queueSize; i++) {
    //Change the value of storage[index] to storage[index + 1];
    this.storage[i] = this.storage[i + 1];
  }

  //delete the straggling value in our storage object.
  

  //Return our return variable.
  return dequeueValue;


};

















