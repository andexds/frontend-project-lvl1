import readlineSync from 'readline-sync';

const askName = () => readlineSync.question('What is your name?\n');

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const name = askName();
  console.log(`Hello, ${name}`);

  let rightAnswer = 0;

  while (rightAnswer < 3) {
    const currentNumber = Math.round(Math.random() * 10);
    console.log(`Question: ${currentNumber}`);
    const correctAnswer = (currentNumber % 2 === 0) && currentNumber > 0 ? 'yes' : 'no';

    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      rightAnswer += 1;
      console.log('\nCorrect!\n');
    } else {
      console.log(`\n'${answer}' is wrong answer ;(. Correct answer was ${correctAnswer}.\n`);
      return;
    }
  }
  console.log(`\nCongratulations, ${name}\n`);
};

export { askName, brainEven };
