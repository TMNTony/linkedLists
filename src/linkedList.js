import Node from "./node.js";

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append = (value) => {
    if (!this.head) {
      this.head = new Node(value);
      return this;
    }
    const tail = this.tail();
    tail.next = new Node(value);
    return tail;
  };

  prepend = (value) => {

  };

  size = () => {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  };

  getHead = () => this.head;

  tail = () => {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  };

  at = (index) => {

  };

  pop = () => {

  };

  contains = (value) => {

  };

  find = (value) => {

  };

  toString = () => {

  };
}

const node1 = new Node(2);
const node2 = new Node(5);
const node3 = new Node(7);
node2.next = node3;
node1.next = node2;

const list = new LinkedList();

list.append(2);
list.append(8);

console.log(list.getHead()); // returns 5
