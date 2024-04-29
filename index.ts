#! /usr/bin/env node

import inquirer from "inquirer";
import chalk  from "chalk";

console.log(chalk.bold.cyanBright("\n\t\t code with asia - word countr"));
console.log("=".repeat(60));
let  answer = await inquirer.prompt({
    type:"input",
    name: "words",
    message: "please enter your sentence"
})

let word_count = answer.words.trim().split("").lenth
console.log(`your sentence has ${word_count}words.`);
    
 
// let word= answer.sentence.trem().split("");
// console .log("=".repeat(60));
// console.log(chalk.bold("- sentence word:"));
// console.log("words");
// console.log(chalk.bold(`\n - word count: ${chalk.bold.redBright( word.lenth)}`));
// console.log("=".repeat(60));