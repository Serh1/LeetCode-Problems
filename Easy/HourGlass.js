const maxSum = function (grid) {
  let max = -Infinity;
  const n = grid.length;
  const m = grid[0].length;
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < m - 2; j++) {
      const sum =
        grid[i][j] +
        grid[i][j + 1] +
        grid[i][j + 2] +
        grid[i + 1][j + 1] +
        grid[i + 2][j] +
        grid[i + 2][j + 1] +
        grid[i + 2][j + 2];
      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
};

// 1 way:
//      Take each i,j, verify first if it has i+3 or j+3 or i+3,j+3 defined.
//      So I have to verify hourglass for only 6,2,4 and 2nd 2

const grid = [
  [6, 2, 1, 3],
  [4, 2, 1, 5],
  [9, 2, 8, 7],
  [4, 1, 2, 9],
];
console.log(maxSum(grid));
