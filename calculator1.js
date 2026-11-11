"use strict";

const readline = require("node:readline/promises");
const { stdin, stdout } = require("node:process");


function calculate(first, operator, second) {
	switch (operator) {
		case "+": return first + second;
		case "-": return first - second;
		case "*": return first * second;
		case "/":
			if (second === 0) throw new Error("Cannot divide by zero.");
			return first / second;
		default:
			throw new Error("Choose +, -, *, or /.");
	}
}

async function main() {
	const rl = readline.createInterface({ input: stdin, output: stdout });
	try {
		const first = Number(await rl.question("First number: "));
		const operator = (await rl.question("Operation (+, -, *, /): ")).trim();
		const second = Number(await rl.question("Second number: "));

		if (!Number.isFinite(first) || !Number.isFinite(second)) {
			throw new Error("Please enter valid numbers.");
		}

		console.log(`Result: ${calculate(first, operator, second)}`);
	} catch (error) {
		console.error(error.message);
		process.exitCode = 1;
	} finally {
		rl.close();
	}
}

main();
