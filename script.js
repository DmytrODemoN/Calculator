const buttons = document.querySelectorAll(".key");
const output = document.querySelector(".output .result");
buttons.forEach((item) => {
  item.addEventListener("click", () => define(item.innerHTML));
});

let firstNumber = "";
let secondNumber = "";
let operator = "";

function define(value) {
  switch (value) {
    case "C":
      clear();
      break;
    case ".":
      if (
        output.classList.contains("oper") &&
        !output.classList.contains("sec-dot")
      ) {
        secondNumber += ".";
        output.classList.add("sec-dot");
      } else if (!output.classList.contains("first-dot")) {
        firstNumber += ".";
        output.classList.add("first-dot");
      }
      break;
    default:
      if (isNaN(+value)) {
        if (value === "=") {
          firstNumber = math();
          clear(toCeil(+firstNumber));
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

  output.innerHTML = `${toCeil(+firstNumber)}${operator}${toCeil(
    +secondNumber
  )}`.slice(0, 14);
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

function clear(firstNum = "") {
  firstNumber = firstNum;
  secondNumber = "";
  operator = "";
  output.classList.remove("oper");
  output.classList.remove("first-dot");
  output.classList.remove("sec-dot");
  output.innerHTML = "";
}

function toCeil(number) {
  let result = Math.ceil(number * 100) / 100;
  return result === 0 ? "" : result;
}
