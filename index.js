// global vars below
// initiate the node package
const rs = require("readline-sync");
let selectedOperator = "";
let firstNum,
	secondNum = 0;
let goAgain = false;

let username = rs.question("What is your name? ");
// explain to user
console.log(
	"Hi " +
		username +
		", this program helps you perform math operations, please answer the questions below 👇 :)"
);
console.log(" ");

// Functions below

function startOperation() {
	const operatorOptions = /[/*\-\+]/g;
	console.log("Your options are:");
	console.log(`" / " for division`);
	console.log(`" * " for multiplication`);
	console.log(`" - " for subtraction`);
	console.log(`" + " for addition`);
	selectedOperator = rs.question("What operation would you like to perform? ");

	// check if the user input invalid operation
	if (!operatorOptions.test(selectedOperator)) {
		console.log("That is not a valid operation");
		console.log("Please try again!");
		console.log("");
		startOperation();
	} else {
		getUserNumbers();
	}
}
startOperation();

function getUserNumbers() {
	firstNum = rs.questionInt("Please enter the first number: ");
	secondNum = rs.questionInt("Please enter the second number: ");
	performOperation();
}

function wantToContinue() {
	goAgain = rs.keyInYN("Do you want to do another operation? ");

	while (goAgain) {
		startOperation();
	}
}
function performOperation() {
	let total = 0;
	switch (selectedOperator) {
		case "/":
			total = firstNum / secondNum;
			break;
		case "*":
			total = firstNum * secondNum;
			break;
		case "-":
			total = firstNum - secondNum;
			break;
		case "+":
			total = firstNum + secondNum;
			break;
		default:
			null;
	}

	console.log("The result is: " + total.toFixed(2));
	wantToContinue();
}
