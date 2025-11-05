const matrix = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];

function areEqual(array1) {
  return array1[0] === array1[1] && array1[1] === array1[2];
}

function possibleResult() {
  const result = [[matrix[2][0], matrix[1][1], matrix[0][2]]];
  const corner = [];
  for (let index = 0; index < 3; index++) {
    corner.push(matrix[index][index]);
  }
  result.push(corner);

  for (let i = 0; i < matrix.length; i++) {
    const subset = [];
    const secondSubset = [];
    for (let index = 0; index < matrix.length; index++) {
      subset.push(matrix[i][index]);
      secondSubset.push(matrix[index][i]);
    }
    result.push(subset);
    result.push(secondSubset);
  }
  return result;
}

function isWinner() {
  const setOfWinComb = possibleResult();
  let conditon = false;
  for (let index = 0; index < setOfWinComb.length; index++) {
    conditon = conditon || areEqual(setOfWinComb[index]) && setOfWinComb[index][0] !== ' ';
  }
  return conditon
}

function update() {
  console.clear();
  const row = [];

  for (let index = 0; index < matrix.length; index++) {
    row.push(matrix[index].join(' | '));
  }
  console.log(row.join('\n----------\n'));
  return;
}

function selectSymbol(userNo) {
  const symbol = 'OX';
  return symbol[userNo - 1];
}

function selectIndex(input) {
  const index = '123';
  return index.indexOf(input);
}

function atRow(input) {
  return selectIndex(input[0]);

}
function atCol(input) {
  return selectIndex(input[1]);
}

function isValidInput(abscissa, ordinate) {

  if (abscissa < 4 && ordinate < 4) {
    return matrix[abscissa - 1][ordinate - 1] === ' ';
  }
  return false;
}

function userInput(start = 0) {
  for (let index = 0 + start; index < 9; index++) {
    console.log('\n', index);
    const input = prompt(`user ${index % 2 + 1} turn:`);
    if (!isValidInput(input[0], input[1])) {
      console.log("enter a valid index");
      index--;
    } else {
      const xyAxis = [atRow(input), atCol(input)];
      matrix[xyAxis[0]][xyAxis[1]] = selectSymbol(index % 2 + 1);
      update();
    }
    if (isWinner()) {
      console.log(`user ${index % 2 + 1} is won the match`);
      return;
    }
  }
}

update();
userInput();


