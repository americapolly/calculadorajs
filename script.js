const result = document.getElementById("result");
const numbers = document.getElementsByClassName("number");
const operations = document.getElementsByClassName("operation");
const equal = document.getElementsByClassName("equal")[0];
const clear = document.getElementsByClassName("clear")[0];

let firstNumber = "";
let secondNumber = "";
let currentOperation = "";

for (let i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener("click", function() {
		if (currentOperation === "") {
			firstNumber += this.value;
			result.innerHTML = firstNumber;
		} else {
			secondNumber += this.value;
			result.innerHTML = secondNumber;
		}
	});
}

for (let i = 0; i < operations.length; i++) {
	operations[i].addEventListener("click", function() {
		if (currentOperation !== "") {
			const tempResult = calculateResult(currentOperation, parseFloat(firstNumber), parseFloat(secondNumber));
			firstNumber = tempResult.toString();
			secondNumber = "";
			result.innerHTML = firstNumber;
		}
		currentOperation = this.value;
	});
}

equal.addEventListener("click", function() {
	if (currentOperation !== "" && secondNumber !== "") {
		const tempResult = calculateResult(currentOperation, parseFloat(firstNumber), parseFloat(secondNumber));
		firstNumber = tempResult.toString();
		secondNumber = "";
		currentOperation = "";
		result.innerHTML = firstNumber;
	}
});

clear.addEventListener("click", function() {
	firstNumber = "";
	secondNumber = "";
	currentOperation = "";
	result.innerHTML = "0";
});

function calculateResult(operation, a, b) {
	let result = 0;
	switch (operation) {
		case "+":
			result = a + b;
			break;
		case "-":
			result = a - b;
			break;
		case "*":
			result = a * b;
			break;
		case "/":
			result = a / b;
			break;
	}
	return result;
}
