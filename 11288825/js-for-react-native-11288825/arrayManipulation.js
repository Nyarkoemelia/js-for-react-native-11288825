function processArray(arr) {
    const result = [];
    for (const num of arr) {
        if (num % 2 === 0) {
            result.push(num ** 2); // Square even numbers
        } else {
            result.push(num * 3); // Triple odd numbers
        }
    }
    return result;
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5];
const processedArray = processArray(inputArray);
console.log(processedArray); // Output: [3, 4, 9, 16, 15]