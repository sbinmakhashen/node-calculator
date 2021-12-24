// global vars below
// initiate the node package
const rs = require("readline-sync");
const operatorOptions = ["/", "*", "-", "+"];
let selectedOperator = "";

// Functions below
function generalQuestions() {
	let username = rs.question("What is your name? ");
	// explain to user
	console.log(
		"Hi " +
			username +
			", this program helps you perform math operations, please answer the questions below 👇 :)"
	);
	console.log("Your options are:");
	console.log(`" / " for division`);
	console.log(`" * " for multiplication`);
	console.log(`" - " for subtraction`);
	console.log(`" + " for addition`);
	selectedOperator = rs.question("What operation would you like to perform? ");
}
generalQuestions();

function errorHandling(userInput) {}
