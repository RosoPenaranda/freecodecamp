function insertionSort(array) {

  let response = [array[0]]
  let control = array.length
  for (let i = 1; i < control; i++) {

    if (array[i] > response[response.length - 1]) {
      response.push(array[i])
    } else {
      for (let j = response.length - 1; j >= 0; j--) {
        if (array[i] >= response[j]) {
          response = response.slice(0, j + 1).concat([array[i]].concat(response.slice(j + 1, response.length)))
          break
        }
      }
    }
  }

  return response;

}

console.log(insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
