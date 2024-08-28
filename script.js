const buttons = document.querySelectorAll(".key");
const output = document.querySelector(".output .result");
buttons.forEach((item) => {
  item.addEventListener("click", () => define(item.innerHTML));
});

let firstNumber = "";
let secondNumber = "";
let operator = "";

function define(value) {
  console.log(value);
  let strOut = output.innerHTML;
  switch (value) {
    case "C":
      clear();
      break;
    case ".":
      output.innerHTML += ".";
      break;
    default:
      if (isNaN(+value)) {
        if (value === "=") {
          firstNumber = math();
          operator = "";
          secondNumber = "";
          output.classList.remove("oper");
        } else {
          operator = value;
          output.classList.add("oper");
        }
      } else {
        if (operator !== "") {
          secondNumber.length < 6 ? (secondNumber += value) : "";
        } else {
          firstNumber.length < 6 ? (firstNumber += value) : "";
        }
      }
      break;
  }

  outputResult();
}

function math() {
  const a = +firstNumber;
  const b = +secondNumber;
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "/":
      return a / b;
    case "*":
      return a * b;
  }
}

function clear() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  output.classList.remove("oper");
  output.innerHTML = "";
}

function outputResult() {
  if (output.innerHTML.length < 14) {
    output.innerHTML = `${firstNumber} ${operator} ${secondNumber}`;
  } else {
    clear();
  }
}
