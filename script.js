let n = 13;
let str = " ";
function matchers() {
  matcher();
  document.write(n);

  alert(n + str);
  while (n > 0) {
    alert("Your turn!");
    let m = prompt("Get the matches!");
    if (isNaN(m) || m < 0 || m > 3) {
      return;
    }
    n -= m;
    matcher();
    alert(n + str);
    alert("my turn!");
    let rand = Math.floor(Math.random() * 3) + 1;
    alert(rand);
    n -= rand;
    matcher();
    if (n <= 0) {
      alert("You win!");
      break;
    } else if (n <= rand) {
      alert("I win!");
      break;
    }
  }
}
function matcher() {
  for (let i = 0; i < n; i++) {
    str += "| ";
  }
}
