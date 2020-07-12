# Algorithms: Implement Insertion Sort

The next sorting method we'll look at is insertion sort. This method works by building up a sorted array at the beginning of the list. It begins the sorted array with the first element. Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position. It continues iterating through the list and swapping new items backwards into the sorted portion until it reaches the end. This algorithm has quadratic time complexity in the average and worst cases.

Instructions: Write a function `insertionSort` which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

Note:
We are calling this function from behind the scenes; the test array we are using is commented out in the editor. Try logging `array` to see your sorting algorithm in action!

### Response:

```js
function insertionSort(array) {
  let response = [array[0]];
  let control = array.length;
  for (let i = 1; i < control; i++) {
    if (array[i] > response[response.length - 1]) {
      response.push(array[i]);
    } else {
      for (let j = response.length - 1; j >= 0; j--) {
        if (array[i] >= response[j]) {
          response = response
            .slice(0, j + 1)
            .concat([array[i]].concat(response.slice(j + 1, response.length)));
          break;
        }
      }
    }
  }

  return response;
}
```

### Test Cases

| Cases                                                                      |
| -------------------------------------------------------------------------- |
| `insertionSort` should be a function.                                      |
| `insertionSort` should return a sorted array (least to greatest).          |
| `insertionSort` should return an array that is unchanged except for order. |
| `insertionSort` should not use the built-in `.sort()` method.              |
