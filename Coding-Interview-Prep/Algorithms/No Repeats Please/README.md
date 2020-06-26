# Algorithms: No Repeats Please

Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, `aab` should return 2 because it has 6 total permutations `(aab, aab, aba, aba, baa, baa)`, but only 2 of them `(aba and aba)` don't have the same letter (in this case `a`) repeating.

### Response:

```js
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
```

---

### Test Cases

| Cases                                      |
| ------------------------------------------ |
| `permAlone("aab")` should return a number. |
| `permAlone("aab")` should return 2.        |
| `permAlone("aaa")` should return 0.        |
| `permAlone("aabb")` should return 8.       |
| `permAlone("abcdefa")` should return 3600. |
| `permAlone("abfdefa")` should return 2640. |
| `permAlone("zzzzzzzz")` should return 0.   |
| `permAlone("a")` should return 1.          |
| `permAlone("aaab")` should return 0.       |
| `permAlone("aaabb")` should return 12.     |
