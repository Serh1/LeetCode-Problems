var average = function (salary) {
  let sum = 0;
  let min = Infinity;
  let max = -Infinity;
  for (i in salary) {
    sum += salary[i];
    min = Math.min(min, salary[i]);
    max = Math.max(max, salary[i]);
  }
  sum -= min + max;
  return sum / (salary.length - 2);
};

console.log(
  average([
    25000, 48000, 57000, 86000, 33000, 10000, 42000, 3000, 54000, 29000, 79000,
    40000,
  ])
);
