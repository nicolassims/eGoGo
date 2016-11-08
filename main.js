/**
 * @author Sims, Nicolas (sableye nico@gmail com)
 * @version 0 0 1
 * @summary A great adventure || created: 09 23 2016
 * @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let chooseVar, adventure, sense, dateMonth, dateDay;
let fName, lName, dateName;
let playerStats = [];

function main() {
    setDateMonth();
    setDateDay();
    setDayName();
    showPawn();
    setInitialPlayerStats();
    printIntro();
    setFName();
    setLName();
    printNameReaction();
    setKnowSelf();
    printKnowSelf();
    setKnowPurpose();
    printKnowPurpose();
    showPawn();
    day1Part1();

    //
        showPawn();
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
    wipeScreen();
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
        chooseVar = PROMPT.question('\nThat is not an option.\n' +
            '<<(1) = I know who you are.>>\n' +
            '<<(2) = I do not know you.>>\n' +
            '<<(3) = I do not know you, nor do I care to.>>\n' +
            '>');
    }
}

function printKnowSelf() {
    wipeScreen();
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
    wipeScreen();
    if (chooseVar == 1) {
        console.log('I admire your sense of adventure.');
    } else if (chooseVar == 2) {
        console.log('I admire your calmheadedness.');
    } else if (chooseVar == 3) {
        console.log('You\'re more of a versatile jack, then.\n ' +
            'Admirable.');
    } else if (chooseVar == 4) {
        console.log('A free thinker?\n ' +
            'Admirable.');
    } else if (chooseVar == 5) {
        console.log('A leader, are you?\n ' +
            'Admirable, but remember not every lion roars.');
    } else if (chooseVar == 6) {
        console.log('Admirable, but remember somethings are best not known.');
    } else if (chooseVar == 7) {
        console.log('You seek justice?\n ' +
            'You will make enemies, but I find that admirable.');
    } else if (chooseVar == 8) {
        console.log('Your passion is clear to all who meet you.\n ' +
            'Admirable.');
    } else if (chooseVar == 9) {
        console.log('And, in the same fashion, your allies will empower you.\n ' +
            'Admirable.');
    } else if (chooseVar == 10) {
        console.log('Such patience... admirable.');
    } else if (chooseVar == 11) {
        console.log('An admirable goal such as that will ensure you will never suffer alone.');
    } else if (chooseVar == 12) {
        console.log('To do so without expecting a reward is truly admirable.');
    }
    setPlayerStats(10);
    console.log(' However, it is with great sadness that I inform you we must now part.\n ' +
        'Not forever, not even for long, but I must begone--and you must too.\n ' +
        'When we meet again, you will possess knowledge beyond knowledge, and strength beyond strength.\n ' +
        'I await this occasion with bated breath. ');
    chooseVar = PROMPT.question('                      Press Enter to Continue\n>');
    process.stdout.write('\x1Bc');
}

//
//mechanicFunctions
//

function setDateMonth() {
    if (dateMonth == null) {
        dateMonth = 9;
    } else {
        dateMonth += 1;
    }
} //Increases dateMonth by one 

function setDateDay(value) {
    if (dateDay == null) {
        dateDay = 4;
    } else if (value != null) {
        dateDay = value;
    } else {
        dateDay += 1;
    }
} //Increases dateDay by one unless given a value 

function setDayName () {
    if (dateName == null || dateName == 'Saturday') {
        //dateName = 'Sunday';
        dateName = 'Tuesday';
    } else if (dateName == 'Sunday') {
        dateName = 'Monday';
    } else if (dateName == 'Monday') {
        dateName = 'Tuesday';
    } else if (dateName == 'Tuesday') {
        dateName = 'Wednesday';
    } else if (dateName == 'Wednesday') {
        dateName = 'Thursday';
    } else if (dateName == 'Thursday') {
        dateName = 'Friday';
    } else {
        dateName = 'Saturday';
    }
} //Moves the day up one 

function showPawn() {
    process.stdout.write('\x1Bc');
    console.log('\n' +
        '                                OOOOOOOOOO\n' +
        '                              OOOOOOOOOOOOOO');
    if (dateMonth >= 10 && dateDay >= 10) {
        console.log('     ' + dateMonth + '/' + dateDay + '                   OOOOOOOOOOOOOOOO');
    } else if (dateMonth >= 10 && dateDay < 10) {
        console.log('     ' + dateMonth + '/' + dateDay + '                    OOOOOOOOOOOOOOOO');
    } else if (dateMonth < 10 && dateDay >= 10) {
        console.log('     ' + dateMonth + '/' + dateDay + '                    OOOOOOOOOOOOOOOO');
    } else {
        console.log('     ' + dateMonth + '/' + dateDay + '                     OOOOOOOOOOOOOOOO');
    }
    if (dateName == 'Saturday') {
        console.log('     Saturday               O OOOOOOOOOOOOOO O');
    } else if (dateName == 'Sunday') {
        console.log('     Sunday                 O OOOOOOOOOOOOOO O');
    } else if (dateName == 'Monday') {
        console.log('     Monday                 O OOOOOOOOOOOOOO O');
    } else if (dateName == 'Tuesday') {
        console.log('     Tuesday                O OOOOOOOOOOOOOO O');
    } else if (dateName == 'Wednesday') {
        console.log('     Wednesday              O OOOOOOOOOOOOOO O');
    } else if (dateName == 'Thursday') {
        console.log('     Thursday               O OOOOOOOOOOOOOO O');
    } else {
        console.log('     Friday                 O OOOOOOOOOOOOOO O');
    }
    console.log(
        '                            OO  OOOOOOOOOO  OO\n' +
        '                            OOO  I      I  OOO\n' +
        '                             OOOOOOO  OOOOOOO\n' +
        '                               OOOOOOOOOOOO\n' +
        '  ###### ###### ######          OOOOOOOOOO      ###### ######  ##\n' +
        '  ###    ##     ##  ##          OOOOOOOOOO      ##     ##  ##  ##\n' +
        '  ###### ## ### ##  ## ###     OOOOOOOOOOOO     ## ### ##  ##  ##\n' +
        '  ###    ##  ## ##  ##        OOOOOOOOOOOOOO    ##  ## ##  ##\n' +
        '  ###### ###### ######         OOOOOOOOOOOO     ###### ######  ##\n' +
        '                               O  OOOOOO  O\n' +
        '                                O   OO   O \n' +
        '                                OOO    OOO \n' +
        '                              O OOOOOOOOOO O\n' +
        '                              O OOOOOOOOOO O\n' +
        '                             OO  OOOOOOOO  OO\n' +
        '                           OOOO  OOOOOOOO  OOOO\n' +
        '                          OOOOOO    OO    OOOOOO\n' +
        '                         OOOOOOOOO      OOOOOOOOOO\n' +
        '                       OOOOOOOOOOOOOOOOOOOOOOOOOOOOO\n');
    chooseVar = PROMPT.question('                          Press Enter to Continue\n>');
    process.stdout.write('\x1Bc');

} //Wipes screen, displays date

function setInitialPlayerStats() {
    for (let i = 0; i < 13; i++) {
        playerStats[i] = [];
        playerStats[i][1] = 10;
    }
    playerStats[0][0] = 'Courage';
    playerStats[0][2] = 'Fortitude';
    playerStats[0][4] = 'Spirit';
    playerStats[0][6] = 'Heart';
    playerStats[0][8] = 'Stat Total';
    playerStats[0][10] = 'Level';
    playerStats[1][0] = 'Adventure';
    playerStats[2][0] = 'Sense';
    playerStats[3][0] = 'Versatility';
    playerStats[4][0] = 'Imagination';
    playerStats[5][0] = 'Leadership';
    playerStats[6][0] = 'Intelligence';
    playerStats[7][0] = 'Morality';
    playerStats[8][0] = 'Passion';
    playerStats[9][0] = 'Hope';
    playerStats[10][0] = 'Patience';
    playerStats[11][0] = 'Friendliness';
    playerStats[12][0] = 'Sympathy';
}

function setPlayerStats(value) {
    playerStats[chooseVar][1] += value;
    playerStats[0][9] = playerStats[1][1] + playerStats[2][1] + playerStats[3][1] + playerStats[4][1] + playerStats[5][1] +
                        playerStats[6][1] + playerStats[7][1] + playerStats[8][1] + playerStats[9][1] + playerStats[10][1] +
                        playerStats[11][1] + playerStats[12][1];
    playerStats[0][11] = (playerStats[0][9]/10 - 11);
    playerStats[0][1] = (playerStats[1][1] + playerStats[5][1] + playerStats[9][1]) * (playerStats[0][11]/10);
    playerStats[0][3] = (playerStats[2][1] + playerStats[6][1] + playerStats[10][1]) * (playerStats[0][11]/10);
    playerStats[0][5] = (playerStats[3][1] + playerStats[7][1] + playerStats[11][1]) * (playerStats[0][11]/10);
    playerStats[0][7] = (playerStats[4][1] + playerStats[8][1] + playerStats[12][1]) * (playerStats[0][11]/10);
}

function wipeScreen() {
    process.stdout.write('\x1Bc');
}

function printPlayerStatus() {
    console.log('\n' +
        'Level          |' + Math.round(playerStats[0][11]) + '|    Stat Total      |' + Math.round(playerStats[0][9]) + '|\n' +
        'Adventure      |' + Math.round(playerStats[1][1]) + '|    Leadership      |' + Math.round(playerStats[5][1]) + '|    Hope            |' + Math.round(playerStats[9][1]) + '|\n' +
        'Sense          |' + Math.round(playerStats[2][1]) + '|    Intelligence    |' + Math.round(playerStats[6][1]) + '|    Patience        |' + Math.round(playerStats[10][1]) + '|\n' +
        'Versatility    |' + Math.round(playerStats[3][1]) + '|    Morality        |' + Math.round(playerStats[7][1]) + '|    Friendliness    |' + Math.round(playerStats[11][1]) + '|\n' +
        'Imagination    |' + Math.round(playerStats[4][1]) + '|    Passion         |' + Math.round(playerStats[8][1]) + '|    Sympathy        |' + Math.round(playerStats[12][1]) + '|\n' +
        '\nCOURAGE |' + Math.round(playerStats[0][1]) + '| FORTITUDE |' + Math.round(playerStats[0][3]) + '| SPIRIT |' + Math.round(playerStats[0][5]) + '| HEART |'
        + Math.round(playerStats[0][7]) +'|\n');
} //Displays player status

function displayZoe() {
    console.log('\n' +
        '                /\n' +
        '                \\\\\n' +
        '             _---^^--__\n' +
        '           /\'           \\\n' +
        '          /\'/\'"\\ |"\'\'\\   \\\n' +
        '          / |"███\\███"|^  |\n' +
        '          | \\    └     :| \\\n' +
        '          \\/*\\   __   |*   \\\n' +
        '           |  \\      /     |\n' +
        '  ╬╬       \\/\\/\'────\'\\/\\/\\/\n' +
        ' ╬╬╬         ____| V |___\n' +
        '\\   \\      / /    /       \\\n' +
        ' \\   \\    / /    /°    \\    \\\n' +
        '  \\   \\__/ |    |°      |   |\n' +
        '   \\       _\\    \\°    /    |\n' +
        '    \\_____/╬╬|\'\'\'\'\'\'\'\'\'    /\n' +
        '            ╬|____________/\n' +
        '             /   |°     |\n' +
        '            |    |°      \\\n' +
        '            |   /|\\°  ___ \\\n' +
        '            |  |≡|≡\\° UUU  \'\\\n' +
        '            |  |─┼──\\°       \\\n' +
        '            |  | |\\  \\°       \\\n');
    chooseVar = PROMPT.question('                          Press Enter to Continue\n>');
    process.stdout.write('\x1Bc');
}

//
//storyFunctions
//

function day1Part1() {
    console.log(
        '                                                                 \n' +
        '┌──────┐|  │  |              O┌────────────┐O      │  │  │       \n' +
        '|      ||     | ┌────┐      O┌┘   ANTIEM   └┐O     │     │       \n' +
        '|     ┌┘│  │  │┌┘    |       │     TOWN     │      │  │  │       \n' +
        '|     └┐│     │¦ <2> |       │     HALL     │      │     │       \n' +
        '|  <1> ¦│  │  │└─────┘       └──┐        ┌──┘      │  │  │ ┌────┐\n' +
        '|     ┌┘│     │ O             O └──┐  ┌──┘ O       │     │ |    |\n' +
        '└─────┘ │  │  │ O O O O        O O └~~┘ O O      O |  │  │┌┘    |\n' +
        '────────┘     └────────────────────┘  └────────────┘     │¦ <3> |\n' +
        ' ─     ─   ┴     ─      ─       ─    @  ─       ─     ┘  │└┐    |\n' +
        '───────────────────────────────────┐  ┌──────────────────┘ |    |\n' +
        '                                O  ┌~~┐  O                 └────┘\n' +
        '               O                ┌──┘  └──┐          O            \n' +
        '                              O │BUS     │ O                     \n' +
        '   O        O      O          O │STATION │ O             O       \n' +
        '                             OO └───~~───┘ OO                    \n' +
        '───────────────────────────────────┘  └──────────────────────────\n' +
        ' ─      ─       ─       ─       ─       ─       ─       ─      ─ \n' +
        '─────────────────────────────────────────────────────────────────\n' +
        '<1> = A Grand House\n' +
        '<2> = A Small House\n' +
        '<3> = McFriday\'s\n');
    chooseVar = PROMPT.question('Welcome to Antiem.\n ' +
        'Antiem is a perpetually hot, sleepy, and frankly boring town smack-dab in the middle of the state of ' +
        'Kansas.\n ' +
        'You\'ve been sent here by your parents to \"gain more appreciation for your American heritage.\"\n ' +
        'You have little interest in your American heritage, though you appreciate being able to temporarily leave ' +
        'your home country...\n ' +
        'As a certain group of \"gentlemen\" back home would rather like to \"rough you up.\"\n' +
        '                          Press Enter to Continue\n>');
    wipeScreen();
    console.log(
        '                                                                 \n' +
        '┌──────┐|  │  |              O┌────────────┐O      │  │  │       \n' +
        '|      ||     | ┌────┐      O┌┘   ANTIEM   └┐O     │     │       \n' +
        '|     ┌┘│  │  │┌┘    |       │     TOWN     │      │  │  │       \n' +
        '|     └┐│     │¦ <2> |       │     HALL     │      │     │       \n' +
        '|  <1> ¦│  │  │└─────┘       └──┐        ┌──┘      │  │  │ ┌────┐\n' +
        '|     ┌┘│     │ O             O └──┐  ┌──┘ O       │     │ |    |\n' +
        '└─────┘ │  │  │ O O O O        O O └~~┘ O O      O |  │  │┌┘    |\n' +
        '────────┘     └────────────────────┘  └────────────┘     │¦ <3> |\n' +
        ' ─     ─   ┴     ─      ─       ─    @  ─       ─     ┘  │└┐    |\n' +
        '───────────────────────────────────┐  ┌──────────────────┘ |    |\n' +
        '                                O  ┌~~┐  O                 └────┘\n' +
        '               O                ┌──┘  └──┐          O            \n' +
        '                              O │BUS     │ O                     \n' +
        '   O        O      O          O │STATION │ O             O       \n' +
        '                             OO └───~~───┘ OO                    \n' +
        '───────────────────────────────────┘  └──────────────────────────\n' +
        ' ─      ─       ─       ─       ─       ─       ─       ─      ─ \n' +
        '─────────────────────────────────────────────────────────────────\n' +
        '<1> = A Grand House\n' +
        '<2> = A Small House\n' +
        '<3> = McFriday\'s\n');
    chooseVar = PROMPT.question('Your parents have instructed you to find your Aunt and Uncle\'s house, at 108 ' +
        'Leo Street.\n ' +
        'From your position just north of the bus station, you can see the full length of Tin Street, where you are ' +
        'currently standing.\n ' +
        'To the west is a street leading to another street, which, in turn, leads to a couple of houses, one ' +
        'noticeably more grand than the other.\n ' +
        'To the east is that American paragon of fast food and fat people, McFriday\'s. You secretly love their ' +
        'food, but choose not to reveal that fact.\n ' +
        'Being half-American was already enough of a source of torment in your home country--you didn\'t want to ' +
        'encourage any stereotypes.\n' +
        '                          Press Enter to Continue\n>');
    wipeScreen();
    console.log(
        '                                                                 \n' +
        '┌──────┐|  │  |              O┌────────────┐O      │  │  │       \n' +
        '|      ||     | ┌────┐      O┌┘   ANTIEM   └┐O     │     │       \n' +
        '|     ┌┘│  │  │┌┘    |       │     TOWN     │      │  │  │       \n' +
        '|     └┐│     │¦ <2> |       │     HALL     │      │     │       \n' +
        '|  <1> ¦│  │  │└─────┘       └──┐        ┌──┘      │  │  │ ┌────┐\n' +
        '|     ┌┘│     │ O             O └──┐  ┌──┘ O       │     │ |    |\n' +
        '└─────┘ │  │  │ O O O O        O O └~~┘ O O      O |  │  │┌┘    |\n' +
        '────────┘     └────────────────────┘  └────────────┘     │¦ <3> |\n' +
        ' ─     ─   ┴     ─      ─       ─    @  ─       ─     ┘  │└┐    |\n' +
        '───────────────────────────────────┐  ┌──────────────────┘ |    |\n' +
        '                                O  ┌~~┐  O                 └────┘\n' +
        '               O                ┌──┘  └──┐          O            \n' +
        '                              O │BUS     │ O                     \n' +
        '   O        O      O          O │STATION │ O             O       \n' +
        '                             OO └───~~───┘ OO                    \n' +
        '───────────────────────────────────┘  └──────────────────────────\n' +
        ' ─      ─       ─       ─       ─       ─       ─       ─      ─ \n' +
        '─────────────────────────────────────────────────────────────────\n' +
        '<1> = A Grand House\n' +
        '<2> = A Small House\n' +
        '<3> = McFriday\'s\n');
    chooseVar = PROMPT.question('Now, where would you like to go?\n' +
        '<<(1) = Gawk at the grand house.>>\n' +
        '<<(2) = Scope out the smaller house.>>\n' +
        '<<(3) = Munch on something from McFriday\'s.>>\n' +
        '<<(4) = Back up to the bus station.\'s.>>\n' +
        '<<(5) = Take a hike to the town hall.\'s.>>\n' +
        '>');
    while (chooseVar != 1 && chooseVar != 2 && chooseVar != 3 && chooseVar != 4 && chooseVar != 5) {
        chooseVar = PROMPT.question('\nThat is not an option.\n' +
            '<<(1) = Gawk at the grand house.>>\n' +
            '<<(2) = Scope out the smaller house.>>\n' +
            '<<(3) = Munch on something from McFriday\'s.>>\n' +
            '<<(4) = Back up to the bus station.\'s.>>\n' +
            '<<(5) = Take a hike to the town hall.\'s.>>\n' +
            '>');
    }
    wipeScreen();
    while (chooseVar != 1) {
        if (chooseVar == 2) {
            console.log(
                '                                                                 \n' +
                '┌──────┐|  │  |              O┌────────────┐O      │  │  │       \n' +
                '|      ||     | ┌────┐      O┌┘   ANTIEM   └┐O     │     │       \n' +
                '|     ┌┘│  │  │┌┘    |       │     TOWN     │      │  │  │       \n' +
                '|     └┐│    @│¦ <2> |       │     HALL     │      │     │       \n' +
                '|  <1> ¦│  │  │└─────┘       └──┐        ┌──┘      │  │  │ ┌────┐\n' +
                '|     ┌┘│     │ O             O └──┐  ┌──┘ O       │     │ |    |\n' +
                '└─────┘ │  │  │ O O O O        O O └~~┘ O O      O |  │  │┌┘    |\n' +
                '────────┘     └────────────────────┘  └────────────┘     │¦ <3> |\n' +
                ' ─     ─   ┴     ─      ─       ─       ─       ─     ┘  │└┐    |\n' +
                '───────────────────────────────────┐  ┌──────────────────┘ |    |\n' +
                '                                O  ┌~~┐  O                 └────┘\n' +
                '               O                ┌──┘  └──┐          O            \n' +
                '                              O │BUS     │ O                     \n' +
                '   O        O      O          O │STATION │ O             O       \n' +
                '                             OO └───~~───┘ OO                    \n' +
                '───────────────────────────────────┘  └──────────────────────────\n' +
                ' ─      ─       ─       ─       ─       ─       ─       ─      ─ \n' +
                '─────────────────────────────────────────────────────────────────\n' +
                '<1> = A Grand House\n' +
                '<2> = A Small House\n' +
                '<3> = McFriday\'s\n');
            chooseVar = PROMPT.question('The house, already dwarfed by the far grander one just across the road, ' +
                'looks even shabbier up close.\n ' +
                'The wood it\'s made of is a dark red--grand, once, but having succumbed to the ravages of time ' +
                'long ago, it gives off a pungent scent.\n ' +
                'You could barely believe that someone could actually live there, but the sound of a large family is ' +
                'clearly audible through the thin, wooden walls.\n ' +
                'Through the window, you see a flash of green hair.\n ' +
                'You remember deviant hair colors were quite popular with certain groups back home, and quickly walk ' +
                'away.\n' +
                '                          Press Enter to Continue\n>');
        } else if (chooseVar == 3) {

        }
    }
}

//
//possiblyUsefulFunctions
//

/*
const JANUARY = 1, FEBRUARY = 2, MARCH = 3, APRIL = 4, MAY = 5, JUNE = 6, JULY = 7, AUGUST = 8, SEPTEMBER = 9,
    OCTOBER = 10, NOVEMBER = 11, DECEMBER = 12;
*/