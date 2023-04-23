/* не безопасный код, т.к. используя eval(), злоумышленнику слишком легко запустить какой угодно код

const userInput = document.getElementById('userInput');
let expression = '';

const press = (num) =>{
    expression += num;
    userInput.value = expression;
}
const equal = () =>{
    userInput.value = eval(expression);
    expression = '';
}
const erase = () =>{
    expression = '';
    userInput.value = expression;
} */





let a = ''; //first number
let b = ''; //second number
let sign = '';  //sign operation
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];  // check number
const action = ['+', '-', '*', '/'];

//https://www.youtube.com/watch?v=Gquaiuj-VpU
// 4.00

const out = document.getElementById('userInput');

const clearAll = () =>{
    let a = ''; //first number
    let b = ''; //second number
    let sign = '';  //sign operation
    let finish = false; 
}

проверь очищается ли поля после чистки 4.45


