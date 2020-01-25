import readlineSync from 'readline-sync';

const startGame = (game) => {
  const { gameName, regulations, round } = game;

  console.log(`Welcome to the ${gameName}!`);
  console.log(regulations);

  const name = readlineSync.question('What is your name?\n');
  console.log(`Hello, ${name}`);
  let countRightAnswer = 0;

  while (countRightAnswer < 3) {
    const roundStep = round();
    const { question, answer } = roundStep;

    const userAnswer = readlineSync.question(`${question}\n`);
    if (userAnswer === answer) {
      countRightAnswer += 1;
    } else {
      console.log(`\n'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\n`);
      return;
    }
  }
  console.log(`\nCongratulations, ${name}\n`);
};

export default startGame;
