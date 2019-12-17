// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let answer = '';
    for (let i = 0; i < str.length; i++) {
        answer = str[i] + answer;
        debugger;
    }
    return answer
}

// function reverse(str) {
//     let answer = ''
//     for (let thing of str) {
//         answer = thing + answer
//     }
//     return answer
// }

// function reverse(str) {
//     return str.split("").reverse().join("")
// }

// function reverse(str) {
//     return str.split('').reduce((reversed, char) => char + reversed, '')
// }

module.exports = reverse;