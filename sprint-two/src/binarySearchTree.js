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
    

  };

  // executes callback on each value in tree
  tree.depthFirstLog = function(callback) {

  };





  return tree;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
