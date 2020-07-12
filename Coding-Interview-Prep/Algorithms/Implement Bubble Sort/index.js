function bubbleSort(array) {
  let isOrder = false
  const control = array.length - 1
  while (!isOrder) {
    isOrder = true
    for (let i = 0; i < control; i++) {
      if (array[i] > array[i + 1]) {
        const temp = array[i]
        array[i] = array[i + 1]
        array[i + 1] = temp
        isOrder = false
      }
    }
  }

  return array;
}

console.log(bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))