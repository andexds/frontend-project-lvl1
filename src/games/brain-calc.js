import { makeRandomPair, getFirstNumber, getSecondNumber } from '../helpers/pair';
import getRandomNumber from '../helpers/random';
import startGame from '..';

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
  const answer = getAnswer(randomPair, randomSing);

  return {
    question: `${getFirstNumber(randomPair)} ${randomSing} ${getSecondNumber(randomPair)}`,
    answer,
  };
};

export default () => startGame({
  gameName: 'Brain Calc Game',
  regulations: 'What is the result of the expression?',
  round: gameBrainCalc,
});
