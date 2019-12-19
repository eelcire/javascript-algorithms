// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let stringed = n.toString();
    let answer = ''
    for (let char of stringed) {
        answer = char + answer
    }
    if (stringed[0] === '-') {
        answer = '-' + answer.slice(0, -1)
    }
    return parseInt(answer)
}

// function reverseInt(n) {
//     let sign = Math.sign(n)
//     let answer = n.toString().split('').reverse().join('')
//     return parseInt(answer) * sign
// }



module.exports = reverseInt;
