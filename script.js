let display = $('#display');

function appendToDisplay(value) {
  if (display.val() === '0' || display.val() === 'Error') {
    display.val(value);
  } else {
    display.val(display.val() + value);
  }
}

function clearDisplay() {
  display.val('0');
}

function backspace() {
  let current = display.val();
  if (current.length > 1) {
    display.val(current.slice(0, -1));
  } else {
    display.val('0');
  }
}

function calculate() {
  try {
    let result = eval(display.val().replace('÷', '/').replace('×', '*'));
    display.val(result % 1 === 0 ? result : result.toFixed(2)); // Rounds if necessary
  } catch (error) {
    display.val('Error');
  }
}
