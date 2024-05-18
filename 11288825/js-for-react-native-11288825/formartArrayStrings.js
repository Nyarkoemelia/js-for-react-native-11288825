function modifyStrings(strings, numbers) {
    // Modifies each string based on its corresponding number:
    // - Capitalizes the entire string if the number is even.
    // - Converts the string to lowercase if the number is odd.
    const modifiedStrings = [];
    for (let i = 0; i < strings.length; i++) {
        const s = strings[i];
        const num = numbers[i];
        if (num % 2 === 0) {
            modifiedStrings.push(s.toUpperCase());
        } else {
            modifiedStrings.push(s.toLowerCase());
        }
    }
    return modifiedStrings;
}

// Example usage:
const inputStrings = ["hello", "world", "JavaScript"];
const inputNumbers = [2, 3, 4];
const result = modifyStrings(inputStrings, inputNumbers);
console.log(result); // Output: ['HELLO', 'world', 'JAVASCRIPT']
