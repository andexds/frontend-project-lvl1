import readlineSync from 'readline-sync';

const startGame = (gameName, regulations, round) => {
  const maxRound = 3;

  console.log(`Welcome to the ${gameName}!`);
  console.log(regulations);

  const name = readlineSync.question('What is your name?\n');
  console.log(`Hello, ${name}`);

  for (let countOfRound = 0; countOfRound < maxRound; countOfRound += 1) {
    const roundStep = round();
    const { question, answer } = roundStep;

    const userAnswer = readlineSync.question(`${question}\n`);

    if (userAnswer !== answer) {
      console.log(`\n'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\n Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`\nCongratulations, ${name}\n`);
};

export default startGame;
