#! /usr/bin/env node
import inquirer from "inquirer";
const result = await inquirer.prompt([
{message:"enter your first number",type:"number",name:"firstNumber"},
{message:"enter your second number",type:"number",name:"secondNumber"},
{message:"select one of the operator to perform your operation.",
type:"list",
name:"operator",
choices:["addition","subtraction","multiplication","division"],
},
])
//condition
if(result.operator ==="addition"){
   console.log(result.firstNumber + result.secondNumber) 
}else if (result.operator ==="subtraction"){
    console.log(result.firstNumber - result.secondNumber);   
}else if(result.operator ==="multiplication"){
    console.log(result.firstNumber * result.secondNumber);
}else if(result.operator ==="division"){
    console.log(result.firstNumber / result.secondNumber);
}else{
    console.log("please select valid operator.");

}
