const distributeCookies = (cookies, k) => {
  let ans = Infinity;
  const length = cookies.length;
  cookies.sort((a, b) => b - a);

  const helper = (child, cookies, ind, c, k) => {
    if (ind < length) {
      for (let j = 0; j < k; j++) {
        if (child[j] + cookies[ind] < ans) {
          child[j] += cookies[ind];
          helper(child, cookies, ind + 1, j, k);
          child[j] -= cookies[ind];
        }
      }
      return;
    }
    ans = Math.min(ans, Math.max(...child));
  };

  helper(Array(k).fill(0), cookies, 0, 0, k);
  return ans;
};
console.log(distributeCookies([6, 1, 3, 2, 2, 4, 1, 2], 3));
