const horizontalJoin = (letters, word) => {
  const horizontal = letters.map(ls => ls.join(''))
  for (l of horizontal) {
    if (l.includes(word)) return true;
  }
};

const transpose = function (matrix) {
  let newMatrix = [];
  for (let row = 0; row < matrix[0].length; row++) {
    newMatrix[row] = [];
    for (let col = 0; col < matrix.length; col++) {
      newMatrix[row].push(matrix[col][row]);
    }
  }
  return newMatrix;
};

const wordSearch = (letters, word) => {
  if (letters === undefined) {
    return 'Error';
  }
  if (letters.length === 0) {
    return false;
  }
  if (horizontalJoin(letters, word)) {
    return true;
  }
  if (horizontalJoin(transpose(letters), word)) {
    return true;
  }
  return false;
};

module.exports = wordSearch