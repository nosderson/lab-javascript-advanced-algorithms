class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    return this.queueControl.length !== this.MAX_SIZE

  }

  isEmpty() {
    return (!this.queueControl.length)
  }

  enqueue(item) {
    if (!this.canEnqueue()) {
      console.log(('QUEUE_OVERFLOW'));
      throw new Error('QUEUE_OVERFLOW');
    }
    this.queueControl.push(item);
    return this.queueControl;
  }

  dequeue() {
    if (!this.isEmpty()) {
      return this.queueControl.shift();
    }
    throw new Error('QUEUE_UNDERFLOW');
  }

  display() {
    return this.queueControl;
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
