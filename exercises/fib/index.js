// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//     let list = [0, 1]
//     for (let i = 2; i <= n; i++) {
//         list[i] = list[i - 1] + list[i - 2]
//     }
//     return list[n]
// }

function memoize(fn) {
    let cache = {}
    return function(arg) {
        if (cache[arg]) {
            return cache[arg]
        }
        let result = fn(arg)
        cache[arg] = result
        return result
    }
}

function slowFib(n) {
    if (n < 2) {
        return n
    }
    return fib(n - 1) + fib(n - 2)
}

const fib = memoize(slowFib)

module.exports = fib;