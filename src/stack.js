const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Node {
  constructor(data, prev) {
    this.data = data;
    this.prev = prev;
  }
}

class Stack {
  constructor() {
    this.last = null;
  }
  push(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.last = new Node(data, this.last);
  }

  pop() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let res;
    if (this.last !== null) {
      res = this.last.data;
      this.last = this.last.prev;
    }
    return res;
  }

  peek() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  Stack,
};
