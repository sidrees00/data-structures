var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  //We want to link treeMethods to Tree.
  _.extend(newTree, treeMethods);

  newTree.children = [];  

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  //Check if current tree has target value;
  // if (this.value === target) {
  //   //If it does return true.
  //   return true;
  // }

  var innerFunc = function(childObj) {
    if (childObj.value === target) {
      return true;
    }

    //Traverse through the child array.
    for (var i = 0; i < childObj.children.length; i++) {
      //Call innerFunc on each child object.
      if (innerFunc(childObj.children[i]) === true) {

        return true;
      }
    }
    
    return false;
  };

  return innerFunc(this);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
