let string1 = 'hello world'
let string2 = 'one'

function hasUniqueChars (string) {
    let unique = true
    
    for (let i = 0; i < string.length; i++) {
        for (let k = i; k < string.length; k++) {
            if (string[i] === string[k + 1]) {
                unique = false
            }
        }
    } 
    console.log(string)
    return unique
}

console.log(hasUniqueChars(string1))
console.log(hasUniqueChars(string2))