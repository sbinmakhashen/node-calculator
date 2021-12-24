// global vars below
// initiate the node package
const rs = require("readline-sync");
const operatorOptions = /[/*\-\+]/g;
let selectedOperator = "";
let firstNum,
	secondNum = 0;

let username = rs.question("What is your name? ");
// explain to user
console.log(
	"Hi " +
		username +
		", this program helps you perform math operations, please answer the questions below 👇 :)"
);

// Functions below
function chooseOperator() {
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
		chooseOperator();
	} else {
		getUserNumbers();
	}
}
chooseOperator();

function getUserNumbers() {
	firstNum = rs.questionInt("Please enter the first number: ");
	secondNum = rs.questionInt("Please enter the second number: ");
}
