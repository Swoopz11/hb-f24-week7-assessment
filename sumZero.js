let sampleArr1 = [1,2,3,4,5]
let sampleArr2 = [-2,1,2,5,7]
let sampleArr3 = [0,0,2,5,7]
let sampleArr4 = [0,1,2,3,4]

function addToZero (arr) {
    let toZero = false

    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k <= arr.length; k++) {
            if (arr[i] + arr[k + 1] === 0) {
                toZero = true
            }
        }
    } 
    return toZero
} 
console.log(addToZero(sampleArr1))
console.log(addToZero(sampleArr2))
console.log(addToZero(sampleArr3))
console.log(addToZero(sampleArr4))