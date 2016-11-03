
var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.values = {};
  someInstance.sizes = 0;

  extend(someInstance, stackMethods);
  // debugger;
  return someInstance;

};

var extend = function(obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
};

var stackMethods = {};

stackMethods.size = function() {
  return this.sizes;
};

stackMethods.push = function(value) {
  this.values[this.sizes] = value;
  this.sizes++;
};

stackMethods.pop = function() {

  if (this.sizes > 0) {
    this.sizes--;
  }

  return this.values[this.sizes];

};


