/* eslint-disable max-len */
/* eslint-disable default-case */
import readlineSync from 'readline-sync';
import { makeRandomPair, getX, getY, sum, mult, minus } from '../helpers/pair';
import randomNumber from '../helpers/random';

const wellcomeMessage = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?');
};

const getAnswer = (pair, sing) => {
  switch (sing) {
    case '+':
      return sum(pair);
    case '-':
      return minus(pair);
    case '*':
      return mult(pair);
    default: return false;
  }
};

const brainCalc = () => {
  const randomPair = makeRandomPair();

  const randomSing = ['+', '-', '*'][randomNumber(2)];
  const result = getAnswer(randomPair, randomSing);

  console.log(`Question: ${getX(randomPair)} ${randomSing} ${getY(randomPair)}`);

  const answer = readlineSync.question('Your answer: ');
  if (answer === result) {
    console.log('\nCorrect!\n');
    return true;
  }
  console.log(`\n'${answer}' is wrong answer ;(. Correct answer was ${result}.\n`);
  return false;
};

export { wellcomeMessage };
export default brainCalc;
