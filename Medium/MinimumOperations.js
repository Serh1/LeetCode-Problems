const minOperations = function (nums, queries) {
  nums = nums.sort((a, b) => a - b);
  const max = nums[nums.length - 1];
  const min = nums[0];

  const getCost = function (target) {
    var c = 0;
    if (max > target && min < target) {
      let i = nums.indexOf(target);
      let left = nums.slice(0, i);
      let right = nums.slice(i + 1);
      c =
        target * left.length -
        left.reduce((partialSum, a) => partialSum + a, 0) +
        Math.abs(
          target * right.length -
            right.reduce((partialSum, a) => partialSum + a, 0)
        );

      return c;
    }

    for (let i = 0; i < nums.length; i++) {
      c += Math.abs(target - nums[i]);
    }
    return c;
  };

  const result = [];
  for (target = 0; target < queries.length; target++) {
    result[target] = getCost(queries[target]);
  }

  return result;
};

console.log(minOperations([3, 1, 6, 8], [1, 5]));
