function simpleCalc(n1, n2, operator) {
  let operations = {
    multiply: n1 * n2,
    divide: n1 / n2,
    add: n1 + n2,
    subtract: n1 - n2,
  };
  result = operations[operator];
  console.log(result);
}

simpleCalc(
  5,

  5,

  "multiply"
);

simpleCalc(
  40,

  8,

  "divide"
);
simpleCalc(
  12,

  19,

  "add"
);
simpleCalc(
  50,

  13,

  "subtract"
);
