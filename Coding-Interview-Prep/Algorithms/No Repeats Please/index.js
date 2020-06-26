function permAlone(str) {


  const makeNumber = (array) => {
    if (!array) return ""
    let resp = "";
    for (let i = 0; i < array.length; i++) {
      resp += array[i].index.toString()
    }
    return resp
  }

  const toIndex = (word, char) => {
    let words = []

    if (word.includes(char)) return []
    var wordLength = word.length
    for (let i = 0; i < wordLength; i++) {
      if ((i == 0) && (word[i].val != char.val)) {
        let term = [char].concat(word)
        let id = makeNumber(term)
        words.push({ term, id })

      }

      if ((0 < i) && (i < wordLength)) {
        if ((word[i - 1].val != char.val) && (word[i].val != char.val)) {
          let term = word.slice(0, i).concat([char]).concat(word.slice(i, wordLength))
          let id = makeNumber(term)
          words.push({ term, id })

        }
      }

      if ((i == wordLength - 1) && (word[i].val != char.val)) {
        let term = word.concat([char])
        let id = makeNumber(term)
        words.push({ term, id })

      }
    }

    return words;

  }

  let charts = []
  for (let i = 0; i < str.length; i++) {
    charts.push({ val: str[i], index: i })
  }

  let [first, ...rest] = charts

  let chartsLength = charts.length
  var resp = [[first]]
  for (let x = 1; x < chartsLength; x++) {
    var temp = []
    var ids = []

    for (var y = 0; y < rest.length; y++) {
      for (var z = 0; z < resp.length; z++) {
        let words = toIndex(resp[z], rest[y])
        for (var k = 0; k < words.length; k++) {
          if (!ids.includes(words[k].id)) {
            ids.push(words[k].id)
            temp.push(words[k].term)
          }
        }
      }
    }

    resp = temp
  }
  return resp.length
}

console.log(permAlone('abfdefa'));
