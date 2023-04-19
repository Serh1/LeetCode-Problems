function prisonAfterNDays(cells, N) {
  const seen = new Map();
  while (N > 0) {
    const cells2 = new Array(8).fill(0);
    seen.set(cells.toString(), N--);
    for (let i = 1; i < 7; ++i) {
      cells2[i] = cells[i - 1] === cells[i + 1] ? 1 : 0;
    }
    cells = cells2;
    if (seen.has(cells.toString())) {
      N %= seen.get(cells.toString()) - N;
    }
  }
  return cells;
}

console.log(prisonAfterNDays([1, 0, 0, 1, 0, 0, 1, 0], 1000000000));
