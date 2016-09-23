/**
 * @author Sims, Nicolas (sableye.nico@gmail.com)
 * @version 0.0.1
 * @summary River Falls Homes Construction Company. || created: 09.23.2016
 * @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let fName, lName, knowSelf;

function main() {
    printIntro();
    setFName();
    setLName();
    printNameReaction();
    setKnowSelf();
    printKnowSelfReaction();
}

main();

function printIntro() {
    console.log('Speakest thou thine name, caller of your inner self. What is the name bestowed upon thee by thy family? What is the name given to thee by thy friends?\n');
}

function setFName() {
    fName = PROMPT.question('<<What is your first name, or nickname?>>\n>');
}

function setLName() {
    lName = PROMPT.question('<<What is your last name?>>\n>');
}

function printNameReaction() {
    console.log('So... you are the ' + lName + ' they call ' + fName + '. Curious...\n Now... do you know why I am here? Do you know who I am?\n I\'d imagine not, but why don\'t you tell me?');
}

function setKnowSelf() {
    knowSelf = PROMPT.question('<<(1) = I know who you are.>>\n<<(2) = I do not know you.>>\n<<(3) = I do not know you, nor do I care to.>>\n>');
}