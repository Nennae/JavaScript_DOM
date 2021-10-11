// Uppgift 1

let addTodoButton = document.querySelector("#addTodo");

let textInput = document.querySelector("input[name='todo']");

let todoList = document.querySelector("#todoList");

addTodoButton.addEventListener("click", () => {
    let listItem = document.createElement("li");
    listItem.innerText = textInput.value;
    todoList.appendChild(listItem);
    textInput.value = "";
})

// Upggift 2

let result = document.querySelector("#result");
let inputNumber1 = document.querySelector("#tal1");
let inputNumber2 = document.querySelector("#tal2");

// Värdena sätts/körs när vi klickar

let additionButton = document.querySelector("#additionButton");
additionButton.addEventListener("click", ()=> {
    let answer = document.createElement("h3");
   let number1 = parseInt(inputNumber1.value);
   let number2 = parseInt(inputNumber2.value);
   let sum = number1+number2;
   result.textContent = sum;
})

// 2a

let multiply = document.querySelector("#multiplicationButton");

multiply.addEventListener("click", ()=> {
   let number1 = parseInt(inputNumber1.value); // parseInt konverterar från string till int/number
   let number2 = parseInt(inputNumber2.value);
   let product = number1*number2;
   result.textContent = product;
})

// 2b

let subtract = document.querySelector("#subtractionButton");

subtract.addEventListener("click", () => {
    let number1 = parseInt(inputNumber1.value);
    let number2 = parseInt(inputNumber2.value);
// Lägg till logik
let difference = number1-number2;
if(difference < 0){
    alert("Resultatet blir mindre än 0. Vänligen skriv in giltigt värde.")
} else {
    result.innerHTML = difference;
}
})

// Uppgift 3

let coloredNumber = document.querySelector("#coloredNumber");
// keyup uppdaterar dynamiskt - körs när du släpper tangenten
coloredNumber.addEventListener("keyup", () =>{
    let userValue = coloredNumber.value;
    if(userValue < 4){
        coloredNumber.style.color = "red";
    } else if (userValue >= 4 && userValue <= 7){
        coloredNumber.style.color = "orange";
    } else if(userValue > 7 && userValue < 11) {
        coloredNumber.style.color = "green";
    }
})

