import readlineSync from 'readline-sync';
import {
  makeRandomPair, getFirstNumber, getSecondNumber, toString,
} from '../helpers/pair';
import getRandomNumber from '../helpers/random';
import startGame from '..';

const showWelcomeMessage = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Find the greatest common divisor of given numbers.');
};

const getNOD = (pair) => {
  let x = getFirstNumber(pair);
  let y = getSecondNumber(pair);

  while (x !== 0 && y !== 0) {
    if (x > y) {
      x %= y;
    } else {
      y %= x;
    }
  }

  return String(x + y);
};

const gameBrainGcd = () => {
  const randomPair = makeRandomPair(getRandomNumber(1, 100), getRandomNumber(1, 100));
  const correctAnswer = getNOD(randomPair);

  console.log(`Question: ${toString(randomPair)}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === correctAnswer) {
    console.log('\nCorrect!\n');
    return true;
  }
  console.log(`\n'${answer}' is wrong answer ;(. Correct answer was ${correctAnswer}.\n`);
  return false;
};

export default () => startGame(showWelcomeMessage, gameBrainGcd);
