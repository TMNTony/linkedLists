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
    if (!this.head) {
      this.head = new Node(value);
      return this;
    }
    const prevHead = this.head;
    this.head = new Node(value, prevHead);
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
    if (!this.head) return null;
    let pointer = this.head;
    for (let i = 0; i < index; i++) {
      pointer = pointer.next;
    }
    return pointer || null;
  };

  pop = () => {
    if (!this.head) return null;
    if (!this.head.next) {
      this.head = null;
      return;
    }
    const pointerBeforeTail = this.at(this.size() - 2);
    pointerBeforeTail.next = null;
    return this.head;
  };

  contains = (value) => {
    if (!this.head) return null;
    let pointer = this.head;
    while (pointer.next !== null) {
      if (pointer.value === value) return true;
      pointer = pointer.next;
    }
    return pointer.value === value;
  };

  find = (value) => {
    if (!this.head) return null;
    let pointer = this.head;
    let count = 0;
    while (pointer.next !== null) {
      if (pointer.value === value) return count;
      pointer = pointer.next;
      count++;
    }
    if (pointer.value === value) return count;
    return null;
  };

  toString = () => {
    if (!this.head) return "(null)";
    let str = "";
    let pointer = this.head;
    while (pointer.next !== null) {
      str = `${str} (${pointer.value}) ->`;
      pointer = pointer.next;
    }
    return `${str} (${pointer.value}) -> (null)`;
  };

  insertAt(value, index) {
    const node = new Node(value);
    if (!this.head) return node;
    if (index === 0) {
      this.prepend(value);
      return this.toString();
    }
    if (index > this.size() - 1) {
      this.append(value);
      return this.toString();
    }
    const prev = this.at(index - 1);
    node.next = prev.next;
    prev.next = node;
    return this.toString();
  }

  removeAt(index) {
    if (!this.head) return null;
    if (index === 0) {
      this.head = this.head.next;
      return this.toString();
    }
    if (index > this.size() - 1) return this.toString();
    const prev = this.at(index - 1);
    const pointerToRemove = prev.next;
    prev.next = pointerToRemove.next;
    return this.toString();
  }
}

const list = new LinkedList();

list.prepend(2);
list.append(1);
list.append(3);
list.append(4);

console.log(list.toString());
