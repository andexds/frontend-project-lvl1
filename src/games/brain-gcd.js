import readlineSync from 'readline-sync';
import {
  makeRandomPair, getX, getY,
} from '../helpers/pair';
import getRandomNumber from '../helpers/random';
import startGame from '..';

const showWelcomeMessage = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Find the greatest common divisor of given numbers.');
};

const getNOD = (pair) => {
  let x = getX(pair);
  let y = getY(pair);

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
  const randomPair = makeRandomPair(getRandomNumber(100) + 1, getRandomNumber(100) + 1);
  const correctAnswer = getNOD(randomPair);

  console.log(`Question: ${getX(randomPair)} ${getY(randomPair)}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === correctAnswer) {
    console.log('\nCorrect!\n');
    return true;
  }
  console.log(`\n'${answer}' is wrong answer ;(. Correct answer was ${correctAnswer}.\n`);
  return false;
};

export default () => startGame(showWelcomeMessage, gameBrainGcd);
