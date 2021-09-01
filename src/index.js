module.exports = 
function solveSudoku(matrix) {
  let size = matrix.length
  let boxSize = 3

  function findZero (matrix) {
    for (let row = 0; row < size; row++) {
      for (let column = 0; column < size; column++) {
        if (matrix[row][column] === 0) {
          return [row, column]
        }
      }
    }
    return null
  }

  function valid(num, pos, matrix) {
    let [r, c] = pos

    for (let i = 0; i < size; i++) {
      if (i !== r && matrix[i][c] === num) {
        return false
      }
    }

    for (let i = 0; i < size; i++) {
      if (i !== c && matrix[r][i] === num) {
        return false
      }
    }

    let boxRow = Math.floor(r / boxSize) * boxSize
    let boxCol = Math.floor(c / boxSize) * boxSize

    for (let i = boxRow; i < boxSize + boxRow; i++) {
      for (let k = boxCol; k < boxCol + boxSize; k++) {
        if (k !== c && i !== r && matrix[i][k] === num) {
          return false
        }
      }
    }

    return true

  }

  function solve () {
    if ( findZero(matrix) === null)  {
      return true
    }

    for (let i = 1; i < size + 1; i++) {

      let curNum = i

      if( valid(curNum, findZero(matrix), matrix) ) {
        // console.log(valid(curNum, findZero(matrix), matrix));
        let [x, y] = findZero(matrix)
        matrix[x][y] = curNum

        if( solve()) {
          return true
        } 

        matrix[x][y] = 0

      }

    }



    return false
  }
  console.log(findZero(matrix));
  solve()
  return matrix
}

// console.log(solveSudoku(input));