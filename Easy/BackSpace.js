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

console.log(BackSpace("ab#c", "ad#c"));
