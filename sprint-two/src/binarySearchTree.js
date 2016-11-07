var BinarySearchTree = function(value) {
  // Create object that we are going to return
  var tree = {};

  //Define properties:
  tree.value = value;
  tree.left = null;
  tree.right = null;


  // Create methods:

  // Create a new node
  tree.insert = function(nodeValue) {
    //Create a new node.
    var newNode = BinarySearchTree(nodeValue);
    //Compare the values of the new node to the parent node
    if (newNode.value > tree.value) {
      //If the node is greater, then you place it to the right of the existing node.
      if(tree.right === null){
        tree.right = newNode
      }
      else{
        tree.right.insert(nodeValue);
      }
      
    }
    //If its not place it to the left.
    else if (newNode.value < tree.value) {
      //If the node is less than, then you place it to the left of the existing node.
      if(tree.left === null){
        tree.left = newNode
      }
      else{
        tree.left.insert(nodeValue)
      }
      
    }
    console.log(tree);



  }; 
  
  // Checks to see if tree contains value
  tree.contains = function(nodeValue) {
    if(nodeValue === this.value){
      return true;
    }
    else if(nodeValue < this.value){
      return this.left ? this.left.contains(nodeValue) : false;
    }
    else if(nodeValue > this.value){
      return this.right ? this.right.contains(nodeValue) : false;
    }
    
  };

  // executes callback on each value in tree
  tree.depthFirstLog = function(callback) {
    callback(this.value);

    if(this.left){
      this.left.depthFirstLog(callback);
    }
    else if(this.right){
      this.right.depthFirstLog(callback)
    }
  };





  return tree;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
