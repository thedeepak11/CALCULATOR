// Get a reference to the calculator screen and buttons
const screen = document.getElementById("screen");
const buttons = document.querySelectorAll("button");

// Initialize the calculator input
let input = "";

// Add event listeners to each button
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonText = button.textContent;

        // Handle different button clicks
        switch (buttonText) {
            case "=":
                try {
                    // Evaluate the expression and display the result
                    input = eval(input);
                    screen.value = input;
                } catch (error) {
                    // Handle any errors
                    screen.value = "Error";
                }
                break;
            case "Clear":
                // Clear the calculator input and screen
                input = "";
                screen.value = "";
                break;
            case "del":
                // Delete the last character from the input
                input = input.slice(0, -1);
                screen.value = input;
                break;
            case "log":
                // Calculate the logarithm (base 10) of the input
                input = Math.log10(parseFloat(input));
                screen.value = input;
                break;
            case "^":
                // Handle exponentiation (e.g., 2^3)
                input += "**"; // Adding "**" for exponentiation
                screen.value = input;
                break;
            case "sin":
                // Calculate the sine of the input (assumed to be in radians)
                input = Math.sin(parseFloat(input));
                screen.value = input;
                break;
            case "cos":
                // Calculate the cosine of the input (assumed to be in radians)
                input = Math.cos(parseFloat(input));
                screen.value = input;
                break;
            default:
                // Append the button text to the input
                input += buttonText;
                screen.value = input;
                break;
        }
    });
});
