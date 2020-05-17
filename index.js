class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    //adds the value item to the items array
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    });
    this.length++;
  }

  load(pos) {
    //get the value at index position
    const valueAtIndex = this.items[pos];
    if (!this.items[pos]) {
      throw new Error('OutOfBounds');
    }
    return valueAtIndex;
  }

  max() {
    let maxNumber = Math.max(...this.items);
    if (!this.length) {
      throw new Error('EmptySortedList');
    }
    return maxNumber;
  }

  min() {
    let minNumber = Math.min(...this.items);
    if (!this.length) {
      throw new Error('EmptySortedList');
    }
    return minNumber;
  }

  sum() {
    let sum = this.items.reduce(function (a, b) {
      return a + b;
    }, 0);
    return sum;
  }

  avg() {
    let sum = this.items.reduce(function (a, b) {
      return a + b;
    }, 0);
    let average = sum / this.items.length;
    if (!this.length) {
      throw new Error('EmptySortedList');
    }
    return average;
  }
}

module.exports = SortedList;
