let longestWordArr = ["hi", "hello", "hello there", "hey"]

function findLongestWord(arr) {
    let compArr = []

    for (let i = 0; i < arr.length; i++) {
        compArr.push(arr[i].length)
    } 

    return Math.max(...compArr)
}

console.log(findLongestWord(longestWordArr))