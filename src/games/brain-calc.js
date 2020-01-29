import getRandomNumber from '../helpers/random';
import startGame from '..';

const sum = (a, b) => a + b;
const mult = (a, b) => a * b;
const minus = (a, b) => a - b;

const getAnswer = (a, b, sing) => {
  switch (sing) {
    case '+':
      return sum(a, b);
    case '-':
      return minus(a, b);
    case '*':
      return mult(a, b);
    default: return false;
  }
};

const getBrainCalcRound = () => {
  const sings = ['+', '-', '*'];
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const randomSing = sings[getRandomNumber(0, sings.length - 1)];
  const answer = String(getAnswer(firstNumber, secondNumber, randomSing));

  return {
    question: `${firstNumber} ${randomSing} ${secondNumber}`,
    answer,
  };
};

export default () => startGame('Brain Calc Game', 'What is the result of the expression?', getBrainCalcRound);
