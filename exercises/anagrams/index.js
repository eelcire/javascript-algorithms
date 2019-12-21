// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//     let newA = stringA.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
//     let newB = stringB.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
    
//     return newA === newB
// }

function anagrams(stringA, stringB) {
    let newA = stringA.replace(/[^w]/g, '').toLowerCase()
    let newB = stringB.replace(/[^w]/g, '').toLowerCase()
    let mapA = {}
    let mapB = {}

    if (newA.length !== newB.length) return false

    for (let char of stringA) {
        mapA[char] = mapA[char] + 1 || 1
    }
    for (let char of stringB) {
        mapB[char] = mapB[char] + 1 || 1
    }
    for (let char in mapA) {
        if (mapA[char] !== mapB[char]) return false
    }
    return true
}   

module.exports = anagrams;