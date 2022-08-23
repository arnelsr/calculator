function add(number1, number2){
    return parseFloat(number1) + parseFloat(number2);
}
function subtract(number1, number2){
    return number1 - number2;
}
function multiply(number1, number2){
    return number1 * number2;
}
function divide(number1, number2){
    return number1 / number2;
}
function operate(operator, number1, number2) {
    switch (operator){
        case '/':
            if (parseFloat(number2)===0) {
                alert('Cannot divide by 0!');
                return 0;
            }
            return divide(number1,number2);
        case '+':
            return add(number1,number2);
        case '*':
            return multiply(number1,number2);
        case '-':
            return subtract(number1,number2);
         
    }
    return operator(number1, number2);
}
console.log(add(1,2));
console.log(subtract(1,2));
console.log(multiply(1,2));
console.log(divide(1,2));
console.log(operate('+',1,2));
let number1 = 0;
let number2 = 0;
let previousDisplay = '';
let operator = '';
let floatNumber1=0;
let floatNumber2=0;

function display(e) {
    //select input
    const input = document.querySelector('input');
    //determine button clicked
    switch (e.target.textContent) {
        //if operators reset previous display and store operator
        case '/':
        case '+':
        case '*':
        case '-':
            //if coming from = just return
            //if first time operator clicked store number as number 1
            if (number1===0 || operator === '=') {
                number1=previousDisplay;
            //else store as number 2 and call operate
            }else{
                number2=previousDisplay;
                //parsefloat
                floatNumber1 = parseFloat(number1);
                floatNumber2 = parseFloat(number2);
                //call operate
                input.value=operate(operator,floatNumber1,floatNumber2);
                //number1 as result
                number1=input.value;
            }
            previousDisplay='';
            operator=e.target.textContent;
            return;
        //if = call function
        case '=':
            //if number1 and 2 zeroes, just act like clear
            //if previous operator =, just clear
            if ((number1===0 && number2===0)||(operator==='=')) {
                previousDisplay='';
                operator='';
                input.value=0
                return;
            }
            number2=previousDisplay;
            // parsefloat and operate
            floatNumber1 = parseFloat(number1);
            floatNumber2 = parseFloat(number2);
            input.value=operate(operator,floatNumber1,floatNumber2);
            //call operate
            //input.value=operate(operator,number1,number2);
            //initialize variables
            number1=0;
            //number1=input.value;
            number2=0;
            //previousDisplay='';
            previousDisplay=input.value;
            //operator='';
            operator='=';
            //return
            return;
        //if clear, initialize everything
        case 'Clear':
            number1=0;
            number2=0;
            previousDisplay='';
            operator='';
            input.value=0
            return;

             
    }

    input.value = previousDisplay + e.target.textContent;
    previousDisplay=input.value;
}
//add click event for all buttons
const buttons=document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click',display);
    
});
