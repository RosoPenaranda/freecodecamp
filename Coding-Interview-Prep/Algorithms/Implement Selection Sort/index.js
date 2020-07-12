function selectionSort(array) {

  const control = array.length
  for (let i = 0; i < control; i++) {
    let min = array[i]
    let index = i
    for (let j = i + 1; j < control; j++) {
      if (min > array[j]) {
        min = array[j]
        index = j
      }
    }
    array[index] = array[i]
    array[i] = min
  }
  return array

}


console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
