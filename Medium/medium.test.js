const sumOfThree = require("./sumOfThree");

test("input 0 to equal [ -1, 0, 1 ]", () => {
  expect(sumOfThree(0)).toStrictEqual([-1, 0, 1]);
});
