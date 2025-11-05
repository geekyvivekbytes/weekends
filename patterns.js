const rowCols = function (rows, cols) {
  return rows === cols || rows + cols - 6 === 5 ;
}

const makeARow = function (rows, currentIndex) {
  let line = '';
  for (let index = 1; index <= rows; index++) {
    line += rowCols(index, currentIndex) ? '⬛️' : '⬜️';
  }
  return line;
}

const makePattren = function (rows, cols) {
  const pattern = [];
  for (let index = 1; index <= cols; index++) {
    pattern.push(makeARow(rows, index));
  }
  return pattern.join('\n');
}

const displayPattern = function (rows, cols) {
  console.log(makePattren(rows, cols));
}

displayPattern(10, 10);
