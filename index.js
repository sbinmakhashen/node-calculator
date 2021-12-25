// global vars below
// initiate the node package
const rs = require("readline-sync");
let selectedOperator,
	selectedOption = "";
let total,
	firstNum,
	secondNum = 0;
let userInput = "";
let goAgain = false;

let username = rs.question("What is your name? ");
console.log("");
// explain to user
console.log(
	"Hi " +
		username +
		", this program helps you perform math operations, please answer the questions below 👇 :)"
);
console.log(" ");

// Functions below
function startOperation() {
	const operatorOptions = /^[/*\-\+]$/;
	console.log("Your options are:");
	console.log(`" / " for division`);
	console.log(`" * " for multiplication`);
	console.log(`" - " for subtraction`);
	console.log(`" + " for addition`);
	console.log("");
	selectedOption = rs.question(
		"What kind of operation would you like to perform?, input one if the options above: "
	);

	// check if the user input invalid operation
	if (!operatorOptions.test(selectedOption)) {
		console.log("That is not a valid operation");
		console.log("Please try again!");
		console.log("");
		startOperation();
	} else {
		getUserInput();
	}
}
startOperation();

function getUserInput() {
	// modify the default options of this package
	rs.setDefaultOptions({
		limit: /[0-9/*\-\+]/,
		limitMessage: `invalid character, please follow the information above`,
	});
	// if the input does not include the math characters throw an error and try again
	if (!/[0-9/*\-\+]/.test(userInput)) {
		console.log("");
		console.log("");
		console.log(
			"please perform a math operation using the " +
				selectedOption +
				" operator"
		);
		console.log("");
		console.log("example:");
		console.log(
			`if you chose '+' then input an operation using the '+' ( 5 + 5 )`
		);
		console.log("");
	}
	userInput = rs.question("Please input operation here: ");

	firstNum = Number(userInput.split(" ")[0]);
	secondNum = Number(userInput.split(" ")[userInput.split(" ").length - 1]);

	// selectedOperator =
	selectedOperator = userInput
		.split(" ")
		.map(function (v) {
			if (/[/*\-\+]/g.test(v)) {
				return v;
			}
		})
		.join("");

	// error handling
	// if there is no space output an error and try again
	if (!/\s/.test(userInput)) {
		console.log("you must have space between characters, try again");
		getUserInput();
	}
	//trow an error when starting or ending operation with space
	else if (/^\s/.test(userInput) || /\s$/.test(userInput)) {
		console.log("You can't start or end the operation with space, try again");
		getUserInput();
	} else if (selectedOperator !== selectedOption) {
		console.log(
			"Expected to perform operation using the " +
				selectedOption +
				" but instead got the " +
				selectedOperator +
				" operator"
		);
		console.log("Please try again");
		console.log("");

		startOperation();
	}

	performOperation();
}

function wantToContinue() {
	goAgain = rs.keyInYN("Do you want to do another operation? ");

	while (goAgain) {
		startOperation();
	}
}

function performOperation() {
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
