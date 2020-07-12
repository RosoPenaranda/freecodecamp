# Algorithms: Implement Quick Sort

Here we will move on to an intermediate sorting algorithm: quick sort. Quick sort is an efficient, recursive divide-and-conquer approach to sorting an array. In this method, a pivot value is chosen in the original array. The array is then partitioned into two subarrays of values less than and greater than the pivot value. We then combine the result of recursively calling the quick sort algorithm on both sub-arrays. This continues until the base case of an empty or single-item array is reached, which we return. The unwinding of the recursive calls return us the sorted array.

Quick sort is a very efficient sorting method, providing O(nlog(n)) performance on average. It is also relatively easy to implement. These attributes make it a popular and useful sorting method.

Instructions: Write a function quickSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest. While the choice of the pivot value is important, any pivot will do for our purposes here. For simplicity, the first or last element could be used.
Note:
We are calling this function from behind the scenes; the test array we are using is commented out in the editor. Try logging `array` to see your sorting algorithm in action!

### Response:

```js
function quickSort(array) {
  if (array.length <= 1) return array;

  let left = [];
  let right = [];
  let pivote;
  let pivoteIndex;
  const length = array.length;
  const medio = Math.ceil(length / 2);
  if (length == 2) {
    pivote = array[0];
    pivoteIndex = 0;
  } else {
    let max, min;

    if (array[0] > array[length - 1]) {
      max = array[0];
      min = array[length - 1];
    } else {
      max = array[length - 1];
      min = array[0];
    }
    if (array[medio] > max) {
      max = array[medio];
    } else if (array[medio] > min) {
      min = array[medio];
    }

    if (![min, max].includes(array[0])) {
      pivote = array[0];
      pivoteIndex = 0;
    } else if (![min, max].includes(array[length - 1])) {
      pivote = array[length - 1];
      pivoteIndex = [length - 1];
    } else {
      pivote = array[medio];
      pivoteIndex = [medio];
    }
  }

  for (let i = 0; i < length; i++) {
    if (i != pivoteIndex) {
      if (pivote > array[i]) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
  }
  return quickSort(left).concat([pivote].concat(quickSort(right)));
}
```

### Test Cases

| Cases                                                                  |
| ---------------------------------------------------------------------- |
| `quickSort` should be a function.                                      |
| `quickSort` should return a sorted array (least to greatest).          |
| `quickSort` should return an array that is unchanged except for order. |
| `quickSort` should not use the built-in `.sort()` method.              |
