const input = 75;

function Grade(value) {
  if (value >= 90) {
    return "A";
  } else if (value >= 80 && value <= 89) {
    return "B";
  } else if (value >= 70 && value <= 79) {
    return "C";
  } else if (value >= 60 && value <= 69) {
    return "D";
  } else if (value <= 59) {
    return "E";
  }
}

console.log(Grade(input));
