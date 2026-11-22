class NumberedCollection {
  add(data) {
    const position = Object.keys(this).length + 1;

    this[position] = data;
  }
}

const collection = new NumberedCollection();

collection.add("first value");
collection.add("second value");
collection.add("third value");

console.log(collection);