var distinctNames = function (ideas) {
  const words = {};
  let count = 0;
  ideas.forEach((word) => {
    const startingChar = word.charAt(0);
    if (!(startingChar in words)) {
      words[startingChar] = [];
    }
    words[startingChar].push(word.slice(1));
  });

  for (char1 in words) {
    for (char2 in words) {
      if (char1 === char2) {
        continue;
      }
      const set = new Set();
      for (let i = 0; i < words[char1].length; i++) {
        set.add(words[char1][i]);
      }
      for (let i = 0; i < words[char2].length; i++) {
        set.add(words[char2][i]);
      }

      count +=
        (words[char1].length - set.size) * (words[char2].length - set.size);
    }
  }
  return count;
};

console.log(distinctNames(["coffee", "donuts", "time", "toffee"]));
