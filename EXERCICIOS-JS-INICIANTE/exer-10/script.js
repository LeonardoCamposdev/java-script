function showStars(rows) {
  let pattern = "";

  for (let i = 0; i < rows; i++) {
    pattern += "*";
    console.log(pattern);
  }
}

showStars(5);
