import readlineSync from 'readline-sync';
import { makeRandomPair, getFirstNumber, getSecondNumber } from '../helpers/pair';
import getRandomNumber from '../helpers/random';
import startGame from '..';

const showWelcomeMessage = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?');
};

const sum = (pair) => String(getFirstNumber(pair) + getSecondNumber(pair));
const mult = (pair) => String(getFirstNumber(pair) * getSecondNumber(pair));
const minus = (pair) => String(getFirstNumber(pair) - getSecondNumber(pair));

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

const gameBrainCalc = () => {
  const randomPair = makeRandomPair();

  const randomSing = ['+', '-', '*'][getRandomNumber(0, 2)];
  const correctAnswer = getAnswer(randomPair, randomSing);

  console.log(`Question: ${getFirstNumber(randomPair)} ${randomSing} ${getSecondNumber(randomPair)}`);

  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('\nCorrect!\n');
    return true;
  }
  console.log(`\n'${answer}' is wrong answer ;(. Correct answer was ${correctAnswer}.\n`);
  return false;
};

export default () => startGame(showWelcomeMessage, gameBrainCalc);
