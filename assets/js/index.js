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

for (const value of collection) {
  console.log(value);
}