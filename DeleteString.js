// NOT COMPLETLY CORRECT

var deleteString = function (s) {
  let count = 0;
  var n = Math.floor(s.length / 2);
  if (allCharactersSame(s)) {
    return s.length;
  }
  while (s != null) {
    i = 0;
    let current = s.slice(0, n);
    if (current === s.slice(n, n + n)) {
      s = s.slice(n);
      count++;
      n = Math.floor(s.length / 2);
    } else {
      n--;
    }
    if (n < 0 || current === "") {
      console.log("Instram aici?");
      break;
    }
    i++;
  }
  return count;
};

function allCharactersSame(s) {
  let n = s.length;
  for (let i = 1; i < n; i++) if (s[i] != s[0]) return false;

  return true;
}

console.log(deleteString("aaaaa"));

// abaaba

// Le iau cate 1, 2, 3
// Si se mai si repeta ciclu asta mereu cand dau delete
