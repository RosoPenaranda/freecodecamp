function sym(args) {

  const symmetrycDiff = (first, second) => {

    let response = new Set(second)
    first.forEach(element => {
      (second.includes(element)) ? response.delete(element) : response.add(element)
    });

    return Array.from(response)
  }

  return Array.from(arguments).reduce(symmetrycDiff)

}
