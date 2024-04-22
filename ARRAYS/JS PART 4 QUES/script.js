function deleteOccurrences(arr, num) {
    return arr.filter(item => item !== num);
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6, 2, 3];
const num = 2;
const result = deleteOccurrences(arr, num);
console.log(result); // Output: [1, 3, 4, 5, 6, 3]

