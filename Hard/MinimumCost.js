const minCost = function (nums, cost) {
  const getCost = function (target) {
    var c = 0;
    for (let i = 0; i < nums.length; i++) {
      c += Math.abs(target - nums[i]) * cost[i];
    }
    return c;
  };

  var left = Math.min(...nums);
  var right = Math.max(...nums) + 1;
  var mid = Math.floor((left + right) / 2);

  console.log(left, right, mid);

  while (left < right) {
    console.log(getCost(mid), getCost(mid + 1));
    if (getCost(mid) < getCost(mid + 1)) {
      right = mid;
    } else {
      left = mid + 1;
    }
    mid = Math.floor((left + right) / 2);
    console.log(left, right, mid);
  }
  return getCost(left);
};

console.log(minCost([1, 3, 5, 2], [2, 3, 1, 14]));
