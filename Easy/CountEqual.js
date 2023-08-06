var countPairs = function (nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (num == nums[j] && (i * j) % k == 0) {
        count++;
      }
    }
  }
  return count;
};

console.log(countPairs([3, 1, 2, 2, 2, 1, 3], 2));
