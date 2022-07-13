const input = 9;

function filmRating(value) {
  if (value >= 21) {
    return "DEWASA";
  } else if (value >= 13) {
    return "REMAJA";
  } else if (value >= 9) {
    return "BIMBINGAN ORANG TUA";
  } else {
    return "SEMUA USIA";
  }
}
console.log(filmRating(input));
