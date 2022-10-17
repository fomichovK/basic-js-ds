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

class Stack {
  constructor(initialData = []) {
    this.data = initialData;
    this.size = initialData.length;
  }

  push = (item) => {
    this.data[this.size] = item;
    this.size++;
  };

  pop = () => {
    if (this.size > 0) {
      const item = this.data[this.size - 1];
      this.data.length = this.size - 1;
      this.size--;
      return item;
    }
  };

  peek() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.data[this.data.length - 1];
  }
}

const stack = new Stack();
stack.push(5);
stack.push(6);
stack.push(7);
console.log(stack.peek());

module.exports = {
  Stack,
};
