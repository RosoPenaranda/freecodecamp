function pairwise(arr, arg) {

  const arrLength = arr.length
  if (arrLength == 0)
    return 0

  const equal = (obj, obj2) => {

    if (obj.a == obj2.a && obj.b == obj2.b) {
      return true
    } else return false

  }

  let pairs = []
  let index = []

  let resp = 0
  for (let i = 0; i < arrLength - 1; i++) {
    for (let x = i + 1; x < arrLength; x++) {
      if (arr[i] + arr[x] == arg) {
        pairs.push({ a: i, b: x, c: i + x })
      }
    }
  }


  for (let i = 0; i < pairs.length; i++) {
    if (!index.includes(pairs[i].a) && !index.includes(pairs[i].b)) {
      index.push(pairs[i].a)
      index.push(pairs[i].b)
      resp += pairs[i].c
    }
  }

  return resp
}

console.log(pairwise([1, 4, 2, 3, 0, 5], 7));



