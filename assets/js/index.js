const checkSequence = (text) => {
  const stack = [];
  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
    ">": "<",
  };

  for (const symbol of text) {
    if ("([{<".includes(symbol)) {
      stack.push(symbol);
    } else if (pairs[symbol] && stack.pop() !== pairs[symbol]) {
      return false;
    }
  }

  return stack.length === 0;
};

console.log(checkSequence("()(([]))"));

console.log(checkSequence("{[}]"));

console.log(checkSequence("(hello [world])"));

console.log(checkSequence("((())"));
