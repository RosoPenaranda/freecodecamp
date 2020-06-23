function updateInventory(arr1, arr2) {

  arr2.forEach(elem => {
    let index = arr1.findIndex(arr1Elem => arr1Elem[1] === elem[1]);
    (index != -1) ? arr1[index][0] = arr1[index][0] + elem[0] : arr1.push(elem)
  });

  return arr1.sort((a, b) => {
    if (a[1].toLowerCase() > b[1].toLowerCase()) {
      return 1;
    }
    if (a[1].toLowerCase() < b[1].toLowerCase()) {
      return -1;
    }
    return 0;
  });
}

// Example inventory lists


console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));

