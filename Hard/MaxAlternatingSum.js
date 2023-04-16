const MaxAlternatingSum = function (arr) {
  // dp
  let subarr = [];
  for (let i = 0; i < arr.length; i++) {
    subarr = [arr[i]];
    for (let j = i + 1; j < arr.length; j++) {
      subarr = [...subarr, arr[j]];
      console.log(i, j, subarr);
    }
    subarr = [];
  }

  return 1;
};

const max = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += i % 2 === 0 ? arr[i] : -arr[i];
  }
  return sum;
};

console.log(MaxAlternatingSum([4, 2, 5, 3]));

// 4,2,5,3
// 4,2,5
// 4,2
// 4
// 4,2,3
// 4,3
// 4,5,3
// 4,5
