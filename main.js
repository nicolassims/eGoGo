/**
 * @author Sims, Nicolas (sableye.nico@gmail.com)
 * @version 0.0.1
 * @summary River Falls Homes Construction Company. || created: 09.23.2016
 * @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let fName, lName;

function main() {
    printIntro();
    setFName();
    setLName();
    printNameReaction();
    knowSelf();
    knowPurpose();
}

main();

function printIntro() {
    console.log('\nSpeakest thou thine name, caller of thy inner self.\n ' +
        'What is the name bestowed upon thee by thy family?\n ' +
        'What is the name given to thee by thy friends?');
}

function setFName() {
    fName = PROMPT.question('<<What is your first name, or nickname?>>\n>');
}

function setLName() {
    lName = PROMPT.question('\n<<What is your last name?>>\n>');
}

function printNameReaction() {
    console.log('\nSo... you are the ' + lName + ' they call ' + fName + '. Curious...\n ' +
        'Now... do you know why I am here? Do you know who I am?\n ' +
        'I\'d imagine not, but why don\'t you tell me?');
}

function knowSelf() {
    let knowSelf = PROMPT.question('<<(1) = I know who you are.>>\n' +
        '<<(2) = I do not know you.>>\n' +
        '<<(3) = I do not know you, nor do I care to.>>\n' +
        '>');
    while (knowSelf != 1 && knowSelf != 2 && knowSelf != 3) {
        knowSelf = PROMPT.question('That is not an option.\n' +
            '<<(1) = I know who you are.>>\n' +
            '<<(2) = I do not know you.>>\n' +
            '<<(3) = I do not know you, nor do I care to.>>\n' +
            '>');
    }
    printKnowSelf(knowSelf);
}

function printKnowSelf() {
    if (knowSelf == 1) {
        console.log('\nFascinating.\n ' +
            'If you know me, then you must truly know yourself.\n ' +
            'An enviable quality.\n ' +
            'Doubtlessly, though, you do not know why I am here.\n ' +
            'Or why you are here, for that matter.\n ' +
            'Do you?');
    } else if (knowSelf == 2) {
        console.log('\nFew people do.\n ' +
            'Pay it no mind.\n ' +
            'It is not a personal failing.\n ' +
            'You will, in time, learn of me.\n ' +
            'Doubtlessly, though, you do not know why I am here.\n ' +
            'Or why you are here, for that matter.\n ' +
            'Do you?');

    } else {
        console.log('\n...?\n ' +
            'I see.\n ' +
            'Then be warned, arrogant one...\n ' +
            'You will, in time, learn of me.\n ' +
            'Doubtlessly, though, you do not know why I am here.\n ' +
            'Or why you are here, for that matter.\n ' +
            'Do you?');
    }
}

function knowPurpose() {
    let knowSelf = PROMPT.question('<<(1) = I am here to find that which has not been found.>>\n' +
        '<<(2) = I am here to pacify that which is enraged.>>\n' +
        '<<(3) = I am here to do that which I can do.>>\n' +
        '<<(4) = I am here to think that which has not been thought.>>\n' +
        '<<(5) = I am here to command that which needs direction.>>\n' +
        '<<(6) = I am here to learn that which is not known.>>\n' +
        '<<(7) = I am here to control that which has no law.>>\n' +
        '<<(8) = I am here to enflame that which has no passion.>>\n' +
        '<<(9) = I am here to empower that which has lost all hope.>>\n' +
        '<<(10) = I am here to wait for that which will eventually come.>>\n' +
        '<<(11) = I am here to befriend that which suffers alone.>>\n' +
        '<<(12) = I am here to console that which feels great sadness.>>\n' +
        '>');
    while (knowSelf != 1 && knowSelf != 2 && knowSelf != 3) {
        knowSelf = PROMPT.question('That is not an option.\n<<(1) = I know who you are.>>\n<<(2) = I do not know you.>>\n<<(3) = I do not know you, nor do I care to.>>\n>');
    }
}