import readlineSync from 'readline-sync';

const startGame = (showWelcomeMessage, game) => {
  showWelcomeMessage();
  const name = readlineSync.question('What is your name?\n');
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

export default startGame;
