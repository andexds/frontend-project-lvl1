import readlineSync from 'readline-sync';
import getRandomNumber from '../helpers/random';
import startGame from '..';

const showWelcomeMessage = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

const isPrime = (n) => {
  for (let i = 2; i < n / 2; i += 1) {
    if (n % i === 0) return false;
  }
  return true;
};

const gameBrainPrime = () => {
  const number = getRandomNumber(4000) + 2;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');

  if (correctAnswer === answer) {
    console.log('\nCorrect!\n');
    return true;
  }
  console.log(`\n'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n`);
  return false;
};

export default () => startGame(showWelcomeMessage, gameBrainPrime);
