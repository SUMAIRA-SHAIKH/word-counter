#! /usr/bin/env node

console.log("\n\t\t~~~~~~~~Word Counter~~~~~~~~~~\n")
// import the inquirer module which is a command line interfance for node.js
import inquirer from "inquirer";

//declear a constant "answer" and assign it to the result of inquirer.prompt function
const answers: {
    Sentence: string
}
// =  -> inquirer ka istimal karty way(excuation side)
= await inquirer.prompt([
{
 name: "Sentence",
 type: "input",
 message:"Enter your sentence to count the word:"
}
])

const words = answers.Sentence.trim().split(" ")
//const array = ['a','b']
//print the array of words to the console
console.log(words)
//print the word count  of the sentence to the console
console.log(`Your sentence word count is ${words.length}`)
