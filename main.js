/**
 * @author Sims, Nicolas (sableye.nico@gmail.com)
 * @version 0.0.1
 * @summary A great adventure || created: 09.23.2016
 * @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let chooseVar, adventure, sense, versatility, imagination, leadership, intelligence, morality, passion, hope, patience,
    friendliness, sympathy;
let fName, lName;

function main() {
    setAdventure();
    setSense();
    setVersatility();
    setImagination();
    setLeadership();
    setIntelligence();
    setMorality();
    setPassion();
    setHope();
    setPatience();
    setFriendliness();
    setSympathy();
    printIntro();
    setFName();
    setLName();
    printNameReaction();
    setKnowSelf();
    printKnowSelf();
    setKnowPurpose();
    printKnowPurpose();
    wipeScreen();
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

function setKnowSelf() {
    chooseVar = PROMPT.question('<<(1) = I know who you are.>>\n' +
        '<<(2) = I do not know you.>>\n' +
        '<<(3) = I do not know you, nor do I care to.>>\n' +
        '>');
    while (chooseVar != 1 && chooseVar != 2 && chooseVar != 3) {
        chooseVar = PROMPT.question('That is not an option.\n' +
            '<<(1) = I know who you are.>>\n' +
            '<<(2) = I do not know you.>>\n' +
            '<<(3) = I do not know you, nor do I care to.>>\n' +
            '>');
    }
}

function printKnowSelf() {
    if (chooseVar == 1) {
        console.log('\nFascinating.\n ' +
            'If you know me, then you must truly know yourself.\n ' +
            'An enviable quality.');
    } else if (chooseVar == 2) {
        console.log('\nFew people do.\n ' +
            'Pay it no mind.\n ' +
            'It is not a personal failing.\n ' +
            'You will, in time, learn of me.');
    } else if (chooseVar == 3) {
        console.log('\n...?\n ' +
            'I see.\n ' +
            'Then be warned, arrogant one...\n ' +
            'You will, in time, learn of me.');
    }
    console.log(' Doubtlessly, though, you do not know why I am here.\n ' +
        'Or why you are here, for that matter.\n ' +
        'Do you?');
}

function setKnowPurpose() {
    chooseVar = PROMPT.question('<<(1) = I am here to find that which has not been found.>>\n' +
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
    while (chooseVar != 1 && chooseVar != 2 && chooseVar != 3 && chooseVar != 4 && chooseVar != 5 && chooseVar != 6
    && chooseVar != 7 && chooseVar != 8 && chooseVar != 9 && chooseVar != 10 && chooseVar != 11
    && chooseVar != 12) {
        chooseVar = PROMPT.question('\nTo strike your own path is a worthy aim... but not now.\n' +
            '<<(1) = I am here to find that which has not been found.>>\n' +
            '<<(2) = I am here to bring sense to a crazed world.>>\n' +
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
    }
}

function printKnowPurpose() {
    console.log('\nFascinating. ');
    if (chooseVar == 1) {
        console.log(' I admire your sense of adventure.');
        setAdventure(10);
    } else if (chooseVar == 2) {
        console.log(' I admire your calmheadedness.');
        setSense(10);
    } else if (chooseVar == 3) {
        console.log(' You\'re more of a versatile jack, then.\n ' +
            'Admirable.');
        setVersatility(10);
    } else if (chooseVar == 4) {
        console.log(' A free thinker?\n ' +
            'Admirable.');
        setImagination(10);
    } else if (chooseVar == 5) {
        console.log(' A leader, are you?\n ' +
            'Admirable, but remember not every lion roars.');
        setLeadership(10);
    } else if (chooseVar == 6) {
        console.log(' Admirable, but remember somethings are best not known.');
        setIntelligence(10);
    } else if (chooseVar == 7) {
        console.log(' You seek justice?\n ' +
            'You will make enemies, but I find that admirable.');
        setMorality(10);
    } else if (chooseVar == 8) {
        console.log(' Your passion is clear to all who meet you.\n ' +
            'Admirable.');
        setPassion(10);
    } else if (chooseVar == 9) {
        console.log(' And, in the same fashion, your allies will empower you.\n ' +
            'Admirable.');
        setHope(10);
    } else if (chooseVar == 10) {
        console.log(' Such patience... admirable.');
        setPatience(10);
    } else if (chooseVar == 11) {
        console.log(' An admirable goal such as that will ensure you will never suffer alone.');
        setFriendliness(10);
    } else if (chooseVar == 12) {
        console.log(' To do so without expecting a reward is truly admirable.');
        setSympathy(10);
    }
    console.log(' However, it is with great sadness that I inform you we must now part.\n ' +
        'Not forever, not even for long, but I must begone--and you must too.\n ' +
        'When we meet again, you will possess knowledge beyond knowledge, and strength beyond strength.\n ' +
        'I await this occasion with bated breath. ');
}

//
//mechanicFunctions
//

function setAdventure(value) {
    if (adventure == null) {
        adventure = 10;
    } else {
        adventure += value;
    }
}

function setSense(value) {
    if (sense == null) {
        sense = 10;
    } else {
        sense += value;
    }
}

function setVersatility(value) {
    if (versatility == null) {
        versatility = 10;
    } else {
        versatility += value;
    }
}

function setImagination(value) {
    if (imagination == null) {
        imagination = 10;
    } else {
        imagination += value;
    }
}

function setLeadership(value) {
    if (leadership == null) {
        leadership = 10;
    } else {
        leadership += value;
    }
}

function setIntelligence(value) {
    if (intelligence == null) {
        intelligence = 10;
    } else {
        intelligence += value;
    }
}

function setMorality(value) {
    if (morality == null) {
        morality = 10;
    } else {
        morality += value;
    }
}

function setPassion(value) {
    if (passion == null) {
        passion = 10;
    } else {
        passion += value;
    }
}

function setHope(value) {
    if (hope == null) {
        hope = 10;
    } else {
        hope += value;
    }
}

function setPatience(value) {
    if (patience == null) {
        patience = 10;
    } else {
        patience += value;
    }
}

function setFriendliness(value) {
    if (friendliness == null) {
        friendliness = 10;
    } else {
        friendliness += value;
    }
}

function setSympathy(value) {
    if (sympathy == null) {
        sympathy = 10;
    } else {
        sympathy += value;
    }
}

function wipeScreen() {

}

function printPlayerStatus() {
    console.log('\n' +
        'Adventure      |' + adventure   + '|    Leadership      |' + leadership +   '|    Hope            |' + hope + '|\n' +
        'Sense          |' + sense       + '|    Intelligence    |' + intelligence + '|    Patience        |' + patience + '|\n' +
        'Versatility    |' + versatility + '|    Morality        |' + morality +     '|    Friendliness    |' + friendliness + '|\n' +
        'Imagination    |' + imagination + '|    Passion         |' + passion +      '|    Sympathy        |' + sympathy + '|');
}

//
//storyFunctions
//