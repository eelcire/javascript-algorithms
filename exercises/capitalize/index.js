// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//     let newarray = []
//     for (let char of str.split(' ')) {
//         newarray.push(char[0].toUpperCase() + char.slice(1))
//     }
//     return newarray.join(' ')
// }

function capitalize(str) {
    let answer = str[0].toUpperCase()
    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === ' ') {
            answer += str[i].toUpperCase()
        } else {
            answer += str[i]
        }
    }
    return answer
}

module.exports = capitalize;