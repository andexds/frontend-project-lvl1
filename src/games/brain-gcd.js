import readlineSync from 'readline-sync';
import {
  makeRandomPair, getX, getY,
} from '../helpers/pair';
import randomNumber from '../helpers/random';

const welcomeMessage = () => {
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

const brainGcd = () => {
  const randomPair = makeRandomPair(randomNumber(100) + 1, randomNumber(100) + 1);
  const nod = getNOD(randomPair);

  console.log(`Question: ${getX(randomPair)} ${getY(randomPair)}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === nod) {
    console.log('\nCorrect!\n');
    return true;
  }
  console.log(`\n'${answer}' is wrong answer ;(. Correct answer was ${nod}.\n`);
  return false;
};

export { welcomeMessage };
export default brainGcd;
