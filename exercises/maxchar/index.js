// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let max = 0
    let maxChar = ''
    let set = new Set();
    for (let char of str) {
        if (set.has(char)) {
            set[char]++
        } else {
            set[char] = 1
        }
    }
    for (let char in set) {
        if (set[char] > max) {
            max = set[char]
            maxChar = char
        }
    }
    return maxChar
}

module.exports = maxChar;
