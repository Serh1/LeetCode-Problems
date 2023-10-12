// EASY
// Not Submitted

const BackSpace = function (s1, s2) {
  const compare = (s) => {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
      if (s.charAt(i) == "#") {
        stack.pop();
      } else {
        stack.push(s.charAt(i));
      }
    }
    return stack.toString();
  };
  return compare(s1) === compare(s2);
};

var input = [1, 5, 7, "one", "five", 5, 7, "one"];

const example = function (arr) {
  const unique = {};
  const uniqueArray = arr.filter((item) => {
    if (!unique[item]) {
      unique[item] = true;
      return true;
    }
    return false;
  });

  const finalArray = uniqueArray.filter((item) => item !== "");

  return finalArray;
};

console.log(example(input));
