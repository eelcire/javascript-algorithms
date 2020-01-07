// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let spare = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = spare;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        let spare = arr[min];
        arr[min] = arr[i];
        arr[i] = spare;
        
    }
    return arr;
}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr
    }

    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    let result = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    if (left[0]) {
        for (let thing of left) {
            result.push(thing)
        }
    } else {
        for (let thing of right) {
            result.push(thing)
        }
    }
    return result
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
