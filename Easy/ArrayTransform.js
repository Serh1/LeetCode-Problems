// 36/38 tests passed

var arrayRankTransform = function (arr) {
  let copy = [...arr];
  arr.sort((a, b) => a - b);
  let ranks = Array(arr.length).fill(0);

  let rank = 0;
  for (let i = 0; i < arr.length; i++) {
    rank++;
    ranks[i] += rank;
    if (arr[i] === arr[i + 1]) {
      ranks[i + 1] = rank;
      i++;
    }
  }

  let result = Array(arr.length).fill(0);
  for (let i = 0; i < arr.length; i++) {
    let j = arr.indexOf(copy[i]);
    result[i] = ranks[j];
  }

  return result;
};

console.log(arrayRankTransform([40, 40, 40]));
