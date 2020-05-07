//Type your LRU Cache below!

//add to the front, remove the last if cache is full
//when accessing item, move to front of cache

class LRUCache {
  constructor(maxSize) {
    this.maxSize = maxSize || 1;
    this.cache = {};
    this.length = 0;
    this.list = new DoublyLinkedList();
  }
  insertKeyValuePair() {}

  getMostRecentKey() {}

  getValueFromKey() {}
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insertNewNode(key, value) {
    let node = new Node(key, value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    return node;
  }
  evict() {}
}

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

module.exports = LRUCache;
