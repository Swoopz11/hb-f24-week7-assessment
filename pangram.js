const alpha = 'abcdefghijklmnopqrstuvwxyz '

let sampleString1 = 'The quick brown fox jumps over the lazy dog'
let sampleString2 = 'I like cats, but not mice'

function isPangram(string) {
    let pangram = true
    let newString = string.toLowerCase()

    for (let i = 0; i < alpha.length; i++) {
        if (!newString.includes(alpha[i])) {
            pangram = false
        }
    } 
    console.log(newString)
    return pangram
}

console.log(isPangram(sampleString1))
console.log(isPangram(sampleString2))