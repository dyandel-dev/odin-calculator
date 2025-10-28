let first_num;
let second_num;
let math_operation;
let user_input = "";

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

calculator_btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    user_input += String(event.target.textContent);

    calculator_output.textContent = user_input;
  });
});
