#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const result = await inquirer_1.default.prompt([
    { message: "enter your first number", type: "number", name: "firstNumber" },
    { message: "enter your second number", type: "number", name: "secondNumber" },
    { message: "select one of the operator to perform your operation.",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
//condition
if (result.operator === "addition") {
    console.log(result.firstNumber + result.secondNumber);
}
else if (result.operator === "subtraction") {
    console.log(result.firstNumber - result.secondNumber);
}
else if (result.operator === "multiplication") {
    console.log(result.firstNumber * result.secondNumber);
}
else if (result.operator === "division") {
    console.log(result.firstNumber / result.secondNumber);
}
else {
    console.log("please select valid operator.");
}
