import readlineSync from 'readline-sync';

const askName = () => readlineSync.question('What is your name?\n');

const startGame = (game) => {
  const name = askName();
  console.log(`Hello, ${name}`);
  let rightAnswer = 0;

  while (rightAnswer < 3) {
    const isCorrect = game();
    if (isCorrect) {
      rightAnswer += 1;
    } else {
      return;
    }
  }
  console.log(`\nCongratulations, ${name}\n`);
};

export { askName, startGame };
