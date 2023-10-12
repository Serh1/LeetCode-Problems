function sumOfThree(num) {
  return num % 3 != 0 ? [] : [num / 3 - 1, num / 3, num / 3 + 1];
}

module.exports = sumOfThree;
