// program to reverse a string
function reverseAndDisplay() {
    // Retrieve user input
    let userInput = document.getElementById('userInput').value;
      // Reverse the string
      let reversedString = reverseString(userInput);

      // Display the reversed string
      document.getElementById('result').innerText = "Reversed string: " + reversedString;
  }

function reverseString(str) {
    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
