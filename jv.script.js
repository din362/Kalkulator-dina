let display = document.getElementById("display");

function appendNumber(number) {
  if (display.value === "0") {
    display.value = number.toString();
  } else {
    display.value += number.toString();
  }
}

function appendDot() {
  if (!display.value.includes(".")) {
    display.value += ".";
  }
}

function clearDisplay() {
  display.value = "0";
}

function chooseOperation(operation) {
  display.value += operation;
}

function appendFunction(func) {
  display.value += func + "(";
}

function appendParenthesis(parenthesis) {
  display.value += parenthesis;
}

function compute() {
  let input = display.value;

  try {
    // Trigonometric functions
    if (input.includes("sin(")) {
      let angle = parseFloat(input.slice(4, -1));
      display.value = Math.sin(angle * (Math.PI / 180)).toFixed(5);
      return;
    }
    if (input.includes("cos(")) {
      let angle = parseFloat(input.slice(4, -1));
      display.value = Math.cos(angle * (Math.PI / 180)).toFixed(5);
      return;
    }
    if (input.includes("tan(")) {
      let angle = parseFloat(input.slice(4, -1));
      display.value = Math.tan(angle * (Math.PI / 180)).toFixed(5);
      return;
    }

    // Logarithmic and exponential functions
    if (input.includes("log(")) {
      let value = parseFloat(input.slice(4, -1));
      display.value = Math.log10(value).toFixed(5);
      return;
    }
    if (input.includes("ln(")) {
      let value = parseFloat(input.slice(3, -1));
      display.value = Math.log(value).toFixed(5);
      return;
    }
    if (input.includes("exp(")) {
      let value = parseFloat(input.slice(4, -1));
      display.value = Math.exp(value).toFixed(5);
      return;
    }

    // Evaluate mathematical expressions
    display.value = eval(input);
  } catch {
    display.value = "Error";
  }
}


