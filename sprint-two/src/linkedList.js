var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // function used to add nodes
  list.addToTail = function(value) {
    //We want to assign list.tail a new node using our node constructor.
    var newNode = Node(value);
    //We check if head is null;
    if (list.head === null) {
      //We update head with a new node.
      list.head = newNode;
      list.tail = newNode;
      //list.head.next = list.tail;
      //console.log(list.head.next);
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
      //console.log(list.head.next);
    }


  };
  //Function to remove the head/beginning of the list.
  list.removeHead = function() {

    //Check if the head isn't null
    if (list.head !== null) {
      //Reassign the head to the next value in the list.
      var returnHead = list.head;
      list.head = list.head.next;

    }  

    return returnHead.value;
  };

  list.contains = function(target) {
    //Our variable to hold our current node starting at head.
    var currentNode = list.head;
    while (currentNode.next !== null) {
      if (currentNode.value === target) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }

    return false;


  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


// Summary:
// next is a pointer to another node
