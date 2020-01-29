import getRandomNumber from '../helpers/random';
import startGame from '..';

const getGCD = (firstNumber, secondNumber) => {
  let x = firstNumber;
  let y = secondNumber;

  while (x !== 0 && y !== 0) {
    if (x > y) {
      x %= y;
    } else {
      y %= x;
    }
  }

  return String(x + y);
};

const getBrainGcdRound = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const answer = getGCD(firstNumber, secondNumber);

  return {
    question: `${firstNumber} + ${secondNumber}`,
    answer,
  };
};

export default () => startGame('Brain GCD Game', 'Find the greatest common divisor of given numbers.', getBrainGcdRound);
