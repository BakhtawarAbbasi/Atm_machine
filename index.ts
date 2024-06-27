#! /usr/bin/env node
import inquirer from "inquirer";
interface ansType {
    userId: string,
    userPin: number,
    accountType: string,
    amount: number,
}

const answers: ansType = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Kindly Enter Your ID",
    },

    {
        type: "number",
        name: "userPin",
        message: "Kindly Enter Your PIN:"
    },

    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving", "Current Balance"],
        message: "Please Select Your Account Type:",
    },

    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Withdrawal", "Trasfer"],
        message: "Select Your Transaction Type",
        when(answers) {
            return answers.accountType === "Current";
        }
    },

    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Withdrawal", "Transfer"],
        message: "Select Your Transaction Type",
        when(answers) {
            return answers.accountType === "Saving";
        }
    },

    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Withdrawal", "Transfer"],
        message: "Select Your Transaction Type",
        when(answers) {
            return answers.accountType === "Current Balance";

        }
    },

    {
        type: "number",
        name: "amount",
        choices: [1000, 2000, 10000, 20000],
        message: "Select Your Amount",
        when(answers) {
            return answers.transactionType === "Fast Cash";
        }
    },

    {
        type: "number",
        name: "amount",
        message: "Enter the Withdrawal Amount:",
        when(answers) {
            return answers.transactionType === "Withdrawal";
        }
    },

    {
        type: "number",
        name: "amount",
        message: "Enter the Transfer Amount:",
        when(answers) {
            return answers.transactionType === "Transfer";
        }
    },

]);

if (answers.userId && answers.userPin) {
    const balance = Math.floor(Math.random() * 1000000);
    console.log("Current Balance");

    const enteredAmount = answers.amount;
    if (balance <= enteredAmount) {
        console.log("Insufficient Balance");
    } else {
        const remaining = balance - enteredAmount;
        console.log("Your remaining balance is", remaining);
    }
}