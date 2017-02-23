/**
 * @author Sims, Nicolas (sableye nico@gmail com)
 * @version 0 0 1
 * @summary A great adventure || created: 09 23 2016
 * @todo
 */

"use strict";
const PROMPT = require('readline-sync'), IO = require(`fs`);

let chooseVar, adventure, sense, dateMonth, dateDay;
let fName, lName, dateName;
let playerStats = [], activePlayers = [], enemyTypes = [], enemyTeam = [], moveList = [];

function main() {
    setInitialPlayerStats();
    setMoveList();
    setEnemyTypes();
    battleScript();


    day1part1();
    day1part2();
    day1part3();
    //
        printPlayerStatus();
        showPawn();
}

main();

function printIntro() {
    console.log('Speakest thou thine name, caller of thy inner self.\n ' +
        'What is the name bestowed upon thee by thy family?\n ' +
        'What is the name given to thee by thy friends?');
}

function setFName() {
    fName = PROMPT.question('<<What is your first name, or nickname?>>\n>');
    while (fName == '') {
        fName = PROMPT.question('\nAnswer truthfully.\n' +
            '<<What is your first name, or nickname?>>\n>');
    }
}

function setLName() {
    lName = PROMPT.question('\n<<What is your last name?>>\n>');
    while (lName == '') {
        lName = PROMPT.question('\nAnswer truthfully.\n' +
            '<<What is your last name?>>\n>');
    }
}

function printNameReaction() {
    wipeScreen();
    console.log('So... you are the ' + lName + ' they call ' + fName + '. Curious...\n ' +
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
        console.log('Fascinating.\n ' +
            'If you know me, then you must truly know yourself.\n ' +
            'An enviable quality.');
    } else if (chooseVar == 2) {
        console.log('Few people do.\n ' +
            'Pay it no mind.\n ' +
            'It is not a personal failing.\n ' +
            'You will, in time, learn of me.');
    } else if (chooseVar == 3) {
        console.log('...?\n ' +
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

function setInitialActivePlayers() {
    activePlayers[0] = 1;
    activePlayers[1] = 0;
    activePlayers[2] = 0;
    activePlayers[3] = 0;
}

function setEnemyTypes() {
    let fileReader = IO.readFileSync(`data/enemylist.csv`, `utf8`);
    let tempArray = fileReader.toString().split(/\r?\n/);
    for (let i = 0; i < tempArray.length; i++) {
       enemyTypes.push(tempArray[i].toString().split(/,/));
    }
}

function setMoveList(){
    let fileReader = IO.readFileSync(`data/moveset.csv`, `utf8`);
    let tempArray = fileReader.toString().split(/\r?\n/);
    for (let i = 0; i < tempArray.length; i++) {
        moveList.push(tempArray[i].toString().split(/,/));
    }
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
        'Imagination    |' + Math.round(playerStats[4][1]) + '|    Passion         |' + Math.round(playerStats[8][1]) + '|    Sympathy        |' + Math.round(playerStats[12][1]) + '|\n\n' +
        'COURAGE |' + Math.round(playerStats[0][1]) + '| FORTITUDE |' + Math.round(playerStats[0][3]) + '| SPIRIT |' + Math.round(playerStats[0][5]) + '| HEART |' + Math.round(playerStats[0][7]) +'|\n');
    chooseVar = PROMPT.question('                          Press Enter to Continue\n>');
    process.stdout.write('\x1Bc');
} //Displays player status

function battleScript() {
    if (enemyTeam == null || enemyTeam == 0) {
        let numberEnemies = Math.floor((Math.random() * 12) + 1);
        console.log(numberEnemies + ' enemies appeared!');
        for (let i = 0; i < numberEnemies; i++) {
            enemyTeam[i] = Math.floor((Math.random() * enemyTypes.length) + 1) - 1;
            console.log('Enemy #' + (i + 1) + ' is a ' + enemyTypes[enemyTeam[i]][0] + '!');
        }
        for (let i = 0; i < enemyTeam.length; i++) {
            enemyTeam[i] = enemyTypes[enemyTeam[i]];
        }
        pause();
    } else {
        //Unique enemy appears here. FIX THIS
    }
    let moveCompatibility = 1;
    let activeMoves = [];
    let j = 0;
    for (let i = 0; i < moveList.length; i++) {
        moveCompatibility = 1;
        if (playerStats[1][1] < moveList[i][1] || playerStats[2][1] < moveList[i][2] || playerStats[3][1] <
            moveList[i][3] || playerStats[4][1] < moveList[i][4] || playerStats[5][1] < moveList[i][5] ||
            playerStats[6][1] < moveList[i][6] || playerStats[7][1] < moveList[i][7] || playerStats[8][1] <
            moveList[i][8] || playerStats[9][1] < moveList[i][9] || playerStats[10][1] < moveList[i][10] ||
            playerStats[11][1] < moveList[i][11] || playerStats[12][1] < moveList[i][12]) {
            moveCompatibility = 0;
        }
        if (moveCompatibility == 1) {
            activeMoves[j] = moveList[i];
            console.log(j + ' - ' + activeMoves[j][0]);
            j++;
        }
    }
    pause();
}

function pause() {
    chooseVar = PROMPT.question('                          Press Enter to Continue\n>');
    process.stdout.write('\x1Bc');
}

//
//storyFunctions
//

function day1part1() {
    setDateMonth();
    setDateDay();
    setDayName();
    showPawn();
    setInitialPlayerStats();
    setInitialActivePlayers();
    setEnemyTypes();
    setMoveList();
    printIntro();
    setFName();
    setLName();
    printNameReaction();
    setKnowSelf();
    printKnowSelf();
    setKnowPurpose();
    printKnowPurpose();
    showPawn();
}

function day1part2() {
    displayAntiem();
    chooseVar = PROMPT.question('Welcome to Antiem. You are the @.\n ' +
        'Antiem is a perpetually hot, sleepy, and frankly boring town smack-dab in the middle of the state of ' +
        'Kansas.\n ' +
        'You\'ve been sent here by your parents to \"gain more appreciation for your American heritage.\"\n ' +
        'You have little interest in your American heritage, though you appreciate being able to temporarily leave ' +
        'your home country...\n ' +
        'As a certain group of \"gentlemen\" back home would rather like to \"rough you up.\"\n' +
        '                          Press Enter to Continue\n>');
    wipeScreen();
    displayAntiem();
    chooseVar = PROMPT.question('Your parents have instructed you to find your Aunt and Uncle\'s house, at 108 ' +
        'Main Street.\n ' +
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
    displayAntiem();
    chooseVar = PROMPT.question('You decide you should probably find your Aunt and Uncle\'s house before the sun ' +
        'sets... \n ' +
        'Although the blazing heat indicates you\'re in no rush.\n ' +
        'You quickly dash down the length of Tin Street, turn onto Main Street, and spot a curious black cat staring ' +
        'at you coolly.\n ' +
        '                          Press Enter to Continue\n>');
    wipeScreen();
    displayOmo();
    chooseVar = PROMPT.question('The cat\'s eyes disturb you. Its glassy gaze MOCKS you.\n ' +
        'What will you do?\n' +
        '<<(1) = Intimidate it by puffing up your chest and growling.>>\n' +
        '<<(6) = Try to get close to it, and sneak a peak at its collar.>>\n' +
        '<<(11) = Walk up to it and give it a thorough petting.>>\n' +
        '<<(12) = Throw the poor thing a chunk of bread, or something.>>\n' +
        '>');
    while (chooseVar != 1 && chooseVar != 6 && chooseVar != 11 && chooseVar != 12) {
        chooseVar = PROMPT.question('\nThat is not an option.\n ' +
            'The cat\'s eyes disturb you. Its glassy gaze MOCKS you.\n ' +
            'What will you do?\n' +
            '<<(1) = Intimidate it by puffing up your chest and growling.>>\n' +
            '<<(6) = Try to get close to it, and sneak a peek at its collar.>>\n' +
            '<<(11) = Walk up to it and give it a thorough petting.>>\n' +
            '<<(12) = Throw the poor thing a chunk of bread, or something.>>\n' +
            '>');
    }
    setPlayerStats(1);
    wipeScreen();
    displayOmo();
    if (chooseVar == 1) {
        console.log('The cat is thoroughly unimpressed. But, really, what were you thinking?');
    } else if (chooseVar == 6) {
        console.log('It is entirely still until you are about a hand\'s width away.\n ' +
        'This allows you to see, easily, that it has no collar.');
    } else if (chooseVar == 11) {
        console.log('You give the cat a thorough petting.\n ' +
        'It doesn\'t purr, but it seems appreciative.');
    } else if (chooseVar == 12) {
        console.log('You do not have a chunk of bread--but it\'s the thought that counts.');
    }
    chooseVar = PROMPT.question('                          Press Enter to Continue\n>');
    wipeScreen();
    displayAntiem(1);
    chooseVar = PROMPT.question('The cat saunters away, leaving your life entirely unchanged.\n ' +
        'You watch it leave, and see it settle down in the shade of a large wooden house absolutely covered in ' +
        'vines.\n ' +
        'A sign on the house bears the name EMERALD PLACE.\n ' +
        'You vaguely remember your parents saying your aunt and uncle lived in a house called as such.\n ' +
        'You swiftly walk to the front door.\n ' +
        '                          Press Enter to Continue\n>');
    wipeScreen();
    displayEmeraldPlace();
    chooseVar = PROMPT.question('It\'s a beautiful house, you think. ' +
        'In your home country, you might call it \"Victorian architecture.\"\n ' +
        'You prepare to knock on the front door when...\n '+
        '                          Press Enter to Continue\n>');
    wipeScreen();
    displayEmeraldPlace(1);
    chooseVar = PROMPT.question('...The front door swings open.\n ' +
        'Standing in the doorframe is a large, cheerful-looking, middle-aged woman with deep red cheeks.\n ' +
        'She\'s beaming at you brightly, and her arms are already extended for a hug.\n ' +
        'This is your aunt, Aunt Dee. Auntie Dorothy, for long.\n ' +
        '                          Press Enter to Continue\n>');
    wipeScreen();
    console.log(
        '                                      _______\n' +
        '                                    _|       |_\n' +
        '                                   |    ...    |\n' +
        '                                   |    ...    |\n' +
        '                                    |__     __|\n' +
        '                                    ___|   |____\n' +
        '                                   /            \\\n' +
        '                                  /              \\\n' +
        '                                 |                |\n' +
        '                                 |                |\n' +
        '                                 |                |\n' +
        ' ┌────────────────┐              |                |\n' +
        ' |Aunt Dee        |              |                |\n' +
        '┌┴────────────────┴─────────────────────────────────────────────┐\n' +
        '|>Ah, there you are! I\'ve been waiting for you forever!         |\n' +
        '|>So, how are you? Your mother told me that you\'ve been...      |\n' +
        '|>Well, nevermind that. I\'m just glad you\'re finally here.      |\n' +
        '|>Come in, come in! You haven\'t seen me or your uncle in years! |\n' +
        '|>Ah, I remember the last time I saw you. You were knee-high to |\n' +
        '| a bedbug!                                                     |\n' +
        '└───────────────────────────────────────────────────────────────┘\n');
    chooseVar = PROMPT.question('                          Press Enter to Continue\n>');
    wipeScreen();
    displayEmeraldPlace();
    chooseVar = PROMPT.question('You follow your Aunt into the house.\n ' +
        'She yells, loudly, \"Ozzy! ' + fName + ' is here!\"\n ' +
        'A stern-looking man floats down the stairs.\n ' +
        'He has a pointed nose, a pointed pencil-moustache...\n ' +
        'And he\'s staring at you pointedly.\n ' +
        '                          Press Enter to Continue\n>');
    wipeScreen();
    console.log(
        '                                      _______\n' +
        '                                    _|       |_\n' +
        '                                   |    ...    |\n' +
        '                                   |    ...    |\n' +
        '                                    |__     __|\n' +
        '                                    ___|   |____\n' +
        '                                   /            \\\n' +
        '                                  /              \\\n' +
        '                                 |                |\n' +
        '                                 |                |\n' +
        '                                 |                |\n' +
        ' ┌────────────────┐              |                |\n' +
        ' |Ozzy?           |              |                |\n' +
        '┌┴────────────────┴─────────────────────────────────────────────┐\n' +
        '|>I\'ve been expecting you.                                      |\n' +
        '|>I\'ll have you know I have no fondness for children.           |\n' +
        '|>As long as you do not interfere in my work, I will not be too |\n' +
        '| obstructive, in turn.                                         |\n' +
        '|>Know, though, that I have no tolerance for meddlers.          |\n' +
        '|>Furthermore... my name is Uncle Ozymandias.                   |\n' +
        '└───────────────────────────────────────────────────────────────┘\n');
    chooseVar = PROMPT.question('                          Press Enter to Continue\n>');
    wipeScreen();
    console.log(
        '                                      _______\n' +
        '                                    _|       |_\n' +
        '                                   |    ...    |\n' +
        '                                   |    ...    |\n' +
        '                                    |__     __|\n' +
        '                                    ___|   |____\n' +
        '                                   /            \\\n' +
        '                                  /              \\\n' +
        '                                 |                |\n' +
        '                                 |                |\n' +
        '                                 |                |\n' +
        ' ┌────────────────┐              |                |\n' +
        ' |Uncle Ozymandias|              |                |\n' +
        '┌┴────────────────┴─────────────────────────────────────────────┐\n' +
        '|>You will refer to me as such.                                 |\n' +
        '|                                                               |\n' +
        '|                                                               |\n' +
        '|                                                               |\n' +
        '|                                                               |\n' +
        '|                                                               |\n' +
        '└───────────────────────────────────────────────────────────────┘\n');
    chooseVar = PROMPT.question('                          Press Enter to Continue\n>');
    wipeScreen();
    displayEmeraldPlace(1);
    chooseVar = PROMPT.question('Uncle Ozymandias throws on a coat and leaves the house.\n ' +
        '                          Press Enter to Continue\n>');
    wipeScreen();
    displayEmeraldPlace();
    chooseVar = PROMPT.question('Aunt Dee is staring at you, worriedly.\n ' +
        'She\'s playing with some sort of necklace, but it seems she\'s doing it just to keep her hands busy.\n ' +
        'Will you say something to diffuse the awkwardness?\n' +
        '<<(2) = \"Bad day? Happens to everyone.\">>\n' +
        '<<(4) = \"Well, I\'ll just have to think of something to make him like me, right?\">>\n' +
        '<<(8) = \"Someone needs to remove a stick from their butt.\">>\n' +
        '<<(9) = \"Oh, I\'m sure he\'ll warm up to me.\">>\n' +
        '>');
    while (chooseVar != 2 && chooseVar != 4 && chooseVar != 8 && chooseVar != 9) {
        chooseVar = PROMPT.question('\nThat is not an option.\n ' +
            'Aunt Dee is staring at you, worriedly.\n ' +
            'She\'s playing with some sort of necklace, but it seems she\'s doing it just to keep her hands busy.\n ' +
            'Will you say something to diffuse the awkwardness?\n' +
            '<<(2) = \"Bad day? Happens to everyone.\">>\n' +
            '<<(4) = \"Well, I\'ll just have to think of something to make him like me, right?\">>\n' +
            '<<(8) = \"Someone needs to remove a stick from their butt.\">>\n' +
            '<<(9) = \"Oh, I\'m sure he\'ll warm up to me.\">>\n' +
            '>');
    }
    setPlayerStats(1);
    wipeScreen();
    if (chooseVar == 2) {
        console.log(
            '                                      _______\n' +
            '                                    _|       |_\n' +
            '                                   |    ...    |\n' +
            '                                   |    ...    |\n' +
            '                                    |__     __|\n' +
            '                                    ___|   |____\n' +
            '                                   /            \\\n' +
            '                                  /              \\\n' +
            '                                 |                |\n' +
            '                                 |                |\n' +
            '                                 |                |\n' +
            ' ┌────────────────┐              |                |\n' +
            ' |Aunt Dee        |              |                |\n' +
            '┌┴────────────────┴─────────────────────────────────────────────┐\n' +
            '|>Yeah... sorry about your uncle.                               |\n' +
            '|>He\'s just very stressed.                                      |\n' +
            '|>And, um, has a very severe sense of humor.                    |\n' +
            '|>And has a multitude of bad experiences with children.         |\n' +
            '|>And got basically no sleep last night, because I was running  |\n' +
            '| around the house, getting ready for you, until midnight.      |\n' +
            '└───────────────────────────────────────────────────────────────┘\n');
        chooseVar = PROMPT.question('                          Press Enter to Continue\n>');
    } else if (chooseVar == 4) {
        console.log(
            '                                      _______\n' +
            '                                    _|       |_\n' +
            '                                   |    ...    |\n' +
            '                                   |    ...    |\n' +
            '                                    |__     __|\n' +
            '                                    ___|   |____\n' +
            '                                   /            \\\n' +
            '                                  /              \\\n' +
            '                                 |                |\n' +
            '                                 |                |\n' +
            '                                 |                |\n' +
            ' ┌────────────────┐              |                |\n' +
            ' |Aunt Dee        |              |                |\n' +
            '┌┴────────────────┴─────────────────────────────────────────────┐\n' +
            '|>That\'s a very positive attitude!                              |\n' +
            '|>But don\'t worry, you shouldn\'t have to do that.               |\n' +
            '|>I\'ll talk to him.                                             |\n' +
            '|>Although, um, perhaps you should also try your idea.          |\n' +
            '|>I mean, it can\'t really hurt.                                |\n' +
            '|>Unless you do something to piss him off more.                 |\n' +
            '└───────────────────────────────────────────────────────────────┘\n');
        chooseVar = PROMPT.question('                          Press Enter to Continue\n>');
        console.log(
            '                                      _______\n' +
            '                                    _|       |_\n' +
            '                                   |    ...    |\n' +
            '                                   |    ...    |\n' +
            '                                    |__     __|\n' +
            '                                    ___|   |____\n' +
            '                                   /            \\\n' +
            '                                  /              \\\n' +
            '                                 |                |\n' +
            '                                 |                |\n' +
            '                                 |                |\n' +
            ' ┌────────────────┐              |                |\n' +
            ' |Aunt Dee        |              |                |\n' +
            '┌┴────────────────┴─────────────────────────────────────────────┐\n' +
            '|>!                                                             |\n' +
            '|>...Pardon my French.                                          |\n' +
            '|                                                               |\n' +
            '|                                                               |\n' +
            '|                                                               |\n' +
            '|                                                               |\n' +
            '└───────────────────────────────────────────────────────────────┘\n');
        chooseVar = PROMPT.question('                          Press Enter to Continue\n>');
    } else if (chooseVar == 9) {
        console.log(
            '                                      _______\n' +
            '                                    _|       |_\n' +
            '                                   |    ...    |\n' +
            '                                   |    ...    |\n' +
            '                                    |__     __|\n' +
            '                                    ___|   |____\n' +
            '                                   /            \\\n' +
            '                                  /              \\\n' +
            '                                 |                |\n' +
            '                                 |                |\n' +
            '                                 |                |\n' +
            ' ┌────────────────┐              |                |\n' +
            ' |Aunt Dee        |              |                |\n' +
            '┌┴────────────────┴─────────────────────────────────────────────┐\n' +
            '|>That\'s a very positive attitude!                              |\n' +
            '|>I\'m sure you\'re right. Still, I\'ll talk to him.               |\n' +
            '|>He\'s not normally like that, you know.                        |\n' +
            '|>He\'s just a bit grumpy because I kept him awake all night     |\n' +
            '| getting ready for your arrival.                               |\n' +
            '|>Of course, he\'s always awake all night, and... oh, nevermind. |\n' +
            '└───────────────────────────────────────────────────────────────┘\n');
        chooseVar = PROMPT.question('                          Press Enter to Continue\n>');
    } else if (chooseVar == 8) {
        console.log(
            '                                      _______\n' +
            '                                    _|       |_\n' +
            '                                   |    ...    |\n' +
            '                                   |    ...    |\n' +
            '                                    |__     __|\n' +
            '                                    ___|   |____\n' +
            '                                   /            \\\n' +
            '                                  /              \\\n' +
            '                                 |                |\n' +
            '                                 |                |\n' +
            '                                 |                |\n' +
            ' ┌────────────────┐              |                |\n' +
            ' |Aunt Dee        |              |                |\n' +
            '┌┴────────────────┴─────────────────────────────────────────────┐\n' +
            '|>Er... well, he\'s not normally like this.                      |\n' +
            '|>...                                                           |\n' +
            '|>But I guess I can\'t really argue with you.                    |\n' +
            '|>Just, um, don\'t let him hear you say that, okay?              |\n' +
            '|>He got basically no sleep last night, because I was running   |\n' +
            '| around the house, getting ready for you, until midnight.      |\n' +
            '└───────────────────────────────────────────────────────────────┘\n');
        chooseVar = PROMPT.question('                          Press Enter to Continue\n>');
    }
    wipeScreen();
    console.log(
        '                                      _______\n' +
        '                                    _|       |_\n' +
        '                                   |    ...    |\n' +
        '                                   |    ...    |\n' +
        '                                    |__     __|\n' +
        '                                    ___|   |____\n' +
        '                                   /            \\\n' +
        '                                  /              \\\n' +
        '                                 |                |\n' +
        '                                 |                |\n' +
        '                                 |                |\n' +
        ' ┌────────────────┐              |                |\n' +
        ' |Aunt Dee        |              |                |\n' +
        '┌┴────────────────┴─────────────────────────────────────────────┐\n' +
        '|>Anyway, please, sit down!                                     |\n' +
        '|>You must be hungry.                                           |\n' +
        '|>Did you eat anything at the airport?                          |\n' +
        '|                                                               |\n' +
        '|                                                               |\n' +
        '|                                                               |\n' +
        '└───────────────────────────────────────────────────────────────┘\n');
    chooseVar = PROMPT.question('                          Press Enter to Continue\n>');
    wipeScreen();
    displayEmeraldPlace();
    chooseVar = PROMPT.question('What will you say?\n ' +
        'You did pick up a McFriday\'s at the airport, and you don\'t want to lie.\n' +
        '<<(3) = \"Sure, but I could eat some more.\">>\n' +
        '<<(5) = \"I could go for some more. Need some help?\">>\n' +
        '<<(7) = \"Yes. I apologize.\">>\n' +
        '<<(9) = \"I did, but I\'m sure whatever you\'ve made will be even better!\">>\n' +
        '>');
    while (chooseVar != 3 && chooseVar != 5 && chooseVar != 7 && chooseVar != 9) {
        chooseVar = PROMPT.question('\nThat is not an option.\n ' +
            'What will you say?\n ' +
            'You did pick up a McFriday\'s at the airport, and you don\'t want to lie.\n' +
            '<<(3) = \"Sure, but I could eat some more.\">>\n' +
            '<<(5) = \"I could go for some more. Need some help?\">>\n' +
            '<<(7) = \"Yes. I apologize.\">>\n' +
            '<<(9) = \"I did, but I\'m sure whatever you\'ve made will be even better!\">>\n' +
            '>');
    }
    setPlayerStats(1);
    wipeScreen();
    if (chooseVar == 3) {
        console.log(
            '                                      _______\n' +
            '                                    _|       |_\n' +
            '                                   |    ...    |\n' +
            '                                   |    ...    |\n' +
            '                                    |__     __|\n' +
            '                                    ___|   |____\n' +
            '                                   /            \\\n' +
            '                                  /              \\\n' +
            '                                 |                |\n' +
            '                                 |                |\n' +
            '                                 |                |\n' +
            ' ┌────────────────┐              |                |\n' +
            ' |Aunt Dee        |              |                |\n' +
            '┌┴────────────────┴─────────────────────────────────────────────┐\n' +
            '|>McFriday\'s?                                                   |\n' +
            '|>That greasy crap doesn\'t count as food.                       |\n' +
            '|>Sit down, and I\'ll give you a real American meal.             |\n' +
            '|>Bet you never got food this good at home, eh?                 |\n' +
            '|                                                               |\n' +
            '|                                                               |\n' +
            '└───────────────────────────────────────────────────────────────┘\n');
        chooseVar = PROMPT.question('                          Press Enter to Continue\n>');
    } else if (chooseVar == 5) {
        console.log(
            '                                      _______\n' +
            '                                    _|       |_\n' +
            '                                   |    ...    |\n' +
            '                                   |    ...    |\n' +
            '                                    |__     __|\n' +
            '                                    ___|   |____\n' +
            '                                   /            \\\n' +
            '                                  /              \\\n' +
            '                                 |                |\n' +
            '                                 |                |\n' +
            '                                 |                |\n' +
            ' ┌────────────────┐              |                |\n' +
            ' |Aunt Dee        |              |                |\n' +
            '┌┴────────────────┴─────────────────────────────────────────────┐\n' +
            '|>Very kind, sweetie, but no thank you.                         |\n' +
            '|>But...                                                        |\n' +
            '|>McFriday\'s?                                                   |\n' +
            '|>That greasy crap doesn\'t count as food.                       |\n' +
            '|>Sit down, and I\'ll give you a real American meal!             |\n' +
            '|>Bet you never got food this good at home, eh?                 |\n' +
            '└───────────────────────────────────────────────────────────────┘\n');
        chooseVar = PROMPT.question('                          Press Enter to Continue\n>');
    } else if (chooseVar == 7) {
        console.log(
            '                                      _______\n' +
            '                                    _|       |_\n' +
            '                                   |    ...    |\n' +
            '                                   |    ...    |\n' +
            '                                    |__     __|\n' +
            '                                    ___|   |____\n' +
            '                                   /            \\\n' +
            '                                  /              \\\n' +
            '                                 |                |\n' +
            '                                 |                |\n' +
            '                                 |                |\n' +
            ' ┌────────────────┐              |                |\n' +
            ' |Aunt Dee        |              |                |\n' +
            '┌┴────────────────┴─────────────────────────────────────────────┐\n' +
            '|>Oh, it\'s no issue whatsoever--it\'s perfectly fine.            |\n' +
            '|>That being said...                                            |\n' +
            '|>McFriday\'s?                                                   |\n' +
            '|>That greasy crap doesn\'t count as food.                       |\n' +
            '|>Sit down, and I\'ll give you a real American meal!             |\n' +
            '|>Bet you never got food this good at home, eh?                 |\n' +
            '└───────────────────────────────────────────────────────────────┘\n');
        chooseVar = PROMPT.question('                          Press Enter to Continue\n>');
    } else if (chooseVar == 9) {
        console.log(
            '                                      _______\n' +
            '                                    _|       |_\n' +
            '                                   |    ...    |\n' +
            '                                   |    ...    |\n' +
            '                                    |__     __|\n' +
            '                                    ___|   |____\n' +
            '                                   /            \\\n' +
            '                                  /              \\\n' +
            '                                 |                |\n' +
            '                                 |                |\n' +
            '                                 |                |\n' +
            ' ┌────────────────┐              |                |\n' +
            ' |Aunt Dee        |              |                |\n' +
            '┌┴────────────────┴─────────────────────────────────────────────┐\n' +
            '|>Oh, you\'re too kind.                                          |\n' +
            '|>And you\'re darn right.                                        |\n' +
            '|>McFriday\'s?                                                   |\n' +
            '|>That greasy crap doesn\'t count as food!                       |\n' +
            '|>Sit down, and I\'ll give you a real American meal.             |\n' +
            '|>Bet you never got food this good at home, eh?                 |\n' +
            '└───────────────────────────────────────────────────────────────┘\n');
        chooseVar = PROMPT.question('                          Press Enter to Continue\n>');
    }
    wipeScreen();
    displayEmeraldPlace();
    chooseVar = PROMPT.question('You ravenously consume the burger your Aunt Dee made for you.\n ' +
        'It is DELICIOUS.\n ' +
        'Time passes as you and Aunt Dee make small talk, discussing the weather, Antiem\'s history...\n ' +
        'And little else. Your Aunt is curiously evasive when it comes to her and her spouse.\n ' +
        '                          Press Enter to Continue\n>');
    wipeScreen();
    displayEmeraldPlace();
    chooseVar = PROMPT.question('At 19:30, Aunt Dee throws on a coat and leaves the house.\n ' +
        'She tells you she won\'t be home until early next morning.\n ' +
        'You wonder what she is doing--and where she is going--\n ' +
        'But she politely declines all requests for information, instead pointing you upstairs.\n ' +
        '                          Press Enter to Continue\n>');
    wipeScreen();
    console.log(
        '                                      _______\n' +
        '                                    _|       |_\n' +
        '                                   |    ...    |\n' +
        '                                   |    ...    |\n' +
        '                                    |__     __|\n' +
        '                                    ___|   |____\n' +
        '                                   /            \\\n' +
        '                                  /              \\\n' +
        '                                 |                |\n' +
        '                                 |                |\n' +
        '                                 |                |\n' +
        ' ┌────────────────┐              |                |\n' +
        ' |Aunt Dee        |              |                |\n' +
        '┌┴────────────────┴─────────────────────────────────────────────┐\n' +
        '|>Goodnight, Sweetie.                                           |\n' +
        '|>Your room is at the very top of the stairs, in the attic.     |\n' +
        '|>Yes, I know that sounds dodgy, but it\'s a very nice attic.    |\n' +
        '|>Trust me.                                                     |\n' +
        '|>I\'ll see you tomorrow morning, okay?                          |\n' +
        '|>Make sure to go to bed early.                                 |\n' +
        '└───────────────────────────────────────────────────────────────┘\n');
    chooseVar = PROMPT.question('                          Press Enter to Continue\n>');
    wipeScreen();
    console.log(
        '                                      _______\n' +
        '                                    _|       |_\n' +
        '                                   |    ...    |\n' +
        '                                   |    ...    |\n' +
        '                                    |__     __|\n' +
        '                                    ___|   |____\n' +
        '                                   /            \\\n' +
        '                                  /              \\\n' +
        '                                 |                |\n' +
        '                                 |                |\n' +
        '                                 |                |\n' +
        ' ┌────────────────┐              |                |\n' +
        ' |Aunt Dee        |              |                |\n' +
        '┌┴────────────────┴─────────────────────────────────────────────┐\n' +
        '|>You want to be well rested for school tomorrow!               |\n' +
        '|                                                               |\n' +
        '|                                                               |\n' +
        '|                                                               |\n' +
        '|                                                               |\n' +
        '|                                                               |\n' +
        '└───────────────────────────────────────────────────────────────┘\n');
    chooseVar = PROMPT.question('                          Press Enter to Continue\n>');
    wipeScreen();
    displayEmeraldPlace(1);
    chooseVar = PROMPT.question('Ah.\n ' +
        'Yes, you\'d forgotten tomorrow was your first day of school.\n ' +
        'You decide you should probably heed her advice, and go to bed, pronto.\n ' +
        '                          Press Enter to Continue\n>');

}

function day1part3() {
    displayBed();
    chooseVar = PROMPT.question('Your new room looks enormous, warm, and comfy.\n ' +
        'Also, in your new attic-room, are your chess sets, starwatching kits, action figures, and an easy-bake oven ' +
        'you still haven\'t thrown away.\n ' +
        'On the left, as you open the door, is your private bathroom.\n ' +
        'The only thing that interests you right now, however, is your bed.\n ' +
        'You eagerly approach it.\n ' +
        '                          Press Enter to Continue\n>');
    wipeScreen();
    displayHeart();
    chooseVar = PROMPT.question('And then you have a heart attack.\n ' +
        '\n ' +
        '\n ' +
        '\n ' +
        'Bummer.\n ' +
        '                          Press Enter to Continue\n>');
    wipeScreen();
    chooseVar = PROMPT.question('...\n');
    chooseVar = PROMPT.question('...\n');
    chooseVar = PROMPT.question('...\n');
    wipeScreen();
    chooseVar = PROMPT.question('Of course, your story doesn\'t end this way.\n ' +
        'You are the hero of this story, after all, and what kind of story would it be if the hero died of a heart ' +
        'attack?\n ' +
        'So, needless to say, you aren\'t actually dead.\n ' +
        'You are, however, somewhere you have never seen before.\n ' +
        'Bummer.\n ' +
        '                          Press Enter to Continue\n>');
}

//
//graphicsFunctions
//

function displayAntiem(position) {
    if (position == null || position == 0) {
        console.log(
            '    RESIDENTIAL AREA                            BUSINESS AREA    \n' +
            '┌──────┐|  │  |              O┌────────────┐O      │  │  │       \n' +
            '|  <1> ||     | ┌────┐      O┌┘   ANTIEM   └┐O     │     │       \n' +
            '|      ││  │  │┌┘    |       │     TOWN     │      │  │  │       \n' +
            '|    ┌─┘│     │¦ <2> |       │     HALL     │      │     │       \n' +
            '|    │  │  │  │└─────┘       └──┐        ┌──┘      │  │  │ ┌────┐\n' +
            '|    ¦::│     │ O             O └──┐  ┌──┘ O       │     │ |    |\n' +
            '└────┘  │  │  │ O O O O        O O └~~┘ O O      O |  │  │┌┘    |\n' +
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
    } else if (position == 1) {
        console.log(
            '    RESIDENTIAL AREA                            BUSINESS AREA    \n' +
            '┌──────┐|  │  |              O┌────────────┐O      │  │  │       \n' +
            '|  <1> ||     | ┌────┐      O┌┘   ANTIEM   └┐O     │     │       \n' +
            '|      ││  │  │┌┘    |       │     TOWN     │      │  │  │       \n' +
            '|    ┌─┘│     │¦ <2> |       │     HALL     │      │     │       \n' +
            '|    │  │  │  │└─────┘       └──┐        ┌──┘      │  │  │ ┌────┐\n' +
            '|    ¦::│@    │ O             O └──┐  ┌──┘ O       │     │ |    |\n' +
            '└────┘  │  │  │ O O O O        O O └~~┘ O O      O |  │  │┌┘    |\n' +
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
    } else if (position == 2) {
        console.log(
            '    RESIDENTIAL AREA                            BUSINESS AREA    \n' +
            '┌──────┐|  │  |              O┌────────────┐O      │  │  │       \n' +
            '|  <1> ||     | ┌────┐      O┌┘   ANTIEM   └┐O     │     │       \n' +
            '|      ││  │  │┌┘    |       │     TOWN     │      │  │  │       \n' +
            '|    ┌─┘│    @│¦ <2> |       │     HALL     │      │     │       \n' +
            '|    │  │  │  │└─────┘       └──┐        ┌──┘      │  │  │ ┌────┐\n' +
            '|    ¦::│     │ O             O └──┐  ┌──┘ O       │     │ |    |\n' +
            '└────┘  │  │  │ O O O O        O O └~~┘ O O      O |  │  │┌┘    |\n' +
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
    } else if (position == 3) {
        console.log(
            '    RESIDENTIAL AREA                            BUSINESS AREA    \n' +
            '┌──────┐|  │  |              O┌────────────┐O      │  │  │       \n' +
            '|  <1> ||     | ┌────┐      O┌┘   ANTIEM   └┐O     │     │       \n' +
            '|      ││  │  │┌┘    |       │     TOWN     │      │  │  │       \n' +
            '|    ┌─┘│     │¦ <2> |       │     HALL     │      │     │       \n' +
            '|    │  │  │  │└─────┘       └──┐        ┌──┘      │  │  │ ┌────┐\n' +
            '|    ¦::│     │ O             O └──┐  ┌──┘ O       │     │ |    |\n' +
            '└────┘  │  │  │ O O O O        O O └~~┘ O O      O |  │  │┌┘    |\n' +
            '────────┘     └────────────────────┘  └────────────┘    @│¦ <3> |\n' +
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
    }
}

function displayOmo() {
    console.log(
        ' /\\     /\\\n' +
        '{  \'---\'  }\n' +
        '{ -■   ■- }\n' +
        '>    V    <\n' +
        ' \\   ┴   \/\n' +
        '  \'-----\'____\n' +
        '  /--×--\\    \\_\n' +
        ' {       }\\  )_\\_   _\n' +
        ' |  \\_/  |/ /  \\_\\_/ )\n' +
        '  \\__/  /(_/     \\__/\n' +
        '    (__/\n');
}

function displayEmeraldPlace(position) {
    if (position == null || position == 0) {
        console.log(
            '                            _..-:-.._\n' +
            '                     _..--\'\'    :    \`\`--.._\n' +
            '              _..--\'\'           :           \`\`--.._\n' +
            '        _..-\'\'                  :                .\'\`\`--.._\n' +
            ' _..--\'\' \`.                     :              .\'         |\n' +
            '|          \`.              _.-\'\'|\`\`-._       .\'           |\n' +
            '|            \`.       _.-\'\'     |     \`\`-._.\'       _.-.  |\n' +
            '|   |\`-._      \`._.-\'\'          |  ;._     |    _.-\'   |  |\n' +
            '|   |    \`-._    |     _.-|     |  |  \`-.  |   |    _.-\'  |\n' +
            '|_   \`-._    |   |    |   |     |  \`-._ |  |   |_.-\'   _.-\'   ..\n' +
            '  \`-._   \`-._|   |    |.  |  _.-\'-._   \`\'  |       _.-\'   ..::::::..\n' +
            '      \`-._       |    |  _|-\'  *    \`-._   |   _.-\'   ..::::::::\'\'\n' +
            '          \`-._   |   _|-\'.::. \\|/  *    \`-.|.-\'   ..::::::::\'\'\n' +
            '              \`-.|.-\' *\`:::::::.. \\|/  *      ..::::::::\'\'\n' +
            '                     \\|/  *\`:::::::.. \\|/ ..::::::::\'\'\n' +
            '                         \\|/  *\`:::::::.::::::::\'\'\n' +
            '                             \\|/  *\`::::::::\'\'\n' +
            '                                 \\|/  \`:\'\'\n');
    } else if (position == 1) {
        console.log(
            '                            _..-:-.._\n' +
            '                     _..--\'\'    :    \`\`--.._\n' +
            '              _..--\'\'           :           \`\`--.._\n' +
            '        _..-\'\'                  :                .\'\`\`--.._\n' +
            ' _..--\'\' \`.                     :              .\'         |\n' +
            '|          \`.              _.-\'\'|\`\`-._       .\'           |\n' +
            '|            \`.       _.-\'\'     |     \`\`-._.\'       _.-.  |\n' +
            '|   |\`-._      \`._.-\'\'          |  ;._     |    _.-\'   |  |\n' +
            '|   |    \`-._    |     _.-|     |  |  \`-.  |   |    _.-\'  |\n' +
            '|_   \`-._    |   |    |O|.|     |  \`-._ |  |   |_.-\'   _.-\'   ..\n' +
            '  \`-._   \`-._|   |    |┼| |  _.-\'-._   \`\'  |       _.-\'   ..::::::..\n' +
            '      \`-._       |    |A└─|-\'  *    \`-._   |   _.-\'   ..::::::::\'\'\n' +
            '          \`-._   |    |-\':::. \\|/  *    \`-.|.-\'   ..::::::::\'\'\n' +
            '              \`-.|.-\' *\`:::::::.. \\|/  *      ..::::::::\'\'\n' +
            '                     \\|/  *\`:::::::.. \\|/ ..::::::::\'\'\n' +
            '                         \\|/  *\`:::::::.::::::::\'\'\n' +
            '                             \\|/  *\`::::::::\'\'\n' +
            '                                 \\|/  \`:\'\'\n');
    }
}

function displayBed() {
    console.log('\n' +
        ' .::\"\"-,                      .::\"\"-.\n' +
        '/::     \\                    /::     \\\n' +
        '|::     |   _..--\"\"\"\"--.._   |::     |\n' +
        '\'\\:.__ /  .\'              \'.  \\:.__ /\n' +
        ' ||____|.\'                  \'.||____|\n' +
        ' ||:.  |                       |:.  |\n' +
        ' ||:.  |                       |:.  |\n' +
        ' ||:.  |                       |:.  |\n' +
        ' ||:.  |  _..---\"````````\'---. |:.  |\n' +
        ' ||:.  | `                     |:.  |\n' +
        ' ||:.  |: :                .--._.-\"\"-;\n' +
        ' ||:.  |: : _.---``````---/    \'.   _.`.\n' +
        ' ||:.  | .-\'  _,\'```\'-...\'   _ .-\'.\'    \'-.\n' +
        ' ||:. .-\'   .\'        \'. . \'      \'.      `\'.\n' +
        ' ||: ;.\' .`\'        _. \'`\'-.         \'.   . \'\'-._\n' +
        ' ||:. :   \'.     .\'          \'.  . \' \' \'.`       \'._\n' +
        ' ||:. :    \'. .\'     .::\"\"-: .\'\'.        \' .   . \' \' :::\"\"-.\n' +
        ' ||:. \'     ..\' .    /::     \\    \'.        . \'.    /::     \\\n' +
        ' ||:  :  . .\'      \'.|::     |    _.:---\"\"---.._\'   |::     |\n' +
        ' ||.  ;  .:          \'\\:.__ /   .\'              \'.   \\:.__ /\n' +
        ' ||:  ;  : \'.       . ||____|_.\'                  \'._||____|\n' +
        ' ||:  ;__:   \'.   .\'  ||:.  |                        ||:.  |\n' +
        ' ||:___| \\     \'. :   ||:.  |                        ||:.  |\n' +
        ' [[____]  \'.     \'.-._||:.  |                        ||:.  |\n' +
        '            \'.    :   ||:.  |                        ||:.  |\n' +
        '              \'.  :   ||:.  |                        ||:.  |\n' +
        '                \'-:   ||:.  |                        ||:.  |\n' +
        '                   \'._||:.  |________________________||:.  |\n' +
        '                      ||:___|\'-.-\'-.-\'-.-\'-.-\'-.-\'-.-||:___|\n' +
        '                      [[____]                        [[____]\n');
}

function displayHeart() {
    console.log('\n' +
        '       ...e$e.$...e$                 ...e$e.$...e\n' +
        '     !$6lkasd!$6lkasd!$6l          !$6lkasd!$6lkasd!\n' +
        '   ;,a1wert;,a1wert;,a1wert     ;,a1wert;,a1wert;,a1we\n' +
        ' .asxzcvb.asxzcvb.asxzcvb.as   .asxzcvb.asxzcvb.asxzcvb.\n' +
        'qaswedfqas1wedfqas1wedfqas1w/dfqas1wedfqas1edfqas1ewdfqa\n' +
        ':lkjhgfdlkj:hgfdlkj:hgfdlkj://fdlkj:hgfdlkj:gfdhlkj:gfdhlk\n' +
        'edcvfr4edc3vfr4edc3vfr4edc///r4edc3vfr4edc3fr4vedc3fr4ved\n' +
        '234ewqa2341ewqa2341ewqa23////a2341ewqa2341wqa2341weqa234\n' +
        '[piuytr[piouytr[piouytr[/////r[piouytr[pioytru[pioytru[p\n' +
        '/xcvbnm/xczvbnm/xczvbn//////bnm/xczvbnm/xczbnmv/xczbnmv/x\n' +
        ' \`1qazxs\`1qazxs\`1wqazs\`1w//////1qazwxs1qa\`zws1qa\`zwsx1qa\`\n' +
        '  mznxbcvfmznxbcvfmzxbcnvfz//////zxvbmnfzcxvbmnfzcxvbmnf\n' +
        '   %t^y&ujm%t^y&ujm%^y&tuj%/////u%^yj&tum%^yj&tum%^yj&t\n' +
        '     )oiuytre)oiuytr)oieuyr////eur)oyieutr)oyieutr)oyi\n' +
        '      z.xcvgy7z.xcvg7z.yxcg///.yxc7zv.ygxc7zv.ygxc7z\n' +
        '        q[wertyuq[weryuq[we//yuq[wetyurq[wetyurq[w\n' +
        '           a;sdfghja;sdfghj//sdfghja;sdfghja;sdf\n' +
        '              qmprootiqmproo\\improotqimproot\n' +
        '                 mtu1qaz@mtu1\\a@mtuz1qa@m\n' +
        '                    !qwe$rty!/we$rty!q\n' +
        '                       -p=oiu\\t-p=o\n' +
        '                           as/fg\n' +
        '                             l\n');
}

function displayGeneric() {
    console.log(
        '     _______\n' +
        '   _|       |_\n' +
        '  |    ...    |\n' +
        '  |    ...    |\n' +
        '   |__     __|\n' +
        '   ___|   |____\n' +
        '  /            \\\n' +
        ' /              \\\n' +
        '|                |\n' +
        '|                |\n' +
        '|                |\n' +
        '|                |\n' +
        '|                |\n' +
        '|                |\n' +
        '|                |\n' +
        '|                |\n' +
        '|                |\n' +
        '|                |\n');
}

function displayZoe() {
    console.log(
    '             _---^^--.__\n' +
    '           /\'           \\               \n' +
    '          /\'/\'\"\\ |\"\'\'\\   \\                \n' +
    '          / |\"███\\███\"|^  |               \n' +
    '          | \\    └     :| \\               \n' +
    '          \\/*\\        |*   \\              \n' +
    '          /   \\  ^   /     |              \n' +
    '  ╬╬     |_\\/\\/\'────|_/\\/\\/               \n' +
    ' ╬╬╬         ____| V |___               \n' +
    '\\   \\      / /    /       \\               \n' +
    ' \\   \\    / /    /°    \\    \\               \n' +
    '  \\   \\__/ |    |°      |   |               \n' +
    '   \\       _\\    \\°    /    |               \n' +
    '    \\_____/╬╬|\'\'\'\'\'\'\'\'\'    /              \n' +
    '            ╬|____________/               \n' +
    '             /   |°     |               \n' +
    '            |    |°      \\                \n' +
    '            |   /|\\°  ___ \\               \n' +
    '            |  |≡|≡\\° UUU \'\\            \n' +
    '            |  |─┼─\\°       \\              \n' +
    '            |  | |  \\°       \\             \n');
    chooseVar = PROMPT.question('                          Press Enter to Continue\n>');
    process.stdout.write('\x1Bc');
}

function displayDaniela() {
    console.log(
        '      ~~(^^^^)~~\n' +
        '    (           )\n' +
        '  (  (_(_(_(_(_  )\n' +
        '  (  |  |   |  (  )\n' +
        '   ( |          (   )\n' +
        ' (    \\ ´      (    )\n' +
        '(      \\  -  (      )\n' +
        '  (_____\'──── (____)\n' +
        '     ____|   |______\n' +
        '    //\\_\\    /_/    \\\n' +
        '   //  __\\┌┐/__      \\\n' +
        '  ||   \\\./└┘\\\./      |\n' +
        '  | \\__    \\__   |   |\n' +
        '  |  |           |   |\n' +
        '  |  |           |   |\n' +
        '  |__|═══════════|___|\n' +
        ' |  /____        |    |\n' +
        ' | | |MF|        |   °|\n' +
        ' |_| └──┘        |____|\n' +
        '   |                 |\n' +
        '   |                 |\n');
    chooseVar = PROMPT.question('                          Press Enter to Continue\n>');
    process.stdout.write('\x1Bc');
}

function displayMcFriday(position) {
    if (position == null || position == 0) {
        console.log(
            '                        ┌──────────────────────────────┐\n' +
            '                        │  ╔═══╗     ╔═══╗     ╔═══╗   |\n' +
            '                        │ 0║   ║0   0║   ║0   0║   ║0  │\n' +
            '                        │ 0║   ║0   0║   ║0   0║   ║0  |\n' +
            '                        │  ╚═══╝     ╚═══╝     ╚═══╝   │\n' +
            '                 ┌──────┘                              |\n' +
            '                 |                                     │\n' +
            '                 ¦                                     |\n' +
            '                 ¦                                     |\n' +
            '                 ¦        @                            |\n' +
            '                 ¦                                     |\n' +
            '                 |                                     |\n' +
            '                 └──────┐            0    0    0    0  |\n' +
            '                        |         ┌──────────────┬─┬───┤\n' +
            '                        ├┐      0 | ┌────────────┴─┴───┤\n' +
            '                        │|)       | |     D    0       ¦\n' +
            '                        │|°     0 | |                  ¦\n' +
            '                        └┴────────┴─┴──────────────────┘\n');
    } else if (position == 1) {
        console.log(
            '                        ┌──────────────────────────────┐\n' +
            '                        │  ╔═══╗     ╔═══╗     ╔═══╗   |\n' +
            '                        │ 0║   ║0   0║   ║0   0║   ║0  │\n' +
            '                        │ 0║   ║0   0║   ║0   0║   ║0  |\n' +
            '                        │  ╚═══╝     ╚═══╝     ╚═══╝   │\n' +
            '                 ┌──────┘                              |\n' +
            '                 |                                     │\n' +
            '                 ¦                                     |\n' +
            '                 ¦                                     |\n' +
            '                 ¦                                     |\n' +
            '                 ¦                                     |\n' +
            '                 |                                     |\n' +
            '                 └──────┐            0    @    0    0  |\n' +
            '                        |         ┌──────────────┬─┬───┤\n' +
            '                        ├┐      0 | ┌────────────┴─┴───┤\n' +
            '                        │|)       | |     D    0       ¦\n' +
            '                        │|°     0 | |                  ¦\n' +
            '                        └┴────────┴─┴──────────────────┘\n');
    } else if (position == 2) {
        console.log(
            '                        ┌──────────────────────────────┐\n' +
            '                        │  ╔═══╗     ╔═══╗     ╔═══╗   |\n' +
            '                        │ 0║   ║0   0║   ║0   0║   ║0  │\n' +
            '                        │ 0║   ║0   0║   ║0   0║   ║0  |\n' +
            '                        │  ╚═══╝     ╚═══╝     ╚═══╝   │\n' +
            '                 ┌──────┘                              |\n' +
            '                 |                                     │\n' +
            '                 ¦                                     |\n' +
            '                 ¦                                     |\n' +
            '                 ¦                                     |\n' +
            '                 ¦                                     |\n' +
            '                 |                                     |\n' +
            '                 └──────┐            0    @    0    0  |\n' +
            '                        |         ┌──────────────┬─┬───┤\n' +
            '                        ├┐      0 | ┌────────────┴─┴───┤\n' +
            '                        │|)       | |     0    0       ¦\n' +
            '                        │|°     0 | |                  ¦\n' +
            '                        └┴────────┴─┴──────────────────┘\n');
    }
}

function displayDream(position) {
    if (position == null || position == 0) {
        console.log(
            ' __________________________________________________________________________________________\n' +
            '|         |                                                                     |          |\n' +
            '|         |           ╬                           ╬                             |          |\n' +
            '|         |                                                                     |          |\n' +
            '|      ║  |                                                                 ╬   |    ║     |\n' +
            '|   ║     |                             ╬                                       |          |\n' +
            '|         |               ╬                              ╬                      |          |\n' +
            '|         |                                                                     |  ║       |\n' +
            '|         |                                                          ╬          |       ║  |\n' +
            '|       ║ |                                                                     |          |\n' +
            '|         |                           ╬                                         |          |\n' +
            '|    ║    |             ╬                                                       |          |\n' +
            '|         |                                                                     |  ║       |\n' +
            '|         |                                                  ╬                  |          |\n' +
            '|         |                                     ╬                               |          |\n' +
            '|         |      ╬                                                              |          |\n' +
            '|         |                                                             ╬       |       ║  |\n' +
            '|       ║ |_____________________________________________________________________|  ║       |\n' +
            '|  ║      /                                                                      \\         |\n' +
            '|        /                                              ┘                         \\        |\n' +
            '|       /   └          └                                              └            \\       |\n' +
            '|      /                                                                            \\   ║  |\n' +
            '|  ║  /                         ┘                        ┘                           \\     |\n' +
            '|    /                                                                                \\    |\n' +
            '|   /                                      └                                           \\   |\n' +
            '|  /            └                                                             └         \\  |\n' +
            '| /                                                           ┘                          \\ |\n' +
            '|/                        ┘                                                               \\|\n' +
            '|__________________________________________________________________________________________|\n');
    } else if (position == 1) {
        console.log(
            ' __________________________________________________________________________________________\n' +
            '|                          /                                    \\     ║          ║         |\n' +
            '|    ║            ║       /                  └        ┘          \\                         |\n' +
            '|                        /       └                                \\                        |\n' +
            '|         ║             /                                          \\      ║        ║       |\n' +
            '|                      /                      └                     \\                      |\n' +
            '|                     /                  ┘                           \\                     |\n' +
            '|     ║              /                                                \\                    |\n' +
            '|                   /            └                                     \\        ║          |\n' +
            '|                  /                             └                      \\                  |\n' +
            '|    ║     ║      /                     ┘                   └            \\                 |\n' +
            '|                /                                                        \\           ║    |\n' +
            '|               /         └                                                \\  ║            |\n' +
            '|      ║       /                                                            \\              |\n' +
            '|             /  └                        └                                  \\             |\n' +
            '|            /                                               └                \\     ║      |\n' +
            '|           /           ┘                                                      \\           |\n' +
            '|  ║       /                                                                    \\          |\n' +
            '|         /                            ┘                                         \\         |\n' +
            '|        /                                              ┘                         \\        |\n' +
            '|       /   └          └                                              └            \\   ║   |\n' +
            '|   ║  /                                                                            \\      |\n' +
            '|     /                         ┘                        ┘                           \\     |\n' +
            '|    /                                                                                \\    |\n' +
            '|   /                                      └                                           \\   |\n' +
            '|  /            └                                                             └         \\  |\n' +
            '| /                                                           ┘                          \\ |\n' +
            '|/                        ┘                                                               \\|\n' +
            '|__________________________________________________________________________________________|\n');
    } else if (position == 2) {
        console.log(
            ' __________________________________________________________________________________________\n' +
            '|         |                /                                   \\                |          |\n' +
            '|         |   ║       ║   /                        └            \\    ║          |          |\n' +
            '|         |              /                                       \\              |          |\n' +
            '|      ║  |         ║   /                                         \\         ║   |    ║     |\n' +
            '|   ║     |    ║       /                 ┘                         \\            |          |\n' +
            '|         |           /    └                              ┘         \\           |          |\n' +
            '|         |      ║   /                                               \\   ║      |  ║       |\n' +
            '|         |         /                                                 \\         |       ║  |\n' +
            '|       ║ |        /                                                   \\        |          |\n' +
            '|         |       /                    └                                \\    ║  |       ║  |\n' +
            '|    ║    |  ║   /       ┘                                               \\      |          |\n' +
            '|         |     /                                                         \\     |  ║       |\n' +
            '|         |    /                                              └            \\  ║ |          |\n' +
            '|         |   /                                  ┘                          \\   |          |\n' +
            '|         |  /    └                                                          \\  |          |\n' +
            '|         | /                                                            ┘    \\ |       ║  |\n' +
            '|       ║ |/                                                                   \\|  ║       |\n' +
            '|_________/                                                                     \\__________|\n' +
            '|                                                       ┘                                  |\n' +
            '|           └          └                                              └                    |\n' +
            '|                                                                                      └   |\n' +
            '|  ┘                            ┘                        ┘                                 |\n' +
            '|                                                                                          |\n' +
            '|                                          └                                               |\n' +
            '|               └                                                             └            |\n' +
            '|                                                             ┘                            |\n' +
            '|                         ┘                                                                |\n' +
            '|__________________________________________________________________________________________|\n');
    } else if (position == 3) {
        console.log(
            ' __________________________________________________________________________________________\n' +
            '|                          /                                   \\                |          |\n' +
            '|             ║       ║   /                        └            \\    ║          |          |\n' +
            '|                        /                                       \\              |          |\n' +
            '|      ║            ║   /                                         \\         ║   |    ║     |\n' +
            '|   ║          ║       /                 ┘                         \\            |          |\n' +
            '|                     /    └                              ┘         \\           |          |\n' +
            '|                ║   /                                               \\   ║      |  ║       |\n' +
            '|                   /                                                 \\         |       ║  |\n' +
            '|       ║          /                                                   \\        |          |\n' +
            '|                 /                    └                                \\    ║  |       ║  |\n' +
            '|    ║       ║   /       ┘                                               \\      |          |\n' +
            '|               /                                                         \\     |  ║       |\n' +
            '|              /                                              └            \\  ║ |          |\n' +
            '|             /                                  ┘                          \\   |          |\n' +
            '|            /    └                                                          \\  |          |\n' +
            '|           /                                                            ┘    \\ |       ║  |\n' +
            '|       ║  /                                                                   \\|  ║       |\n' +
            '|         /                                                                     \\__________|\n' +
            '|        /                                              ┘                                  |\n' +
            '|       /   └          └                                              └                    |\n' +
            '|      /                                                                               └   |\n' +
            '|  ║  /                         ┘                        ┘                                 |\n' +
            '|    /                                                                                     |\n' +
            '|   /                                      └                                               |\n' +
            '|  /            └                                                             └            |\n' +
            '| /                                                           ┘                            |\n' +
            '|/                        ┘                                                                |\n' +
            '|__________________________________________________________________________________________|\n');
    } else if (position == 4) {
        console.log(
            ' __________________________________________________________________________________________\n' +
            '|         |                /                                    \\                          |\n' +
            '|         |   ║       ║   /                        └             \\   ║                     |\n' +
            '|         |              /                                        \\                        |\n' +
            '|      ║  |         ║   /                                          \\        ║        ║     |\n' +
            '|   ║     |    ║       /                 ┘                          \\                      |\n' +
            '|         |           /    └                              ┘          \\                     |\n' +
            '|         |      ║   /                                                \\  ║         ║       |\n' +
            '|         |         /                                                  \\                ║  |\n' +
            '|       ║ |        /                                                    \\                  |\n' +
            '|         |       /                    └                                 \\   ║          ║  |\n' +
            '|    ║    |  ║   /       ┘                                                \\                |\n' +
            '|         |     /                                                          \\       ║       |\n' +
            '|         |    /                                              └             \\ ║            |\n' +
            '|         |   /                                  ┘                           \\             |\n' +
            '|         |  /    └                                                           \\            |\n' +
            '|         | /                                                            ┘     \\        ║  |\n' +
            '|       ║ |/                                                                    \\  ║       |\n' +
            '|_________/                                                                      \\         |\n' +
            '|                                                       ┘                         \\        |\n' +
            '|           └          └                                              └            \\       |\n' +
            '|                                                                                   \\   ║  |\n' +
            '|  ┘                            ┘                        ┘                           \\     |\n' +
            '|                                                                                     \\    |\n' +
            '|                                          └                                           \\   |\n' +
            '|               └                                                             └         \\  |\n' +
            '|                                                             ┘                          \\ |\n' +
            '|                         ┘                                                               \\|\n' +
            '|__________________________________________________________________________________________|\n');
    }
}

//
//possiblyUsefulFunctions
//

/*
const JANUARY = 1, FEBRUARY = 2, MARCH = 3, APRIL = 4, MAY = 5, JUNE = 6, JULY = 7, AUGUST = 8, SEPTEMBER = 9,
    OCTOBER = 10, NOVEMBER = 11, DECEMBER = 12;
*/
/*
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
        displayAntiem(2);
        chooseVar = PROMPT.question('You enter the RESIDENTIAL AREA.\n ' +
            'The house, already dwarfed by the far grander one just across the road, looks even shabbier up ' +
            'close.\n ' +
            'The wood it\'s made of is a dark red--grand, once, but having succumbed to the ravages of time ' +
            'long ago, it gives off a pungent scent.\n ' +
            'You could barely believe that someone could actually live there, but the sound of a young man ' +
            'yelling is clearly audible through the thin, wooden walls.\n ' +
            'Through the window, you see a flash of green hair.\n ' +
            'You remember deviant hair colors were quite popular with certain groups back home, and quickly walk ' +
            'away.\n' +
            '                          Press Enter to Continue\n>');
        displayAntiem(2);
        chooseVar = PROMPT.question('Now, where would you like to go?\n' +
            '<<(1) = Gawk at the grand house.>>\n' +
            '<<(2) = Scope out the smaller house.>>\n' +
            '<<(3) = Munch on something from McFriday\'s.>>\n' +
            '<<(4) = Back up to the bus station.\'s.>>\n' +
            '<<(5) = Take a hike to the town hall.\'s.>>\n' +
            '>');
    } else if (chooseVar == 3) {
        displayAntiem(3);
        chooseVar = PROMPT.question('Through the windows, you see that the McFriday\'s seems to be entirely ' +
            'empty, aside from a surly-looking girl at the counter.\n ' +
            'The red-and-white tiles, and 1970s diner aesthetic, makes you nostalgic for a time you weren\'t ' +
            'on the right continent to experience.\n ' +
            'Of course, you weren\'t even born yet, either.\n ' +
            'You cautiously open the door and walk inside.\n ' +
            '                          Press Enter to Continue\n>');
        displayMcFriday();
        chooseVar = PROMPT.question('The diner\'s windows let you see most of the inside from the scorched ' +
            'street outside, but there were a few things you didn\'t notice.\n ' +
            'Immediately to your right is a one-armed bandit.\n ' +
            'An American gambling machine, which seems very out of place in a McFriday\'s.\n ' +
            'You notice the surly-looking girl at the counter, though clearly under eighteen, is smoking.\n ' +
            'Perhaps this quiet town has more in common with your home than you thought.\n ' +
            'The girl waves you over.\n ' +
            '                          Press Enter to Continue\n>');
        displayMcFriday(1);
        chooseVar = PROMPT.question('She speaks quickly, and you understand nothing she says.\n ' +
            'She cottons on to this quickly, and instead repeats the same old script every McFriday\'s employee ' +
            'knows by heart.\n ' +
            'You still have no idea what she\'s saying, but you know what she\'s asking.\n ' +
            'Over-enunciating your words, you order a Joyful Meal, McFriday\'s specialty.\n ' +
            'The girl nods, then points at a seat, clearly inviting you to sit down.\n ' +
            'You do so.\n ' +
            '                          Press Enter to Continue\n>');
        displayMcFriday(2);
        chooseVar = PROMPT.question('The girl disappears into the kitchen.\n ' +
            'You don\'t hear any further communications from the girl, so you assume she\'s alone.\n ' +
            '                          Press Enter to Continue\n>');
        displayMcFriday(1);
        chooseVar = PROMPT.question('The girl comes back, and presents you with a fresh Joyful Meal.\n ' +
            'You note, with some distaste, that she\'s still clutching her cigarette in her hand.\n ' +
            'You eat your burger quickly, in awkward silence.\n ' +
            'The girl at the counter shows you her phone. Google translate is open, and her phone is displaying a ' +
            'message.' +
            '                          Press Enter to Continue\n>');

    }
}*/