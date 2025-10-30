let first_num;
let second_num;
let math_operation;
let arithmetic_operation = "";

const calculator_output = document.querySelector(".calculator-output");
const calculator_btns = document.querySelectorAll(".calculator-btn");

function addNumber(first_num, second_num) {
  return first_num + second_num;
}

function subtractNumber(first_num, second_num) {
  return first_num - second_num;
}

function multiplyNumber(first_num, second_num) {
  return first_num * second_num;
}

function divideNumber(first_num, second_num) {
  return first_num / second_num;
}

function operate(first_num, math_operation, second_num) {
  switch (math_operation) {
    case "+":
      return addNumber(first_num, second_num);
      break;
    case "-":
      return subtractNumber(first_num, second_num);
      break;
    case "*":
      return multiplyNumber(first_num, second_num);
      break;
    case "/":
      return divideNumber(first_num, second_num);
      break;
    default:
      alert("Error!");
  }
}

function evaluateOperation(input) {
  if (input === ("+" || "-" || "*" || "/")) {
    math_operation = input;
  }
}

calculator_btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const current_value = event.target.textContent;

    evaluateOperation(String(current_value));

    arithmetic_operation += String(current_value);

    calculator_output.textContent = arithmetic_operation;
  });
});

function getNumberBeforeSymbol(arithmetic_operation) {
  let symbol = "[-*/]";

  let endIndex = arithmetic_operation.search(symbol);

  let numberBefore = arithmetic_operation.slice(0, endIndex);

  return parseFloat(numberBefore);
}

function getNumberAfterSymbol(arithmetic_operation) {
  let symbol = "[-*/]";

  let startIndex = arithmetic_operation.search(symbol);

  let numberAfter = arithmetic_operation.slice(startIndex + 1);

  return parseFloat(numberAfter);
}
