

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //Check whether the index exists in the array.
  if (this._storage.get(index) === undefined) {
    //If it doesnt, we create a new bucket at that index
    this._storage.set(index, []);
  //if it does.
  } 

  //Traverse the bucket.
  this._storage.each(function(value, i, storage) {
    //Check if we are on the index we want.
    if (i === index) {
      //Traverse the bucket when we find it.
      for (var j = 0; j < value.length; j++) {
        //Check to see if the key exists in each array.
        if (value[j][0] === k) {
          //If it does, overwrite the value.
          value[j][1] = v;
        }
      }
      //if it doesnt, we push it into the bucket.
      value.push([k, v]);
    }
  });




};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // get the bucket in the storage array and store it into a variable
  var bucket = this._storage.get(index);

  // Traverse the bucket
  for (var i = 0; i < bucket.length; i++) {
    // Check if the first element in each array inside the bucket is equal to the key
    if (bucket[i][0] === k) {
      // If if is, return the value
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //Get the bucket and store it in a variable.
  var bucket = this._storage.get(index);
  //Traverse through the bucket
  for (var i = 0; i < bucket.length; i++) {
    //Find the array that contains the key.
    if (bucket[i][0] === k) {
      //Splice the array out of our bucket.
      bucket.splice(i, 1);
    }
    
  }




};



/*
 * Complexity: What is the time complexity of the above functions?
 */


