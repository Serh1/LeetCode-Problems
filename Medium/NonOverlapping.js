var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let count = 0;
  let last = intervals[0];
  console.log(last);

  intervals.forEach((interval, index) => {
    if (index === 0) return;
    console.log(interval, last, interval[0] < last[1]);
    if (interval[0] < last[1]) {
      count++;
    } else {
      last = interval;
    }
  });
  return count;
};

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [1, 3],
    [3, 4],
  ])
); // 1
