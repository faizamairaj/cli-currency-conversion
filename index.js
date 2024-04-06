#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    USD: 1, //Base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
console.log(chalk.bold.greenBright("\n\n*******************Welcome To Currency Converter!*************************"));
let condition = true;
while (condition = true) {
    let options = await inquirer.prompt([
        {
            type: "list",
            name: "option1",
            message: "Select One Option",
            choices: ["Currency Converter", "Quit"]
        }
    ]);
    if (options.option1 === 'Currency Converter') {
        let user_answer = await inquirer.prompt([
            {
                type: "list",
                name: "from",
                message: "Select Your Currency..?",
                choices: ["USD", "EUR", "GBP", "INR", "PKR"]
            },
            {
                type: "list",
                name: "to",
                message: "Select Your Conversion Currency..?",
                choices: ["USD", "EUR", "GBP", "INR", "PKR"]
            },
            {
                type: "number",
                name: "amount",
                message: "Enter Your conversion Amount"
            }
        ]);
        let fromAmount = currency[user_answer.from]; //exchange rate
        let toAmount = currency[user_answer.to]; //exchange rate
        let amount = user_answer.amount;
        let baseAmount = amount / fromAmount; //USD base currency //4
        let convertedAmount = baseAmount * toAmount;
        console.log(Math.floor(convertedAmount));
    }
    else {
        break;
    }
}
console.log(chalk.bold.greenBright("\n\n********************* Thankyou for using my app Good Bye!***********************************"));
