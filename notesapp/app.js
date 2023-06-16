// const fs=require('fs');
// // fs.writeFileSync('notes.txt',"My first  file")
// fs.writeFileSync('notes1.html',"gvhhji")
// fs.appendFileSync("notes.txt","Divya Sree working as a  React Developer")
const chalk=require('chalk')
const getNotes=require('./utils')
const validator=require('validator');
const { log } = require('console');
const msg=getNotes()
console.log(msg);
console.log(validator.isEmail("edivyasree@gmail.com"));//true
console.log(validator.isEmail("edivyasree.gmail.com"));//false
console.log(validator.isURL("https://www.w3schools.com/css/"));
console.log(chalk.green('Hello'))
 console.log(chalk.green('Hello')+"World"+chalk.red('!'))
console.log(chalk.underline('Hello'));
console.log(chalk.blue.bgRed.bold("HelloWorld"));
console.log(chalk.bgRed("First"))
console.log((chalk.hex('#DEADED').bold('Bold gray!')));
log(chalk.rgb(128, 45, 67).underline('Underlined reddish color'));
log(chalk.green.inverse.bold("Success"))
log(chalk.inverse.red('Fjcvghjkl'))//Inverse is simmalar lo bgcolor

