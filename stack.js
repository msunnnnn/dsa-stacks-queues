/** Node: node for a stack. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}


/** LinkedList: chained together nodes. */
class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {

    let newNode = new Node(val);
    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {

    let newNode = new Node(val);

    //if we have a head:
    newNode.next = this.head;
    this.head = newNode;

    if (this.tail === null) this.tail = newNode;

    this.length++;

  }

  /** pop(): return & remove last item. */
  //Throw error if list is empty

  pop() {
    if (this.length === 0) throw new Error;

    let poppedVal = this.head.val;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return poppedVal;
    }

    let current = this.head;
    //traverse the array until we reach the second to last element
    //make this element the tail
    //return the origin last value
    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 2) {
        poppedVal = current.next.val;
        this.tail = current;
        this.length--;
      }
    }

    return poppedVal;

  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) throw new Error;
    let returnVal = this.head.val;
    this.head = this.head.next;
    this.length--;
    return returnVal;
  }


  // /** getAt(idx): get val at idx. */

  // getAt(idx) {

  // }

  // /** setAt(idx, val): set val at idx to val */

  // setAt(idx, val) {

  // }

  // /** insertAt(idx, val): add node w/val before idx. */

  // insertAt(idx, val) {

  // }

  // /** removeAt(idx): return & remove item at idx, */

  // removeAt(idx) {

  // }

  // /** average(): return an average of all values in the list */

  // average() {

  // }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
    this._list = new LinkedList();
  }
  /** push(val): add new value to the top of the stack. Returns undefined. */

  updateStack() {
    this.top = this._list.head;
    this.size = this._list.length;
  }

  push(val) {
    this._list.unshift(val);
    this.updateStack();
    // let newNode = new Node(val);
    // newNode.next = this.top
    // this.top = newNode
    // this.size++

  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    let returnVal = this._list.shift();
    this.updateStack();

    return returnVal;

  }

  /** peek(): return the value of the top node in the stack. */

  peek() {
    return this.top.val;

  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0 ? true : false;

  }
}

module.exports = Stack;
