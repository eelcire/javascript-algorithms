// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//     let answer = []
//     let counter = 0
//     let counter2 = 0
//     while (counter < array.length)
//         if (!answer[counter2]) {
//             answer[counter2] = [array[counter]]
//             counter++
//         } else if (answer[counter2] && answer[counter2].length < size) {
//             answer[counter2].push(array[counter])
//             counter++
//         } else {
//             counter2++
//             answer[counter2] = [array[counter]]
//             counter++
//         }
//     return answer
// }

// function chunk(array, size) {
//     let answer = []

//     for (let item of array) {
//         let last = answer[answer.length - 1]

//         if (!last || last.length === size) {
//             answer.push([item])
//         } else {
//             last.push(item)
//         }
//     }
//     return answer
// }

function chunk(array, size) {
    let answer = []
    let pointer = 0;

    while (pointer < array.length) {
        answer.push(array.slice(pointer, pointer + size))
        pointer += size
    }
    return answer
}

module.exports = chunk;
