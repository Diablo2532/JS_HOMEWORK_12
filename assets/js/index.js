class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = {
      data,
      next: null,
    };

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  deleteItem(data) {
    if (!this.head) {
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;

    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }

      current = current.next;
    }
  }

  addNthElement(data, position) {
    let current = this.head;

    for (let index = 1; index < position && current; index++) {
      current = current.next;
    }

    if (!current) {
      return;
    }

    const newNode = {
      data,
      next: current.next,
    };

    current.next = newNode;
  }

  toArray() {
    const result = [];
    let current = this.head;

    while (current) {
      result.push(current.data);
      current = current.next;
    }

    return result;
  }
}

const list = new LinkedList();

list.append("first");
list.append("second");
list.append("third");

console.log(list.toArray());

list.deleteItem("second");

console.log(list.toArray());

list.addNthElement("new value", 1);

console.log(list.toArray());

class NumberedCollection {
  add(data) {
    const position = Object.keys(this).length + 1;

    this[position] = data;
  }

  [Symbol.iterator]() {
    const values = Object.values(this);
    let index = 0;

    return {
      next() {
        if (index < values.length) {
          const value = values[index];
          index++;

          return {
            value,
            done: false,
          };
        }

        return {
          done: true,
        };
      },
    };
  }
}

const collection = new NumberedCollection();

collection.add("first value");
collection.add("second value");
collection.add("third value");

console.log(collection);
for (const value of collection) {
  console.log(value);
}
