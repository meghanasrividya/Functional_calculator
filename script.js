// Get the display element using jQuery
let display = $('#display');

// Function to append a value to the display
function appendToDisplay(value) {
  // If display is '0' or 'Error', replace it with the new value
  if (display.val() === '0' || display.val() === 'Error') {
    display.val(value);
  } else {
    // Otherwise, append the new value to the current display value
    display.val(display.val() + value);
  }
}

// Function to clear the display
function clearDisplay() {
  display.val('0'); // Set display to '0'
}

// Function to remove the last character from the display
function backspace() {
  let current = display.val(); // Get the current display value
  if (current.length > 1) {
    // If there is more than one character, remove the last character
    display.val(current.slice(0, -1));
  } else {
    // If there is only one character, reset the display to '0'
    display.val('0');
  }
}

// Function to evaluate the expression on the display
function calculate() {
  try {
    // Evaluate the expression, replacing '÷' with '/' and '×' with '*'
    let result = eval(display.val().replace('÷', '/').replace('×', '*'));
    // If the result is an integer, display it as-is, otherwise round it to 2 decimal places
    display.val(result % 1 === 0 ? result : result.toFixed(2));
  } catch (error) {
    // If there's an error (e.g., invalid expression), display 'Error'
    display.val('Error');
  }
}
