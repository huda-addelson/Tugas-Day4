const input = 2015;

function kabisat(value) {
  if ((0 == value % 4 && 0 != value % 100) || 0 == value % 400) {
    return "Kabisat";
  } else {
    return "Bukan Kabisat";
  }
}

console.log(kabisat(input));
