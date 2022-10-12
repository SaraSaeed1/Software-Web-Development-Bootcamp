class Node {
  /**
   * Constructs a new instance of a BST node.
   * @param {number} data The integer to store in the node.
   */
  constructor(data) {
    this.data = data;
    /**
     * These properties are how this node is connected to other nodes to form
     * the tree. Similar to .next in a SinglyLinkedList except a BST node can
     * be connected to two other nodes. To start, new nodes will not be
     * connected to any other nodes, these properties will be set after
     * the new node is instantiated.
     */
    this.left = null;
    this.right = null;
  }
}

/**
 * Represents an ordered tree of nodes where the data of left nodes are <= to
 * their parent and the data of nodes to the right are > their parent's data.
*/


class BinarySearchTree {
  constructor() {
    this.counter = 0;
    /**
     * Just like the head of a linked list, this is the start of our tree which
     * branches downward from here.
     */
    this.root = null;
  }

  /**
   * Determines if this tree is empty.
   * @return {boolean} Indicates if this tree is empty.
   */
  isEmpty() {
    if(this.root == null){
      return true
    }else{
      return false
    }
  }

  /**
   * Inserts a new node with the given newVal in the right place to preserve
   * the order of this tree.
   * @param {number} newVal The data to be added to a new node.
   * @return {BinarySearchTree} This tree.
   */



  insert(newVal, node = this.root) {
    if(this.isEmpty()){
      this.root=new Node(newVal)
      this.counter++;
      return this;
    }
    if (newVal > node.data) {
      if (node.right === null) {
        node.right = new Node(newVal);
        this.counter++;
        return this;
      }
      return this.insert(newVal, node.right);
    } else {
      if (node.left === null) {
        node.left = new Node(newVal);
        this.counter++;
        return this;
      }
      return this.insert(newVal, node.left);
    }
  }

  /**
   * Inserts a new node with the given newVal in the right place to preserver
   * the order of this tree.
   * @param {number} newVal The data to be added to a new node.
   * @param {Node} curr The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @return {BinarySearchTree} This tree.
   */
  insertRecursive(newVal, current = this.root) {
    if(this.root== null){
      this.root=new Node(newVal)
      this.counter++;
      return this
    }
    if(newVal <=current.data){
      if(current.left == null){
        current.left = new Node(newVal)
        this.counter++;
        return this
      }else{
        this.insertRecursive(newVal, current = current.left)
      }
    }
    else{
      if(current.right == null){
        current.right = new Node(newVal)
        this.counter++;
        return this
      }else{
        this.insertRecursive(newVal, current = current.right)
      }
    }
  }


  MinVal() {
    if (this.root === null) {
      return null ;
    }
    let min = this.root;
    while (min.left !== null) {
      min = min.left;
    }
    return min.data;
  }
  MaxVal() {
    if (this.root === null) {
      return null ;
    }
    let max = this.root;
    while (max.right !== null) {
      max = max.right;
    }
    return max.data;
  }


  MaxRecursive(node = this.root) {
    if (node.right === null) {
      return node.data ;
    }
    else{
      return this.MaxRecursive(node.right)
    }
  }
  MinRecursive(node = this.root) {
    if (node.left === null) {
      return node.data ;
    }
    else{
      return this.MinRecursive(node.left)
    }
  }

//   search(node, data)
// {
//    // if trees is empty return null
//     if(node === null)
//         return null;
 
//     // if data is less than node's data
//     // move left
//     else if(data < node.data)
//         return this.search(node.left, data);
 
//     // if data is less than node's data
//     // move left
//     else if(data > node.data)
//         return this.search(node.right, data);
 
//     // if data is equal to the node data
//     // return node
//     else
//         return node;
// }


//checks if a given number exists in the tree. If its in the tree, returns `true`, otherwise `false`
  contains(val) {
    if (this.isEmpty()) {
      return null
    }
    var current = this.root;
    var rnLoop = true;
    while (rnLoop) {
      if (!current){
      return false;
      }
      if (val === current.data){
        return true
      }
      if (val < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }

  size(){
    console.log(`Size: ${this.counter}`)
  }


  // hight(){
  //   if (this.root === null) {
  //     return null ;
  //   }
  //   let max = this.root;
  //   let min = this.root;
  //   let hight = 1;
  //   while (max.right !== null || min.left !== null) {
  //     max = max.right;
  //     min = min.left;
  //     hight++
  //   }
  //   console.log(`Hight is: ${hight}`);
  // }

  hight(node = this.root)
  {
    if (node == null)
      return null;
    else
    {

      let lefthight = this.hight(node.left);
      let righthight= this.hight(node.right);

      if (lefthight > righthight)
        return (lefthight + 1);
      else
        return (righthight + 1);
    }
  }

}



var tree = new BinarySearchTree()
tree.insert(2)
tree.insert(4)
tree.insert(1)
tree.insert(0)
tree.insert(5)
console.log("Hight : "+tree.hight())
tree.size()
console.log(tree)

console.log(`contains 3 ? `+ tree.contains(3))
console.log(`contains 4 ? ` + tree.contains(4))
// console.log(tree.MaxVal())
// console.log(tree.min())
// console.log(tree.MinRecursive())
// tree.insertRecursive(3)
// tree.insertRecursive(1)
// tree.insertRecursive(4)
// tree.insertRecursive(0)
// console.log(tree.isEmpty())
// console.log(tree)