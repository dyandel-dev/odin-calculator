let first_num;
let second_num;
let arithmetic_symbol = "";
let arithmetic_operation = "";

const calculator_output = document.querySelector(".calculator-output");
const calculator_btns = document.querySelectorAll(".calculator-btn");
const equals_btn = document.querySelector(".equals-btn");
const clear_btn = document.querySelector(".clear-btn");

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
  if (second_num === 0) {
    alert("You cannot divide with 0!");
    calculator_output.textContent = "";
    arithmetic_symbol = "";
    return (arithmetic_operation = "");
  }

  return first_num / second_num;
}

function operate(first_num, arithmetic_symbol, second_num) {
  switch (arithmetic_symbol) {
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
  const valid_operations = ["+", "-", "*", "/"];

  if (valid_operations.includes(input)) {
    if (arithmetic_symbol) {
      let result = equalsBtn(arithmetic_operation, arithmetic_symbol);

      arithmetic_symbol = input;
      arithmetic_operation = "";
      arithmetic_operation += String(result);

      return arithmetic_symbol;
    }

    return (arithmetic_symbol = input);
  }

  return null;
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
  let symbol = "[+*/-]";

  let endIndex = arithmetic_operation.search(symbol);

  let numberBefore = arithmetic_operation.slice(0, endIndex);

  return parseFloat(numberBefore);
}

function getNumberAfterSymbol(arithmetic_operation) {
  let symbol = "[+*/-]";

  let startIndex = arithmetic_operation.search(symbol);

  let numberAfter = arithmetic_operation.slice(startIndex + 1);

  return parseFloat(numberAfter);
}

function equalsBtn(arithmetic_operation, arithmetic_symbol) {
  first_num = getNumberBeforeSymbol(arithmetic_operation);
  second_num = getNumberAfterSymbol(arithmetic_operation);

  let result = operate(first_num, arithmetic_symbol, second_num);

  arithmetic_operation = Number(result.toFixed(2));

  calculator_output.textContent = arithmetic_operation;

  return result;
}

equals_btn.addEventListener("click", (event) => {
  equalsBtn(arithmetic_operation, arithmetic_symbol);
});

clear_btn.addEventListener("click", (event) => {
  arithmetic_operation = "";
  calculator_output.textContent = "";
});
