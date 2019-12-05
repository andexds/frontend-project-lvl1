/* eslint-disable max-len */
/* eslint-disable default-case */
import readlineSync from 'readline-sync';

const wellcomeMessage = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?');
};

const makeRandomPair = (x = Math.round(Math.random() * 10), y = Math.round(Math.random() * 10)) => (selector) => {
  switch (selector) {
    case 'first':
      return x;
    case 'second':
      return y;
  }
};

const getX = (pair) => pair('first');
const getY = (pair) => pair('second');

const sum = (pair) => String(getX(pair) + getY(pair));
const mult = (pair) => String(getX(pair) * getY(pair));
const minus = (pair) => String(getX(pair) - getY(pair));
const answerToString = (pair, sing) => `${getX(pair)} ${sing} ${getY(pair)}`;

const getAnswer = (pair, sing) => {
  switch (sing) {
    case '+':
      return sum(pair);
    case '-':
      return minus(pair);
    case '*':
      return mult(pair);
  }
};

const brainCalc = () => {
  const randomPair = makeRandomPair();

  const randomSing = ['+', '-', '*'][Math.round(Math.random() * 2)];
  const result = getAnswer(randomPair, randomSing);

  console.log(`Question: ${answerToString(randomPair, randomSing)}`);

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
