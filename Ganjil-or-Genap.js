const input = 43;

function ganjilGenap(value) {
  if (value % 2 === 0) {
    return "Genap";
  } else {
    return "Ganjil";
  }
}

console.log(ganjilGenap(input));
