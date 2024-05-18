# js-for-react-native-11288825
Creating arrayManipulation.js:
You need to create a JavaScript file named arrayManipulation.js.
Inside this file, you’ll write the following functions:
processArray: Takes an array of numbers as an argument and returns a new array where each even number is squared, and each odd number is tripled.
formatArrayStrings: This function will be added later (Task 2).
Adding formatArrayStrings Function (Task 2):
In the arrayManipulation.js file, you’ll implement the formatArrayStrings function.
This function takes two arrays as arguments:
An array of strings.
An array of numbers processed by the processArray function.
The function modifies each string based on its corresponding number:
Capitalize the entire string if the number is even.
Convert the string to lowercase if the number is odd.
Creating userInfo.js (Task 3):
Now, create a separate file named userInfo.js.
Inside this file, you’ll write the following function:
createUserProfiles: Takes an array of names (original names) and the array of modified names (from Task 2).
Returns an array of objects, each containing:
originalName: The original name from the first array.
modifiedName: The modified name (capitalized or lowercase) from the second array.
id: An auto-incremented ID starting from 1.
In summary, you’ll have three files:

arrayManipulation.js with processArray and formatArrayStrings.
userInfo.js with createUserProfiles