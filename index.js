// global vars below
// initiate the node package
const rs = require("readline-sync");
let selectedOperator = "";
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
	rs.setDefaultOptions({
		limit: /[0-9/*\-\+]/,
		limitMessage: `invalid character, please follow the information above`,
	});
	if (!/[0-9/*\-\+]/.test(userInput)) {
		console.log("");
		console.log("");
		console.log(
			"please perform a math operation using the operator that you chose."
		);
		console.log("example:");
		console.log(
			`if you chose '+' then input an operation using the '+' ( 5 + 5 )`
		);
	}
	userInput = rs.question("Please input operation here: ");
	if (!/\s/.test(userInput)) {
		console.log("you must have space between characters, try again");
		getUserNumbers();
	}

	let userNumbersInput = userInput.match(/[0-9]/g);
	firstNum = Number(userNumbersInput[0]);
	secondNum = Number(userNumbersInput[1]);

	// selectedOperator =
	selectedOperator = userInput
		.split(" ")
		.map(function (v) {
			if (/[/*\-\+]/g.test(v)) {
				return v;
			}
		})
		.join("");

	console.log(
		"selected operator is: " +
			selectedOperator +
			" and its the typeof: " +
			typeof selectedOperator
	);
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
