import readlineSync from 'readline-sync';
import getRandomNumber from '../helpers/random';
import startGame from '..';

const showWelcomeMessage = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};
const isEven = (number) => number % 2 === 0;

const gemaBrainEven = () => {
  const currentNumber = getRandomNumber(0, 100);
  console.log(`Question: ${currentNumber}`);
  const correctAnswer = isEven(currentNumber) ? 'yes' : 'no';

  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('\nCorrect!\n');
    return true;
  }
  console.log(`\n'${answer}' is wrong answer ;(. Correct answer was ${correctAnswer}.\n`);
  return false;
};

export default () => startGame(showWelcomeMessage, gemaBrainEven);
