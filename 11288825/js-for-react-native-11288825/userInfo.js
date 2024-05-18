function formatArrayStrings(stringArray, numberArray) {
    const result = [];

    for (let i = 0; i < stringArray.length; i++) {
        const str = stringArray[i];
        const num = numberArray[i];

        if (num % 2 === 0) {
            // Capitalize the entire string if the number is even
            result.push(str.toUpperCase());
        } else {
            // Convert the string to lowercase if the number is odd
            result.push(str.toLowerCase());
        }
    }

    return result;
}

// Example usage:
const strings = ["Hello", "World", "welcome to to Emelia's page"];
const numbers = [2, 3, 4];
const formattedStrings = formatArrayStrings(strings, numbers);
console.log(formattedStrings); // Output: ["HELLO", "world", "welcome to to Emelia's page"]
