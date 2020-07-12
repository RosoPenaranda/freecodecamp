function quickSort(array) {

  if (array.length <= 1) return array

  let left = []
  let right = []
  let pivote
  let pivoteIndex
  const length = array.length
  const medio = Math.ceil(length / 2)
  if (length == 2) {
    pivote = array[0]
    pivoteIndex = 0
  } else {

    let max, min

    if (array[0] > array[length - 1]) {
      max = array[0]
      min = array[length - 1]
    } else {
      max = array[length - 1]
      min = array[0]
    }
    if (array[medio] > max) {
      max = array[medio]
    } else if (array[medio] > min) {
      min = array[medio]
    }

    if (![min, max].includes(array[0])) {
      pivote = array[0]
      pivoteIndex = 0
    } else if (![min, max].includes(array[length - 1])) {
      pivote = array[length - 1]
      pivoteIndex = [length - 1]
    } else {
      pivote = array[medio]
      pivoteIndex = [medio]
    }
  }

  for (let i = 0; i < length; i++) {
    if (i != pivoteIndex) {
      if (pivote > array[i]) {
        left.push(array[i])
      } else {
        right.push(array[i])
      }
    }
  }
  return quickSort(left).concat([pivote].concat(quickSort(right)))
}


console.log(quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
