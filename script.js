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

let first_num;
let second_num;
let math_operation;

function operate(first_num, math_operation, second_num) {
    
    switch(math_operation) {
        case '+':
            return addNumber(first_num, second_num);
            break;
        case '-':
            return subtractNumber(first_num, second_num);
            break;
        case '*':
            return multiplyNumber(first_num, second_num);
            break;
        case '/':
            return divideNumber(first_num, second_num);
            break;
        default:
            alert("Error!")
    }
}
