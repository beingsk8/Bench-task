
const calculateForm = document.querySelector("form");
const operationSelector = document.querySelector('#mySelect')
const number1 = document.getElementById('number1')
const number2 = document.getElementById('number2')
const messageText = document.querySelector('#message-1')
const messageText2 = document.querySelector('#message-2')

operationSelector.onchange = function run() {
    value = operationSelector.value;
    return value;
}

calculateForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const operation = value;
    messageText.textContent = 'calculating.........'
    messageText2.textContent = '';

    fetch(`http://localhost:3000/calculate?operation=${operation}&num1=${number1.value}&num2=${number2.value}`,{method:"POST"}).then((response) => {
        response.json().then((data) => {
            messageText.textContent = ''
            messageText2.textContent = data.response;
        })
    })
})