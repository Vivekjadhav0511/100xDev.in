
// const chalk = require('chalk')

import chalk from 'chalk'
import fs from 'fs'

console.log(chalk);

console.log(chalk.blue("Hello Javascript Node In Blue from Chalk"));


console.log(chalk.blue('Hello, world!'));
console.log(chalk.red.bold('This is an error message.'));
console.log(chalk.green.underline('This is a success message.'));
console.log(chalk.yellow("Hello Js"));

fs.readFile("a.txt","utf-8",function(error,data){
     console.log(data)
})



