class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  constructor() {
    this.count = 0;
    this.firstValue = 0;
    this.storage = {};
  }
  
  enqueue(value) {
    this.storage[this.count] = value;
    this.count++;
  }
  
  dequeue() {
    if (this.count > this.firstValue) {
      let firstItem = this.storage[this.firstValue];
      delete this.storage[this.firstValue];
      this.firstValue++;
      return firstItem;
    }
  }
  
  size() {
    return this.count - this.firstValue;
  }

} // END QUEUE
