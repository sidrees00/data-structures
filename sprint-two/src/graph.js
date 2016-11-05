

// Instantiate a new graph
var Graph = function() {
  //Create a node object to hold all our different nodes.
  this.nodes = {};


};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //We add a object into this.nodes with the key of node.
  this.nodes[node] = {};
  //We add a property of edges to node;
  this.nodes[node].edges = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //We loop through the keys in nodes
  for (var key in this.nodes) {
    //If any of them are node.
    if (key === node.toString()) {
      //We return true.
      return true;
    }
  }

  //If the loop is finished and we haven't returned anything we return false.
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //We want to delete everything in this.nodes.node.
  delete this.nodes[node];

  //We also need to go through all the other nodes and check their edges to remove all of the old nodes edges.
  _.each(this.nodes, function(value, key) {
    if (_.indexOf(value.edges, node) !== -1) {
      value.edges.splice(_.indexOf(value.edges, node), 1);
    }

  });
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //We want to check if the edges array in each of our nodes contain the other node.
  if (_.indexOf(this.nodes[fromNode].edges, toNode) !== -1 && _.indexOf(this.nodes[toNode].edges, fromNode) !== -1) { 
    return true;
  }

  return false;
   
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //Access the edges in each node and and push the other node to their edges array.

  this.nodes[fromNode].edges.push(toNode);
  this.nodes[toNode].edges.push(fromNode);

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //I want to check if both nodes have and edge connected to each other.
  if (_.indexOf(this.nodes[fromNode].edges, toNode) !== -1 && _.indexOf(this.nodes[toNode].edges, fromNode) !== -1) { 
    //I want to splice both edges from both arrays.
    this.nodes[fromNode].edges.splice(_.indexOf(this.nodes[fromNode].edges, toNode), 1);
    this.nodes[toNode].edges.splice(_.indexOf(this.nodes[toNode].edges, fromNode), 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodes, function(value, key) {
    cb(Number(key));
  });

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


