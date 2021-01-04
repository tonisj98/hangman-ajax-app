function getRandomValueFromArray(arr) {
    let numElements = arr.length
    let randomIndex = Math.floor(Math.random() * numElements)

    return arr[randomIndex]
}
