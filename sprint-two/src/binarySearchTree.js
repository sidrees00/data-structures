var BinarySearchTree = function(value) {
  // Create object that we are going to return
  var tree = {};

  //Define properties:
  tree.value = value;
  tree.left;
  tree.right;


  // Create methods:

  // Create a new node
  tree.insert = function(nodeValue) {
    //Create a new node.
    var newNode = BinarySearchTree(nodeValue);
    //Compare the values of the new node to the parent node
    if (newNode.value > tree.value) {
      //If the node is greater tha ,n you place it to the right of the existing node.
      
    }

      //If its not place it to the left.


  }; 
  
  // Checks to see if tree contains value
  tree.contains = function(nodeValue) {

  };

  // executes callback on each value in tree
  tree.depthFirstLog = function(callback) {

  };





  return tree;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
